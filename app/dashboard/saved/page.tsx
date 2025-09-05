'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Saved() {
  const savedExperiences = [
    {
      id: 1,
      title: 'Traditional Pottery Making',
      location: 'Khiva, Uzbekistan',
      family: 'Rustam & Zarina Family',
      price: 650,
      duration: '4 days',
      rating: 4.9,
      image: 'https://uzbekistan.travel/storage/app/uploads/public/671/9dc/d43/6719dcd43a6f2547697505.jpg',
      category: 'Crafts & Arts'
    },
    {
      id: 2,
      title: 'Mountain Nomad Experience',
      location: 'Naryn, Kyrgyzstan',
      family: 'Askar & Gulzada Family',
      price: 890,
      duration: '6 days',
      rating: 4.8,
      image: 'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-people-3.jpg',
      category: 'Outdoor & Adventure'
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
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all text-white/80 hover:bg-white/10 hover:text-white"
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
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all bg-yellow text-dark-green font-semibold"
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
            <h1 className="text-4xl font-bold text-white mb-2">Saved Experiences</h1>
            <p className="text-white/70 text-lg">Your wishlist of cultural adventures</p>
          </div>

          {/* Filter Options */}
          <div className="flex items-center space-x-4 mb-8">
            <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow">
              <option value="all" className="bg-dark-green">All Categories</option>
              <option value="culinary" className="bg-dark-green">Culinary Arts</option>
              <option value="crafts" className="bg-dark-green">Crafts & Arts</option>
              <option value="adventure" className="bg-dark-green">Outdoor & Adventure</option>
            </select>
            <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow">
              <option value="recent" className="bg-dark-green">Recently Saved</option>
              <option value="price-low" className="bg-dark-green">Price: Low to High</option>
              <option value="price-high" className="bg-dark-green">Price: High to Low</option>
            </select>
          </div>

          {/* Saved Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {savedExperiences.map((experience) => (
              <div key={experience.id} className="bg-white/8 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-yellow/40 transition-all group">
                <div className="flex">
                  <div className="relative w-48 h-48 overflow-hidden">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-yellow/20 text-yellow px-3 py-1 rounded-full text-xs font-semibold">
                        {experience.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-medium">{experience.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-xl mb-2 leading-tight">{experience.title}</h3>
                    <p className="text-white/70 text-sm mb-3">Host: {experience.family}</p>
                    
                    <div className="flex items-center text-white/60 text-sm mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {experience.location}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-yellow font-bold text-2xl">${experience.price}</span>
                        <span className="text-white/60 text-sm ml-1">/ {experience.duration}</span>
                      </div>
                      <button className="bg-yellow text-dark-green px-6 py-2 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                        Book Now
                      </button>
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
