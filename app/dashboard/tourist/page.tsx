'use client'

import { useState } from 'react'
import Link from 'next/link'
import MessagingSystem from '../../../components/MessagingSystem'
import ReviewSystem from '../../../components/ReviewSystem'
import NotificationSystem from '../../../components/NotificationSystem'

export default function TouristDashboard() {
  const [activeTab, setActiveTab] = useState('discover')
  const [searchQuery, setSearchQuery] = useState('')

  const mockBookings = [
    {
      id: 1,
      title: 'Traditional Kazakh Cooking with Aigul Family',
      location: 'Almaty, Kazakhstan',
      dates: 'March 15-20, 2024',
      status: 'confirmed',
      price: 850,
      image: 'https://kalpak-travel.com/wp-content/uploads/2017/04/turkistan-mausoleum-kazakhstan.jpg',
      host: 'Aigul & Murat'
    },
    {
      id: 2,
      title: 'Silk Road Music & Dance Experience',
      location: 'Samarkand, Uzbekistan',
      dates: 'April 10-17, 2024',
      status: 'pending',
      price: 1200,
      image: 'https://uzbekistan.travel/storage/app/uploads/public/671/9dc/d43/6719dcd43a6f2547697505.jpg',
      host: 'Dilshod & Gulnara'
    }
  ]

  const mockSaved = [
    {
      id: 1,
      title: 'Nomadic Heritage & Horseback Adventures',
      location: 'Bishkek, Kyrgyzstan',
      price: 950,
      rating: 4.7,
      image: 'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-people-3.jpg',
      host: 'Bakyt & Cholpon'
    },
    {
      id: 2,
      title: 'Russian Maslenitsa Week',
      location: 'Moscow, Russia',
      price: 200,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      host: 'Natasha & Igor'
    }
  ]

  const mockReviews = [
    {
      id: 1,
      experience: 'Traditional Uzbek Cooking',
      host: 'Dilshod Family',
      rating: 5,
      date: 'February 2024',
      comment: 'Amazing experience! The family was so welcoming and taught me authentic recipes.',
      photos: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400']
    },
    {
      id: 2,
      experience: 'Kazakh Eagle Festival',
      host: 'Murat Family',
      rating: 4,
      date: 'January 2024',
      comment: 'Incredible cultural immersion. The eagle hunting demonstration was unforgettable.',
      photos: []
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
              <div className="w-12 h-12 bg-yellow rounded-2xl flex items-center justify-center">
                <div className="w-5 h-5 bg-dark-green rounded-full"></div>
              </div>
              <div>
                <span className="text-white font-bold text-2xl block">CHE</span>
                <span className="text-white/60 text-sm">Cultural Exchange</span>
              </div>
            </Link>
            <NotificationSystem />
          </div>
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
            <button
              onClick={() => setActiveTab('discover')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'discover' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Discover</span>
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
              <span>My Bookings</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">2</span>
            </button>
            
            <button
              onClick={() => setActiveTab('saved')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'saved' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Saved</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">2</span>
            </button>
            
            <button
              onClick={() => setActiveTab('reviews')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'reviews' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>My Reviews</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">2</span>
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
          {activeTab === 'discover' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Discover Experiences</h1>
                <p className="text-white/70 text-lg">Find your perfect cultural adventure</p>
              </div>
              
              <div className="relative mb-8">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search cultural experiences..."
                  className="w-full px-8 py-6 bg-white/10 border border-white/20 rounded-3xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all pr-16 text-xl font-medium"
                />
                <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-yellow hover:text-yellow/80 transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Browse and discover amazing cultural experiences from around the world</p>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">My Bookings</h1>
                <p className="text-white/70 text-lg">Manage your cultural experience bookings</p>
              </div>

              <div className="space-y-6">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="bg-white/8 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-yellow/40 transition-all">
                    <div className="flex">
                      <div className="relative w-48 h-48 overflow-hidden">
                        <img 
                          src={booking.image} 
                          alt={booking.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            booking.status === 'confirmed' 
                              ? 'bg-green-500/90 text-white' 
                              : 'bg-yellow/90 text-dark-green'
                          }`}>
                            {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6">
                        <h3 className="text-white font-bold text-xl mb-2">{booking.title}</h3>
                        <div className="flex items-center text-white/60 text-sm mb-2">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {booking.location}
                        </div>
                        <div className="flex items-center text-white/60 text-sm mb-4">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                          </svg>
                          {booking.dates}
                        </div>
                        <p className="text-white/70 text-sm mb-4">Host: {booking.host}</p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-yellow font-bold text-2xl">${booking.price}</span>
                            <span className="text-white/60 text-sm ml-1">total</span>
                          </div>
                          <div className="flex gap-3">
                            <button className="bg-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                              View Details
                            </button>
                            <button className="bg-yellow text-dark-green px-4 py-2 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                              Message Host
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'saved' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Saved Experiences</h1>
                <p className="text-white/70 text-lg">Your wishlist of cultural experiences</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockSaved.map((item) => (
                  <div key={item.id} className="bg-white/8 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-yellow/40 transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4">
                        <button className="w-10 h-10 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-white font-medium">{item.rating}</span>
                        </div>
                        <span className="text-yellow font-bold text-xl">${item.price}</span>
                      </div>
                      
                      <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                      <div className="flex items-center text-white/60 text-sm mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </div>
                      <p className="text-white/70 text-sm mb-4">Host: {item.host}</p>
                      
                      <button className="w-full bg-yellow text-dark-green py-3 rounded-2xl font-bold hover:bg-yellow/90 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Reviews & Ratings</h1>
                <p className="text-white/70 text-lg">Share your cultural experience reviews</p>
              </div>

              <ReviewSystem />
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Messages</h1>
                <p className="text-white/70 text-lg">Chat with your host families</p>
              </div>

              <MessagingSystem />
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Profile Settings</h1>
                <p className="text-white/70 text-lg">Manage your account and preferences</p>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Profile management settings will appear here</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
