'use client'

import { useState, useEffect } from 'react'

interface Notification {
  id: number
  type: 'booking' | 'message' | 'review' | 'system' | 'payment'
  title: string
  message: string
  timestamp: string
  read: boolean
  actionUrl?: string
}

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'booking',
      title: 'Booking Confirmed',
      message: 'Your booking for "Traditional Kazakh Cooking" has been confirmed by Aigul Family',
      timestamp: '2 hours ago',
      read: false,
      actionUrl: '/dashboard/tourist'
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Aigul Family sent you a message about your upcoming experience',
      timestamp: '4 hours ago',
      read: false,
      actionUrl: '/dashboard/tourist'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Successful',
      message: 'Payment of $850 for your cultural experience has been processed',
      timestamp: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'review',
      title: 'Review Request',
      message: 'How was your experience with the Russian Maslenitsa celebration?',
      timestamp: '2 days ago',
      read: true,
      actionUrl: '/dashboard/tourist'
    },
    {
      id: 5,
      type: 'system',
      title: 'Profile Update',
      message: 'Your profile has been successfully updated with new preferences',
      timestamp: '3 days ago',
      read: true
    }
  ])

  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'message':
        return (
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )
      case 'payment':
        return (
          <svg className="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        )
      case 'review':
        return (
          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5V9.09c0-2.36-1.64-4.36-4-4.36S7 6.73 7 9.09V12l-5 5h5m8 0v1a3 3 0 01-6 0v-1m6 0H9" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl z-50">
          {/* Header */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Notifications</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-yellow text-dark-green'
                    : 'bg-white/10 text-white/70 hover:text-white'
                }`}
              >
                All ({notifications.length})
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === 'unread'
                    ? 'bg-yellow text-dark-green'
                    : 'bg-white/10 text-white/70 hover:text-white'
                }`}
              >
                Unread ({unreadCount})
              </button>
            </div>

            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="mt-3 text-yellow hover:text-yellow/80 text-sm font-medium transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-white/10 hover:bg-white/5 transition-colors ${
                    !notification.read ? 'bg-white/5' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className={`text-sm font-medium ${
                            !notification.read ? 'text-white' : 'text-white/80'
                          }`}>
                            {notification.title}
                          </h4>
                          <p className={`text-sm mt-1 ${
                            !notification.read ? 'text-white/80' : 'text-white/60'
                          }`}>
                            {notification.message}
                          </p>
                          <p className="text-white/50 text-xs mt-2">{notification.timestamp}</p>
                        </div>

                        <div className="flex items-center space-x-2 ml-2">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-yellow hover:text-yellow/80 transition-colors"
                              title="Mark as read"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-white/40 hover:text-red-400 transition-colors"
                            title="Delete"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {notification.actionUrl && (
                        <button
                          onClick={() => {
                            markAsRead(notification.id)
                            // Navigate to action URL
                            window.location.href = notification.actionUrl!
                          }}
                          className="mt-3 text-yellow hover:text-yellow/80 text-sm font-medium transition-colors"
                        >
                          View Details →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5V9.09c0-2.36-1.64-4.36-4-4.36S7 6.73 7 9.09V12l-5 5h5m8 0v1a3 3 0 01-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <p className="text-white/60">
                  {filter === 'unread' ? 'No unread notifications' : 'No notifications'}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/20">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-white/10 text-white py-2 rounded-xl font-medium hover:bg-white/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
