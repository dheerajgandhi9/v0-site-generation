"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="rounded-2xl shadow-lg">
            {!isSubmitted ? (
              <>
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl font-bold text-slate-900">Forgot Password?</CardTitle>
                  <p className="text-slate-600">
                    No worries! Enter your email address and we'll send you a link to reset your password.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <Button size="lg" className="w-full rounded-2xl text-lg py-6">
                      Send Reset Link
                    </Button>
                  </form>

                  <div className="text-center">
                    <Link
                      href="/login"
                      className="inline-flex items-center text-slate-600 hover:text-slate-900 text-sm"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Sign In
                    </Link>
                  </div>
                </CardContent>
              </>
            ) : (
              <>
                <CardHeader className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Check Your Email</CardTitle>
                  <p className="text-slate-600">
                    We've sent a password reset link to <span className="font-medium text-slate-900">{email}</span>
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <p className="text-sm text-slate-600">
                      Didn't receive the email? Check your spam folder or try again.
                    </p>

                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-xl">
                      Try Again
                    </Button>
                  </div>

                  <div className="text-center">
                    <Link
                      href="/login"
                      className="inline-flex items-center text-slate-600 hover:text-slate-900 text-sm"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Sign In
                    </Link>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
