'use client'

import { useState } from 'react'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  isOwn: boolean
}

interface Conversation {
  id: number
  participant: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: number
  status: 'online' | 'offline'
}

export default function MessagingSystem() {
  const [activeConversation, setActiveConversation] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState('')

  const conversations: Conversation[] = [
    {
      id: 1,
      participant: 'Aigul Family',
      avatar: 'AF',
      lastMessage: 'Looking forward to hosting you!',
      timestamp: '2 hours ago',
      unread: 1,
      status: 'online'
    },
    {
      id: 2,
      participant: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'Thank you for the amazing experience',
      timestamp: '1 day ago',
      unread: 0,
      status: 'offline'
    },
    {
      id: 3,
      participant: 'Admin Support',
      avatar: 'AS',
      lastMessage: 'Your booking has been confirmed',
      timestamp: '3 days ago',
      unread: 0,
      status: 'online'
    }
  ]

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Aigul Family',
      content: 'Hello! We are so excited to host you for the traditional cooking experience.',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Hi! Thank you so much. I\'m really looking forward to learning about Kazakh cuisine.',
      timestamp: '10:45 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Aigul Family',
      content: 'We will prepare all the ingredients for making traditional dishes like beshbarmak and baursaks. Do you have any dietary restrictions?',
      timestamp: '11:00 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'No dietary restrictions! I\'m excited to try everything authentic.',
      timestamp: '11:15 AM',
      isOwn: true
    },
    {
      id: 5,
      sender: 'Aigul Family',
      content: 'Perfect! We\'ll also share stories about our family traditions. Looking forward to hosting you!',
      timestamp: '2:30 PM',
      isOwn: false
    }
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // Add message logic here
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  return (
    <div className="h-full flex bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 border-r border-white/20 flex flex-col">
        <div className="p-6 border-b border-white/20">
          <h2 className="text-white font-bold text-xl">Messages</h2>
          <p className="text-white/60 text-sm mt-1">Chat with hosts and guests</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setActiveConversation(conversation.id)}
              className={`w-full p-4 border-b border-white/10 hover:bg-white/5 transition-colors text-left ${
                activeConversation === conversation.id ? 'bg-white/10' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow to-yellow/70 rounded-2xl flex items-center justify-center">
                    <span className="text-dark-green font-bold">{conversation.avatar}</span>
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white/20 ${
                    conversation.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                  }`}></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-semibold truncate">{conversation.participant}</h3>
                    <span className="text-white/50 text-xs">{conversation.timestamp}</span>
                  </div>
                  <p className="text-white/70 text-sm truncate">{conversation.lastMessage}</p>
                </div>

                {conversation.unread > 0 && (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{conversation.unread}</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {activeConversation ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow to-yellow/70 rounded-2xl flex items-center justify-center">
                <span className="text-dark-green font-bold">AF</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Aigul Family</h3>
                <p className="text-green-400 text-sm">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.isOwn
                      ? 'bg-yellow text-dark-green'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isOwn ? 'text-dark-green/70' : 'text-white/50'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-white/20">
            <form onSubmit={handleSendMessage} className="flex space-x-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
              />
              <button
                type="submit"
                className="bg-yellow text-dark-green px-6 py-3 rounded-2xl font-semibold hover:bg-yellow/90 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-white/70">Select a conversation to start messaging</p>
          </div>
        </div>
      )}
    </div>
  )
}
