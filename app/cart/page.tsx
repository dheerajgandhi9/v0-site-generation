"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const initialCartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=120&width=120",
    quantity: 1,
    color: "Black",
    size: "One Size",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    image: "/placeholder.svg?height=120&width=120",
    quantity: 2,
    color: "Silver",
    size: "42mm",
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    price: 89,
    image: "/placeholder.svg?height=120&width=120",
    quantity: 1,
    color: "Navy",
    size: "Medium",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => {
    const originalPrice = item.originalPrice || item.price
    return sum + (originalPrice - item.price) * item.quantity
  }, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="h-12 w-12 text-slate-400" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
              <p className="text-slate-600">Looks like you haven't added anything to your cart yet.</p>
            </div>
            <Button size="lg" className="rounded-2xl" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900">Shopping Cart</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
              <span className="text-slate-600">{cartItems.length} items</span>
            </div>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-slate-900">{item.name}</h3>
                              <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                                <span>Color: {item.color}</span>
                                <span>Size: {item.size}</span>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-slate-400 hover:text-red-500 rounded-full"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 rounded-lg"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 rounded-lg"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-900">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                {item.originalPrice && (
                                  <span className="text-sm text-slate-500 line-through">
                                    ${(item.originalPrice * item.quantity).toFixed(2)}
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-slate-600">${item.price.toFixed(2)} each</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < cartItems.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-2xl bg-transparent" asChild>
                <Link href="/products">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold text-slate-900">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Savings</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-700">
                      Add ${(100 - subtotal).toFixed(2)} more to get free shipping!
                    </p>
                  </div>
                )}

                <Button size="lg" className="w-full rounded-2xl text-lg py-6" asChild>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card className="rounded-2xl">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-slate-900">Promo Code</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="rounded-xl"
                  />
                  <Button variant="outline" className="rounded-xl bg-transparent">
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <span>Secure checkout guaranteed</span>
              </div>
              <p className="text-xs text-slate-500">Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
