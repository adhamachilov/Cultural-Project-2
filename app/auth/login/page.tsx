'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
    
    // Admin login check
    if (email === 'admin' && password === 'adjo1020') {
      window.location.href = '/dashboard/admin'
    }
    // Host family login (check for host-specific usernames)
    else if (email.toLowerCase().includes('host') || email.toLowerCase().includes('family')) {
      window.location.href = '/dashboard/host'
    }
    // Tourist login (default for email addresses and other users)
    else {
      window.location.href = '/dashboard/tourist'
    }
  }

  return (
    <div className="min-h-screen animated-bg flex items-center justify-center px-6">
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
        <div className="particle particle-11"></div>
        <div className="particle particle-12"></div>
        <div className="particle particle-13"></div>
        <div className="particle particle-14"></div>
        <div className="particle particle-15"></div>
        <div className="particle particle-16"></div>
        <div className="particle particle-17"></div>
        <div className="particle particle-18"></div>
        <div className="particle particle-19"></div>
        <div className="particle particle-20"></div>
        <div className="particle particle-21"></div>
        <div className="particle particle-22"></div>
        <div className="particle particle-23"></div>
        <div className="particle particle-24"></div>
        <div className="particle particle-25"></div>
        <div className="particle particle-26"></div>
        <div className="particle particle-27"></div>
        <div className="particle particle-28"></div>
        <div className="particle particle-29"></div>
        <div className="particle particle-30"></div>
        <div className="particle particle-31"></div>
        <div className="particle particle-32"></div>
        <div className="particle particle-33"></div>
        <div className="particle particle-34"></div>
        <div className="particle particle-35"></div>
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="Magic of the East Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 animate-spin-slow"
              />
              <span className="text-white font-bold text-2xl">Magic of the East</span>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/70">Sign in to continue your cultural journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Email or Username</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                placeholder="your.email@example.com or username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-white/80 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="sr-only" />
                <div className="w-4 h-4 bg-white/10 border border-white/20 rounded flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-yellow hidden" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-white/70 text-sm">Remember me</span>
              </label>
              <Link href="#" className="text-yellow hover:text-yellow/80 text-sm font-medium transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow text-dark-green py-3 rounded-xl font-semibold hover:bg-yellow/90 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-yellow hover:text-yellow/80 font-medium transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
