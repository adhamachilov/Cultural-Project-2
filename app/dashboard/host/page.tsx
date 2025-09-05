'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MessagingSystem from '../../../components/MessagingSystem'
import NotificationSystem from '../../../components/NotificationSystem'

export default function HostDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedDate, setSelectedDate] = useState('')

  const mockBookings = [
    {
      id: 1,
      guest: 'Sarah Johnson',
      experience: 'Traditional Cooking Class',
      dates: 'March 15-20, 2024',
      status: 'confirmed',
      price: 850,
      guests: 2
    },
    {
      id: 2,
      guest: 'Michael Chen',
      experience: 'Cultural Music Session',
      dates: 'April 10-12, 2024',
      status: 'pending',
      price: 450,
      guests: 1
    }
  ]

  const mockPhotos = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    'https://kalpak-travel.com/wp-content/uploads/2017/04/turkistan-mausoleum-kazakhstan.jpg',
    'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-people-3.jpg'
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
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
      </div>

      {/* Sidebar */}
      <div className="relative z-10 w-80 bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col h-screen overflow-y-auto sidebar-scroll">
        {/* Logo */}
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center justify-between">
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
            <NotificationSystem />
          </div>
        </div>

        {/* Host Profile */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow to-yellow/70 rounded-2xl flex items-center justify-center">
              <span className="text-dark-green font-bold text-xl">AF</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Aigul Family</h3>
              <p className="text-white/60 text-sm">Host Family</p>
              <p className="text-white/50 text-xs mt-1">Hosting since 2023</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'overview' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Overview</span>
            </button>
            
            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'bookings' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
              </svg>
              <span>Bookings</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">2</span>
            </button>
            
            <button
              onClick={() => setActiveTab('calendar')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'calendar' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
              </svg>
              <span>Availability</span>
            </button>
            
            <button
              onClick={() => setActiveTab('photos')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'photos' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Photos</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">4</span>
            </button>
            
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'profile' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile</span>
            </button>
            
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'messages' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Messages</span>
              <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded-full text-xs">1</span>
            </button>
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

      {/* Main Content */}
      <div className="flex-1 relative z-10 overflow-y-auto h-screen">
        <main className="p-8">
          {activeTab === 'overview' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Host Dashboard</h1>
                <p className="text-white/70 text-lg">Manage your cultural experiences</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Total Bookings</h3>
                    <div className="w-12 h-12 bg-yellow/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">24</p>
                  <p className="text-green-400 text-sm">+12% this month</p>
                </div>
                
                <div className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Monthly Revenue</h3>
                    <div className="w-12 h-12 bg-yellow/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">$3,240</p>
                  <p className="text-green-400 text-sm">+8% this month</p>
                </div>
                
                <div className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Rating</h3>
                    <div className="w-12 h-12 bg-yellow/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">4.9</p>
                  <p className="text-white/60 text-sm">18 reviews</p>
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-white font-bold text-xl mb-4">Recent Activity</h3>
                <p className="text-white/70">Your hosting activity and guest interactions will appear here</p>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Guest Bookings</h1>
                <p className="text-white/70 text-lg">Manage your guest reservations</p>
              </div>

              <div className="space-y-6">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-xl">{booking.guest}</h3>
                        <p className="text-white/60">{booking.experience}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow/20 text-yellow'
                      }`}>
                        {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-white/60">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                        </svg>
                        {booking.dates}
                      </div>
                      <div className="flex items-center text-white/60">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {booking.guests} guests
                      </div>
                      <div className="flex items-center text-yellow font-bold">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        ${booking.price}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="bg-yellow text-dark-green px-4 py-2 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                        Message Guest
                      </button>
                      <button className="bg-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                        View Details
                      </button>
                      {booking.status === 'pending' && (
                        <button className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl font-semibold hover:bg-green-500/30 transition-colors">
                          Accept
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Availability Calendar</h1>
                <p className="text-white/70 text-lg">Manage your hosting availability</p>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-3">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow"
                  />
                </div>
                <p className="text-white/70 text-center py-12">Calendar interface for managing availability will be implemented here</p>
              </div>
            </div>
          )}

          {activeTab === 'photos' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Photo Gallery</h1>
                <p className="text-white/70 text-lg">Showcase your cultural experiences</p>
              </div>

              <div className="mb-6">
                <button className="bg-yellow text-dark-green px-6 py-3 rounded-2xl font-bold hover:bg-yellow/90 transition-colors">
                  Upload New Photos
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockPhotos.map((photo, index) => (
                  <div key={index} className="bg-white/8 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={photo} 
                        alt={`Experience photo ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-white/70 text-sm">Experience Photo {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Host Profile</h1>
                <p className="text-white/70 text-lg">Manage your hosting profile</p>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Host profile management settings will appear here</p>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Messages</h1>
                <p className="text-white/70 text-lg">Chat with your guests</p>
              </div>

              <MessagingSystem />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
