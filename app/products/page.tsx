"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "Electronics",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    category: "Electronics",
    badge: "New",
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    price: 89,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 156,
    category: "Fashion",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 449,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 203,
    category: "Furniture",
    badge: "Premium",
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 49,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 67,
    category: "Electronics",
    badge: "Eco-Friendly",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 129,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 145,
    category: "Electronics",
    badge: "Trending",
  },
  {
    id: 7,
    name: "Designer Sunglasses",
    price: 159,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 78,
    category: "Fashion",
    badge: "Limited",
  },
  {
    id: 8,
    name: "Smart Home Hub",
    price: 199,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 92,
    category: "Electronics",
    badge: "Smart",
  },
]

const categories = ["Electronics", "Fashion", "Furniture", "Sports", "Home & Garden"]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("popularity")

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={category} className="text-sm font-medium">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-slate-300" />
                  ))}
                </div>
                <span className="text-sm">& Up</span>
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

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
          <span className="text-slate-900">Products</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 space-y-8">
            <Card className="p-6 rounded-2xl">
              <FilterSidebar />
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
                <p className="text-slate-600 mt-1">Showing {products.length} results</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden rounded-xl bg-transparent">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <div className="py-6">
                      <h2 className="text-lg font-semibold mb-6">Filters</h2>
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 rounded-xl">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex items-center border rounded-xl p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-lg"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-lg"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  <div className={`${viewMode === "list" ? "flex" : ""}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === "list" ? "w-48 h-48" : "w-full h-64"
                        }`}
                      />
                      <Badge className="absolute top-4 left-4" variant="secondary">
                        {product.badge}
                      </Badge>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <CardContent className={`space-y-4 ${viewMode === "list" ? "flex-1 p-6" : "p-6"}`}>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg text-slate-900 group-hover:text-slate-700 transition-colors">
                          <Link href={`/products/${product.id}`}>{product.name}</Link>
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-slate-600">({product.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-slate-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button className="rounded-xl" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="rounded-xl bg-transparent">
                  Previous
                </Button>
                <Button className="rounded-xl">1</Button>
                <Button variant="outline" className="rounded-xl bg-transparent">
                  2
                </Button>
                <Button variant="outline" className="rounded-xl bg-transparent">
                  3
                </Button>
                <Button variant="outline" className="rounded-xl bg-transparent">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
