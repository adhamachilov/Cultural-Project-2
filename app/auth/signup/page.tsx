'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    interests: []
  })

  const countries = ['Russia', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Signup attempt:', formData)
    // Redirect to dashboard after successful signup
    window.location.href = '/dashboard'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen animated-bg flex items-center justify-center px-6 py-12">
      {/* Background particles */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        <div className="particle particle-9"></div>
        <div className="particle particle-10"></div>
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-3 mb-8">
            <Image 
              src="/logo.png" 
              alt="Magic of the East Logo" 
              width={64} 
              height={64} 
              className="w-16 h-16 animate-spin-slow"
            />
            <span className="text-white font-bold text-3xl">Magic of the East</span>
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">Join Our Community</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Choose how you'd like to participate in our cultural exchange platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tourist Option */}
          <div className="group">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:bg-white/15 hover:border-yellow/40 transition-all">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow to-yellow/70 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">I'm a Tourist</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Discover authentic cultural experiences and stay with local families around the world
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Book cultural experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Stay with host families</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Learn traditional skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Join cultural festivals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Save and review experiences</span>
                </div>
              </div>

              <Link
                href="/auth/signup/tourist"
                className="w-full bg-yellow text-dark-green py-4 rounded-2xl font-bold hover:bg-yellow/90 transition-colors flex items-center justify-center group-hover:scale-105 transform"
              >
                Sign Up as Tourist
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Host Family Option */}
          <div className="group">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:bg-white/15 hover:border-yellow/40 transition-all">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow to-yellow/70 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">I'm a Host Family</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Share your culture and traditions by welcoming travelers into your home
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Host international guests</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Share your cultural heritage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Teach traditional skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Manage your availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <span className="text-white/80">Earn from hosting</span>
                </div>
              </div>

              <Link
                href="/auth/signup/host"
                className="w-full bg-yellow text-dark-green py-4 rounded-2xl font-bold hover:bg-yellow/90 transition-colors flex items-center justify-center group-hover:scale-105 transform"
              >
                Sign Up as Host Family
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 text-lg">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-yellow hover:text-yellow/80 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
