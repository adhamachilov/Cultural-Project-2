'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    city: 'New York',
    languages: ['English', 'Spanish'],
    interests: ['Cooking', 'Music', 'Traditional Crafts'],
    bio: 'Passionate traveler seeking authentic cultural experiences across Central Asia.'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    })
  }

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
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all bg-yellow text-dark-green font-semibold"
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
            <h1 className="text-4xl font-bold text-white mb-2">Profile Settings</h1>
            <p className="text-white/70 text-lg">Manage your account and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Picture & Basic Info */}
            <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow to-yellow/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-dark-green font-bold text-4xl">JD</span>
                </div>
                <button className="bg-yellow text-dark-green px-4 py-2 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                  Change Photo
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Member Since</label>
                  <p className="text-white">January 2024</p>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Total Experiences</label>
                  <p className="text-white">3 completed</p>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Countries Visited</label>
                  <p className="text-white">Kazakhstan, Uzbekistan</p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="lg:col-span-2 bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Country</label>
                    <select
                      name="country"
                      value={profileData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    >
                      <option value="United States" className="bg-dark-green">United States</option>
                      <option value="Canada" className="bg-dark-green">Canada</option>
                      <option value="United Kingdom" className="bg-dark-green">United Kingdom</option>
                      <option value="Germany" className="bg-dark-green">Germany</option>
                      <option value="France" className="bg-dark-green">France</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all resize-none"
                    placeholder="Tell host families about yourself..."
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Cultural Interests</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Cooking', 'Music', 'Traditional Crafts', 'Language Learning', 'Festivals', 'Outdoor Adventures'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={profileData.interests.includes(interest)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 border border-white/20 rounded flex items-center justify-center ${
                          profileData.interests.includes(interest) ? 'bg-yellow border-yellow' : 'bg-white/10'
                        }`}>
                          {profileData.interests.includes(interest) && (
                            <svg className="w-3 h-3 text-dark-green" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          )}
                        </div>
                        <span className="text-white/80 text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-6">
                  <button className="bg-yellow text-dark-green px-8 py-3 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                    Save Changes
                  </button>
                  <button className="border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Account Settings */}
          <div className="mt-8 bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <h3 className="text-white font-medium">Email Notifications</h3>
                  <p className="text-white/60 text-sm">Receive updates about bookings and messages</p>
                </div>
                <button className="w-12 h-6 bg-yellow rounded-full relative">
                  <div className="w-5 h-5 bg-dark-green rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <h3 className="text-white font-medium">SMS Notifications</h3>
                  <p className="text-white/60 text-sm">Get text messages for urgent updates</p>
                </div>
                <button className="w-12 h-6 bg-white/20 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <h3 className="text-white font-medium">Profile Visibility</h3>
                  <p className="text-white/60 text-sm">Allow host families to see your profile</p>
                </div>
                <button className="w-12 h-6 bg-yellow rounded-full relative">
                  <div className="w-5 h-5 bg-dark-green rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
