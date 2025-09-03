'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const mockUsers = [
    { id: 1, name: 'John Doe', type: 'Tourist', email: 'john@example.com', status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Aigul Family', type: 'Host', email: 'aigul@example.com', status: 'active', joined: '2023-12-10' },
    { id: 3, name: 'Sarah Johnson', type: 'Tourist', email: 'sarah@example.com', status: 'pending', joined: '2024-02-20' }
  ]

  const mockFestivals = [
    { id: 1, name: 'Nowruz Spring Festival', location: 'Almaty, Kazakhstan', date: '2024-03-21', status: 'active', bookings: 45 },
    { id: 2, name: 'Silk Road Music Festival', location: 'Samarkand, Uzbekistan', date: '2024-04-15', status: 'draft', bookings: 0 },
    { id: 3, name: 'Eagle Festival', location: 'Bayan-Ölgii, Mongolia', date: '2024-10-05', status: 'active', bookings: 23 }
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
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow rounded-2xl flex items-center justify-center">
              <div className="w-5 h-5 bg-dark-green rounded-full"></div>
            </div>
            <div>
              <span className="text-white font-bold text-2xl block">CHE</span>
              <span className="text-white/60 text-sm">Admin Panel</span>
            </div>
          </Link>
        </div>

        {/* Admin Profile */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">AD</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Administrator</h3>
              <p className="text-white/60 text-sm">System Admin</p>
              <p className="text-white/50 text-xs mt-1">Full Access</p>
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
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'users' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span>Users</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">3</span>
            </button>
            
            <button
              onClick={() => setActiveTab('festivals')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'festivals' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
              </svg>
              <span>Festivals</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">3</span>
            </button>
            
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'testimonials' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span>Testimonials</span>
            </button>
            
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'analytics' 
                  ? 'bg-yellow text-dark-green font-semibold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Analytics</span>
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
                <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
                <p className="text-white/70 text-lg">Manage your cultural exchange platform</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Total Users</h3>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">156</p>
                  <p className="text-green-400 text-sm">+12 this week</p>
                </div>
                
                <div className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Active Festivals</h3>
                    <div className="w-12 h-12 bg-yellow/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4m0 0V3a1 1 0 012 0v4m0 0h4l-4 4-4-4h4z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">8</p>
                  <p className="text-green-400 text-sm">2 upcoming</p>
                </div>
                
                <div className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Total Bookings</h3>
                    <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">342</p>
                  <p className="text-green-400 text-sm">+18% this month</p>
                </div>
                
                <div className="bg-white/8 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Revenue</h3>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">$24.5K</p>
                  <p className="text-green-400 text-sm">+25% this month</p>
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-white font-bold text-xl mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-white/80">New user registration: Sarah Johnson</p>
                    <span className="text-white/50 text-sm ml-auto">2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                    <div className="w-2 h-2 bg-yellow rounded-full"></div>
                    <p className="text-white/80">Festival booking: Nowruz Spring Festival</p>
                    <span className="text-white/50 text-sm ml-auto">4 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="text-white/80">New testimonial submitted</p>
                    <span className="text-white/50 text-sm ml-auto">6 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">User Management</h1>
                <p className="text-white/70 text-lg">Manage tourists and host families</p>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-bold text-xl">All Users</h3>
                    <button className="bg-yellow text-dark-green px-4 py-2 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                      Add User
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left p-4 text-white/80 font-semibold">Name</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Type</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Email</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Status</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Joined</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUsers.map((user) => (
                        <tr key={user.id} className="border-t border-white/10">
                          <td className="p-4 text-white">{user.name}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              user.type === 'Tourist' 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'bg-green-500/20 text-green-400'
                            }`}>
                              {user.type}
                            </span>
                          </td>
                          <td className="p-4 text-white/70">{user.email}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              user.status === 'active' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-yellow/20 text-yellow'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="p-4 text-white/70">{user.joined}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <button className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm hover:bg-white/20 transition-colors">
                                Edit
                              </button>
                              <button className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-sm hover:bg-red-500/30 transition-colors">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'festivals' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Festival Management</h1>
                <p className="text-white/70 text-lg">Manage cultural festivals and events</p>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-bold text-xl">All Festivals</h3>
                    <button className="bg-yellow text-dark-green px-4 py-2 rounded-xl font-semibold hover:bg-yellow/90 transition-colors">
                      Add Festival
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left p-4 text-white/80 font-semibold">Festival</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Location</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Date</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Status</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Bookings</th>
                        <th className="text-left p-4 text-white/80 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockFestivals.map((festival) => (
                        <tr key={festival.id} className="border-t border-white/10">
                          <td className="p-4 text-white">{festival.name}</td>
                          <td className="p-4 text-white/70">{festival.location}</td>
                          <td className="p-4 text-white/70">{festival.date}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              festival.status === 'active' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-gray-500/20 text-gray-400'
                            }`}>
                              {festival.status}
                            </span>
                          </td>
                          <td className="p-4 text-white/70">{festival.bookings}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <button className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm hover:bg-white/20 transition-colors">
                                Edit
                              </button>
                              <button className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-sm hover:bg-red-500/30 transition-colors">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Testimonials</h1>
                <p className="text-white/70 text-lg">Manage user testimonials and reviews</p>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Testimonial management interface will appear here</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Analytics</h1>
                <p className="text-white/70 text-lg">Platform performance and insights</p>
              </div>

              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-white/70 text-center py-12">Analytics dashboard will appear here</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
