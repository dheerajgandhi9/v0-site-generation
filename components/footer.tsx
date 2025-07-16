import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EliteStore</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your trusted destination for premium products. We curate the finest selection to enhance your lifestyle
              with quality and style.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-slate-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/products" className="block text-slate-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/categories" className="block text-slate-300 hover:text-white transition-colors">
                Categories
              </Link>
              <Link href="/blog" className="block text-slate-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <nav className="space-y-3">
              <Link href="/help" className="block text-slate-300 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="/shipping" className="block text-slate-300 hover:text-white transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-slate-300 hover:text-white transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/size-guide" className="block text-slate-300 hover:text-white transition-colors">
                Size Guide
              </Link>
              <Link href="/track-order" className="block text-slate-300 hover:text-white transition-colors">
                Track Your Order
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">123 Commerce St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">support@elitestore.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© 2024 EliteStore. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
