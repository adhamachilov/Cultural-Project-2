'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1)

  const conversations = [
    {
      id: 1,
      family: 'Aigul & Murat',
      location: 'Almaty, Kazakhstan',
      lastMessage: 'Looking forward to teaching you traditional cooking!',
      time: '2 hours ago',
      unread: 2,
      avatar: 'AM'
    },
    {
      id: 2,
      family: 'Bakyt & Cholpon',
      location: 'Bishkek, Kyrgyzstan',
      lastMessage: 'The horses are ready for your visit',
      time: '1 day ago',
      unread: 0,
      avatar: 'BC'
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Aigul',
      message: 'Hello John! We are so excited to host you for the cooking experience.',
      time: '10:30 AM',
      isHost: true
    },
    {
      id: 2,
      sender: 'You',
      message: 'Thank you! I cannot wait to learn traditional Kazakh recipes.',
      time: '10:45 AM',
      isHost: false
    },
    {
      id: 3,
      sender: 'Aigul',
      message: 'Looking forward to teaching you traditional cooking!',
      time: '11:15 AM',
      isHost: true
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
            <div className="w-12 h-12 bg-yellow rounded-2xl flex items-center justify-center">
              <div className="w-5 h-5 bg-dark-green rounded-full"></div>
            </div>
            <div>
              <span className="text-white font-bold text-2xl block">CHE</span>
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
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all bg-yellow text-dark-green font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Messages</span>
              <span className="ml-auto bg-yellow/20 text-yellow px-2 py-1 rounded-full text-xs">2</span>
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
      <div className="flex-1 relative z-10 overflow-y-auto h-screen flex">
        {/* Conversations List */}
        <div className="w-96 bg-white/5 backdrop-blur-md border-r border-white/20 flex flex-col h-full">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Messages</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all pr-10"
              />
              <svg className="w-4 h-4 text-white/50 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`w-full p-4 border-b border-white/10 text-left hover:bg-white/5 transition-all ${
                  selectedChat === conv.id ? 'bg-white/10' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-green font-semibold text-sm">{conv.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-medium truncate">{conv.family}</h3>
                      <span className="text-white/50 text-xs">{conv.time}</span>
                    </div>
                    <p className="text-white/60 text-sm truncate">{conv.location}</p>
                    <p className="text-white/70 text-sm truncate mt-1">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{conv.unread}</span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col h-full">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center">
                <span className="text-dark-green font-semibold">AM</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Aigul & Murat</h3>
                <p className="text-white/60 text-sm">Almaty, Kazakhstan • Online</p>
              </div>
              <div className="ml-auto flex items-center space-x-3">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isHost ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  msg.isHost 
                    ? 'bg-white/10 text-white' 
                    : 'bg-yellow text-dark-green'
                }`}>
                  <p className="text-sm">{msg.message}</p>
                  <p className={`text-xs mt-1 ${
                    msg.isHost ? 'text-white/60' : 'text-dark-green/70'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
              />
              <button className="p-3 bg-yellow rounded-xl hover:bg-yellow/90 transition-colors">
                <svg className="w-5 h-5 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
