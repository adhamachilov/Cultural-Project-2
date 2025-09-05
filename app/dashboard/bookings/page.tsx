'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Bookings() {
  const mockBookings = [
    {
      id: 1,
      title: 'Traditional Kazakh Cooking',
      family: 'Aigul & Murat Family',
      location: 'Almaty, Kazakhstan',
      dates: 'March 15-20, 2024',
      status: 'confirmed',
      price: 850,
      image: 'https://kalpak-travel.com/wp-content/uploads/2017/04/turkistan-mausoleum-kazakhstan.jpg'
    },
    {
      id: 2,
      title: 'Silk Road Music Experience',
      family: 'Dilshod & Gulnara Family',
      location: 'Samarkand, Uzbekistan',
      dates: 'April 10-17, 2024',
      status: 'pending',
      price: 1200,
      image: 'https://uzbekistan.travel/storage/app/uploads/public/671/9dc/d43/6719dcd43a6f2547697505.jpg'
    }
  ]

  return (
    <div className="min-h-screen animated-bg flex">
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

      {/* Sidebar */}
      <div className="relative z-10 w-80 bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col h-screen overflow-y-auto">
        {/* Logo */}
        <div className="p-8 border-b border-white/10">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo.png" 
              alt="Magic of the East Logo" 
              width={48} 
              height={48} 
              className="w-12 h-12 animate-spin-slow"
            />
            <div>
              <span className="text-white font-bold text-2xl block">Magic of the East</span>
              <span className="text-white/60 text-sm">Cultural Exchange</span>
            </div>
          </Link>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow to-yellow/70 rounded-2xl flex items-center justify-center">
              <span className="text-dark-green font-bold text-xl">JD</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">John Doe</h3>
              <p className="text-white/60 text-sm">Cultural Explorer</p>
              <p className="text-white/50 text-xs mt-1">Member since 2024</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            <Link
              href="/dashboard"
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all text-white/80 hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Discover</span>
            </Link>
            
            <Link
              href="/dashboard/bookings"
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all bg-yellow text-dark-green font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
              </svg>
              <span>My Bookings</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">3</span>
            </Link>
            
            <Link
              href="/dashboard/saved"
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all text-white/80 hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Saved</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">12</span>
            </Link>
            
            <Link
              href="/dashboard/messages"
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all text-white/80 hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Messages</span>
              <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded-full text-xs">2</span>
            </Link>
            
            <Link
              href="/dashboard/profile"
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all text-white/80 hover:bg-white/10 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile</span>
            </Link>
          </div>
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-white/10">
          <Link
            href="/"
            className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 overflow-y-auto h-screen">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">My Bookings</h1>
            <p className="text-white/70 text-lg">Manage your cultural experiences</p>
          </div>

          {/* Booking Cards */}
          <div className="space-y-6">
            {mockBookings.map((booking) => (
              <div key={booking.id} className="bg-white/8 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
                <div className="flex">
                  <div className="w-64 h-48 overflow-hidden">
                    <img 
                      src={booking.image} 
                      alt={booking.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-2">{booking.title}</h3>
                        <p className="text-white/70 mb-1">Host: {booking.family}</p>
                        <p className="text-white/60 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {booking.location}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow/20 text-yellow'
                      }`}>
                        {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/60 text-sm mb-1">Dates</p>
                        <p className="text-white font-medium">{booking.dates}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/60 text-sm mb-1">Total Price</p>
                        <p className="text-yellow font-bold text-xl">${booking.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mt-6">
                      <button className="bg-yellow text-dark-green px-4 py-2 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                        View Details
                      </button>
                      <button className="border border-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/10 transition-colors">
                        Contact Host
                      </button>
                      {booking.status === 'pending' && (
                        <button className="border border-red-500/50 text-red-400 px-4 py-2 rounded-xl hover:bg-red-500/10 transition-colors">
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
