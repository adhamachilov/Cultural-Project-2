'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [budgetRange, setBudgetRange] = useState([500, 3000])
  const [duration, setDuration] = useState('all')
  const [activeTab, setActiveTab] = useState('discover')

  const experienceCategories = [
    { 
      id: 'cultural-immersion', 
      name: 'Cultural Immersion', 
      subcategories: ['Overall Cultural Experience', 'Traditional Lifestyle', 'Religious Practices', 'Local Customs']
    },
    { 
      id: 'culinary', 
      name: 'Culinary Arts', 
      subcategories: ['Traditional Cooking', 'Regional Specialties', 'Food Preparation', 'Dining Etiquette', 'Market Tours']
    },
    { 
      id: 'performing-arts', 
      name: 'Performing Arts', 
      subcategories: ['Traditional Music', 'Folk Dancing', 'Storytelling', 'Theater', 'Ceremonial Performances']
    },
    { 
      id: 'crafts-arts', 
      name: 'Crafts & Arts', 
      subcategories: ['Pottery', 'Weaving', 'Metalwork', 'Painting', 'Jewelry Making', 'Woodcarving']
    },
    { 
      id: 'language-communication', 
      name: 'Language & Communication', 
      subcategories: ['Language Learning', 'Cultural Communication', 'Writing Systems', 'Dialects']
    },
    { 
      id: 'festivals-celebrations', 
      name: 'Festivals & Celebrations', 
      subcategories: ['Religious Festivals', 'Seasonal Celebrations', 'Wedding Ceremonies', 'Coming of Age']
    },
    { 
      id: 'outdoor-adventure', 
      name: 'Outdoor & Adventure', 
      subcategories: ['Nomadic Life', 'Horseback Riding', 'Mountain Culture', 'Desert Traditions']
    },
    { 
      id: 'spiritual-wellness', 
      name: 'Spiritual & Wellness', 
      subcategories: ['Meditation Practices', 'Traditional Medicine', 'Spiritual Ceremonies', 'Healing Arts']
    }
  ]

  const countries = ['Russia', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan']

  const mockExperiences = [
    {
      id: 1,
      title: 'Traditional Kazakh Cooking with Aigul Family',
      location: 'Almaty, Kazakhstan',
      type: 'cooking',
      price: 850,
      duration: '5 days',
      rating: 4.9,
      image: 'https://kalpak-travel.com/wp-content/uploads/2017/04/turkistan-mausoleum-kazakhstan.jpg',
      family: 'Aigul & Murat',
      description: 'Learn to make traditional beshbarmak, baursaks, and kumys'
    },
    {
      id: 2,
      title: 'Silk Road Music & Dance Experience',
      location: 'Samarkand, Uzbekistan',
      type: 'music',
      price: 1200,
      duration: '7 days',
      rating: 4.8,
      image: 'https://uzbekistan.travel/storage/app/uploads/public/671/9dc/d43/6719dcd43a6f2547697505.jpg',
      family: 'Dilshod & Gulnara',
      description: 'Master traditional Uzbek music and folk dances'
    },
    {
      id: 3,
      title: 'Nomadic Heritage & Horseback Adventures',
      location: 'Bishkek, Kyrgyzstan',
      type: 'overall',
      price: 950,
      duration: '6 days',
      rating: 4.7,
      image: 'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-people-3.jpg',
      family: 'Bakyt & Cholpon',
      description: 'Experience nomadic life with yurt stays and horseback riding'
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
      <div className="relative z-10 w-80 bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col h-screen overflow-y-auto sidebar-scroll">
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
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">3</span>
            </button>
            
            <button
              onClick={() => setActiveTab('favorites')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'favorites' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Saved</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">12</span>
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
              <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded-full text-xs">2</span>
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
            <>
              {/* Welcome Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">Discover Experiences</h1>
                    <p className="text-white/70 text-lg">Find your perfect cultural adventure</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-sm">Good morning, John</p>
                    <p className="text-yellow font-medium">Ready for your next journey?</p>
                  </div>
                </div>
              </div>

              {/* Hero Section with Stats */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-yellow/20 via-yellow/10 to-transparent rounded-3xl p-8 border border-yellow/30">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow mb-2">127</div>
                      <div className="text-white/70 text-sm">Available Experiences</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow mb-2">6</div>
                      <div className="text-white/70 text-sm">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow mb-2">4.8</div>
                      <div className="text-white/70 text-sm">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow mb-2">$850</div>
                      <div className="text-white/70 text-sm">Average Price</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search & Quick Filters */}
              <div className="mb-8">
                <div className="relative mb-6">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What cultural experience are you looking for?"
                    className="w-full px-8 py-6 bg-white/10 border border-white/20 rounded-3xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all pr-16 text-xl font-medium"
                  />
                  <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-yellow hover:text-yellow/80 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                {/* Quick Filter Tags */}
                <div className="flex flex-wrap gap-3">
                  {['Cooking', 'Music & Dance', 'Crafts', 'Language', 'Festivals', 'Adventure'].map((tag) => (
                    <button
                      key={tag}
                      className="px-6 py-3 bg-white/10 hover:bg-yellow/20 border border-white/20 hover:border-yellow/40 rounded-2xl text-white hover:text-yellow transition-all font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Categories */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">Explore by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {experienceCategories.slice(0, 4).map((category) => (
                    <div key={category.id} className="group cursor-pointer">
                      <div className="bg-white/8 hover:bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-yellow/40 transition-all h-full">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow to-yellow/70 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
                        <p className="text-white/60 text-sm">{category.subcategories.length} experiences</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Experiences */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">Trending This Week</h2>
                  <button className="text-yellow hover:text-yellow/80 font-medium">View All</button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {mockExperiences.map((experience) => (
                    <div key={experience.id} className="group cursor-pointer">
                      <div className="bg-white/8 hover:bg-white/12 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-yellow/40 transition-all">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={experience.image} 
                            alt={experience.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute top-4 right-4">
                            <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-yellow/90 text-dark-green px-3 py-1 rounded-full text-xs font-bold">
                              {experience.type === 'cooking' ? 'Culinary' : experience.type === 'music' ? 'Arts' : 'Culture'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-white font-medium">{experience.rating}</span>
                            </div>
                            <span className="text-white/60 text-sm">{experience.duration}</span>
                          </div>
                          
                          <h3 className="text-white font-bold text-xl mb-2 leading-tight">{experience.title}</h3>
                          <p className="text-white/70 text-sm mb-4">{experience.description}</p>
                          
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
                              <span className="text-white/60 text-sm ml-1">total</span>
                            </div>
                            <button className="bg-gradient-to-r from-yellow to-yellow/80 text-dark-green px-6 py-3 rounded-2xl font-bold hover:from-yellow/90 hover:to-yellow/70 transition-all transform hover:scale-105">
                              Explore
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Filters Sidebar */}
              <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white hover:bg-white/15 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </button>
              </div>
            </>
          )}

          {activeTab === 'bookings' && (
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">My Bookings</h1>
              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Your booking history will appear here</p>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Saved Experiences</h1>
              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Your saved experiences will appear here</p>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Messages</h1>
              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Your conversations with host families will appear here</p>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Profile Settings</h1>
              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Profile management will appear here</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
