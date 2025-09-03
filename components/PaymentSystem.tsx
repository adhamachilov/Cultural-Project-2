'use client'

import { useState } from 'react'

interface PaymentProps {
  amount: number
  currency: string
  description: string
  onSuccess: () => void
  onCancel: () => void
}

export default function PaymentSystem({ amount, currency, description, onSuccess, onCancel }: PaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'crypto' | 'bank'>('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
    country: 'US'
  })

  const handleCardInputChange = (field: string, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }))
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      onSuccess()
    }, 3000)
  }

  const getCardType = (number: string) => {
    const num = number.replace(/\s/g, '')
    if (num.startsWith('4')) return 'visa'
    if (num.startsWith('5') || num.startsWith('2')) return 'mastercard'
    if (num.startsWith('3')) return 'amex'
    return 'card'
  }

  return (
    <div className="bg-white/8 backdrop-blur-md rounded-3xl border border-white/20 p-8">
      {/* Payment Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Secure Payment</h2>
        <p className="text-white/70">{description}</p>
        <div className="mt-4 p-4 bg-white/5 rounded-2xl">
          <span className="text-4xl font-bold text-yellow">{currency} {amount.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-8">
        <h3 className="text-white font-semibold mb-4">Payment Method</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              paymentMethod === 'card' 
                ? 'border-yellow bg-yellow/10' 
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Credit Card</span>
            </div>
          </button>

          <button
            onClick={() => setPaymentMethod('paypal')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              paymentMethod === 'paypal' 
                ? 'border-yellow bg-yellow/10' 
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-sm">PP</span>
              </div>
              <span className="text-white text-sm font-medium">PayPal</span>
            </div>
          </button>

          <button
            onClick={() => setPaymentMethod('crypto')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              paymentMethod === 'crypto' 
                ? 'border-yellow bg-yellow/10' 
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <span className="text-orange-400 font-bold text-sm">₿</span>
              </div>
              <span className="text-white text-sm font-medium">Crypto</span>
            </div>
          </button>

          <button
            onClick={() => setPaymentMethod('bank')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              paymentMethod === 'bank' 
                ? 'border-yellow bg-yellow/10' 
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Bank Transfer</span>
            </div>
          </button>
        </div>
      </div>

      <form onSubmit={handlePayment}>
        {/* Credit Card Form */}
        {paymentMethod === 'card' && (
          <div className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Card Number</label>
              <div className="relative">
                <input
                  type="text"
                  value={cardData.number}
                  onChange={(e) => handleCardInputChange('number', formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow pr-12"
                  required
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {getCardType(cardData.number) === 'visa' && (
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                  )}
                  {getCardType(cardData.number) === 'mastercard' && (
                    <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Expiry Date</label>
                <input
                  type="text"
                  value={cardData.expiry}
                  onChange={(e) => handleCardInputChange('expiry', formatExpiry(e.target.value))}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                  required
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  value={cardData.cvv}
                  onChange={(e) => handleCardInputChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
                  placeholder="123"
                  maxLength={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Cardholder Name</label>
              <input
                type="text"
                value={cardData.name}
                onChange={(e) => handleCardInputChange('name', e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Country</label>
              <select
                value={cardData.country}
                onChange={(e) => handleCardInputChange('country', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow"
              >
                <option value="US" className="bg-dark-green">United States</option>
                <option value="CA" className="bg-dark-green">Canada</option>
                <option value="GB" className="bg-dark-green">United Kingdom</option>
                <option value="DE" className="bg-dark-green">Germany</option>
                <option value="FR" className="bg-dark-green">France</option>
                <option value="KZ" className="bg-dark-green">Kazakhstan</option>
                <option value="UZ" className="bg-dark-green">Uzbekistan</option>
                <option value="KG" className="bg-dark-green">Kyrgyzstan</option>
                <option value="RU" className="bg-dark-green">Russia</option>
              </select>
            </div>
          </div>
        )}

        {/* PayPal */}
        {paymentMethod === 'paypal' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-blue-500/20 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-2xl">PayPal</span>
            </div>
            <p className="text-white/70 mb-6">You will be redirected to PayPal to complete your payment securely.</p>
          </div>
        )}

        {/* Cryptocurrency */}
        {paymentMethod === 'crypto' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-orange-500/20 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-orange-400 font-bold text-3xl">₿</span>
            </div>
            <p className="text-white/70 mb-4">Pay with Bitcoin, Ethereum, or other cryptocurrencies</p>
            <div className="bg-white/5 rounded-2xl p-4 max-w-md mx-auto">
              <p className="text-white/60 text-sm">Crypto payments are processed through our secure partner</p>
            </div>
          </div>
        )}

        {/* Bank Transfer */}
        {paymentMethod === 'bank' && (
          <div className="py-8">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Bank Transfer Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Account Name:</span>
                  <span className="text-white">Cultural Heritage Exchange Ltd.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Account Number:</span>
                  <span className="text-white">1234567890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Routing Number:</span>
                  <span className="text-white">021000021</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">SWIFT Code:</span>
                  <span className="text-white">CHEXUS33</span>
                </div>
              </div>
              <p className="text-white/60 text-xs mt-4">
                Please include your booking reference in the transfer description
              </p>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <p className="text-green-400 font-medium text-sm">Secure Payment</p>
              <p className="text-green-300/80 text-xs">Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isProcessing}
            className="flex-1 bg-yellow text-dark-green py-4 rounded-2xl font-bold hover:bg-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-green" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              `Pay ${currency} ${amount.toFixed(2)}`
            )}
          </button>
        </div>
      </form>

      {/* Payment Methods Accepted */}
      <div className="mt-8 pt-6 border-t border-white/20">
        <p className="text-white/60 text-center text-sm mb-4">We accept</p>
        <div className="flex justify-center space-x-6 opacity-60">
          <div className="w-12 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
          <div className="w-12 h-8 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
          <div className="w-12 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
          <div className="w-12 h-8 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
          <div className="w-12 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">₿</div>
        </div>
      </div>
    </div>
  )
}
