'use client'

import { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  item: {
    title: string
    price: number
    location: string
    dates?: string
    type: 'festival' | 'experience'
    image: string
  }
}

export default function BookingModal({ isOpen, onClose, item }: BookingModalProps) {
  const [formData, setFormData] = useState({
    guests: 1,
    checkIn: '',
    checkOut: '',
    specialRequests: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('card')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process booking
    alert('Booking confirmed! You will receive a confirmation email shortly.')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Book Experience</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-yellow' : 'text-white/40'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-yellow text-dark-green' : 'bg-white/10'}`}>
                1
              </div>
              <span className="font-medium">Details</span>
            </div>
            <div className="flex-1 h-px bg-white/20"></div>
            <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-yellow' : 'text-white/40'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-yellow text-dark-green' : 'bg-white/10'}`}>
                2
              </div>
              <span className="font-medium">Payment</span>
            </div>
            <div className="flex-1 h-px bg-white/20"></div>
            <div className={`flex items-center space-x-2 ${currentStep >= 3 ? 'text-yellow' : 'text-white/40'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-yellow text-dark-green' : 'bg-white/10'}`}>
                3
              </div>
              <span className="font-medium">Confirm</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Experience Summary */}
          <div className="p-6 border-b border-white/20">
            <div className="flex space-x-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-2xl" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.location}</p>
                <p className="text-yellow font-bold text-xl mt-2">${item.price}</p>
              </div>
            </div>
          </div>

          {/* Step 1: Booking Details */}
          {currentStep === 1 && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num} className="bg-dark-green">{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Check-in Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow resize-none"
                  placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                />
              </div>

              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="w-full bg-yellow text-dark-green py-4 rounded-2xl font-bold text-lg hover:bg-yellow/90 transition-colors"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'card' 
                        ? 'border-yellow bg-yellow/10' 
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Credit Card</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'paypal' 
                        ? 'border-yellow bg-yellow/10' 
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold">PP</span>
                      </div>
                      <span className="text-white font-medium">PayPal</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'bank' 
                        ? 'border-yellow bg-yellow/10' 
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Bank Transfer</span>
                    </div>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white/5 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70">Subtotal</span>
                  <span className="text-white">${item.price * formData.guests}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70">Service Fee</span>
                  <span className="text-white">${Math.round(item.price * formData.guests * 0.1)}</span>
                </div>
                <div className="border-t border-white/20 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-yellow font-bold text-xl">${Math.round(item.price * formData.guests * 1.1)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 bg-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 bg-yellow text-dark-green py-4 rounded-2xl font-bold hover:bg-yellow/90 transition-colors"
                >
                  Review Booking
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Review Your Booking</h3>
                <p className="text-white/70">Please review all details before confirming</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Experience</span>
                  <span className="text-white font-medium">{item.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Guests</span>
                  <span className="text-white">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Dates</span>
                  <span className="text-white">{formData.checkIn} to {formData.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Contact</span>
                  <span className="text-white">{formData.contactName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Amount</span>
                  <span className="text-yellow font-bold">${Math.round(item.price * formData.guests * 1.1)}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 bg-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
