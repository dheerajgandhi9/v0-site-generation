"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, Heart, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 299,
  originalPrice: 399,
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  rating: 4.8,
  reviews: 124,
  category: "Electronics",
  badge: "Best Seller",
  description:
    "Experience premium audio quality with our flagship wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and premium materials for ultimate comfort.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Premium leather ear cups",
    "Bluetooth 5.0 connectivity",
    "Quick charge: 5 min = 2 hours playback",
    "Foldable design for portability",
  ],
  colors: ["Black", "White", "Silver"],
  sizes: ["One Size"],
  inStock: true,
  stockCount: 15,
}

const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Absolutely amazing headphones! The sound quality is incredible and the noise cancellation works perfectly.",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 4,
    date: "2024-01-10",
    comment: "Great build quality and comfortable to wear for long periods. Battery life is as advertised.",
    verified: true,
  },
  {
    id: 3,
    name: "Mike Davis",
    rating: 5,
    date: "2024-01-05",
    comment: "Best headphones I've ever owned. Worth every penny!",
    verified: true,
  },
]

const relatedProducts = [
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    price: 199,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 129,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
  },
  {
    id: 4,
    name: "USB-C Cable",
    price: 29,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Headphone Stand",
    price: 49,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
  },
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)

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
          <Link href="/products" className="hover:text-slate-900">
            Products
          </Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-slate-900" : "border-slate-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                {product.badge}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">{product.name}</h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">Save ${product.originalPrice - product.price}</Badge>
                )}
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">{product.description}</p>

            {/* Options */}
            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Color</Label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl border-2 transition-colors ${
                        selectedColor === color
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Size</Label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-48 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Quantity</Label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-xl"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-xl"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span className={product.inStock ? "text-green-700" : "text-red-700"}>
                {product.inStock ? `In Stock (${product.stockCount} available)` : "Out of Stock"}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 rounded-2xl text-lg py-6" disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl py-6 bg-transparent">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <Truck className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="font-medium text-sm">Free Shipping</p>
                  <p className="text-xs text-slate-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <RotateCcw className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="font-medium text-sm">Easy Returns</p>
                  <p className="text-xs text-slate-600">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <Shield className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="font-medium text-sm">Warranty</p>
                  <p className="text-xs text-slate-600">2-year coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 rounded-2xl">
            <TabsTrigger value="description" className="rounded-xl">
              Description
            </TabsTrigger>
            <TabsTrigger value="features" className="rounded-xl">
              Features
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-xl">
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Crafted with premium materials and cutting-edge technology, these headphones deliver an unparalleled
                  audio experience. Whether you're commuting, working, or relaxing at home, enjoy crystal-clear sound
                  with deep bass and crisp highs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button variant="outline" className="rounded-xl bg-transparent">
                    Write a Review
                  </Button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                          <span className="font-medium text-slate-700">{review.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-slate-600">{review.date}</span>
                          </div>
                          <p className="text-slate-700">{review.comment}</p>
                        </div>
                      </div>
                      {review.id !== reviews[reviews.length - 1].id && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="font-bold text-slate-900">${product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>
}
