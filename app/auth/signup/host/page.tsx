'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function HostSignup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    familyName: '',
    contactPerson: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    whatsapp: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    homeType: '',
    familySize: '',
    children: '',
    pets: '',
    languages: [],
    experiencesOffered: [],
    accommodationType: '',
    maxGuests: '',
    pricePerDay: '',
    availability: '',
    houseRules: '',
    aboutFamily: '',
    culturalBackground: '',
    specialSkills: '',
    previousHosting: '',
    references: '',
    emergencyContact: '',
    emergencyPhone: ''
  })

  const countries = [
    'Russia', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan',
    'Mongolia', 'Azerbaijan', 'Armenia', 'Georgia', 'Belarus', 'Ukraine', 'Other'
  ]

  const homeTypes = [
    'Traditional House', 'Apartment', 'Yurt/Ger', 'Farm House', 'Village Home', 
    'City House', 'Mountain Lodge', 'Desert Camp', 'Other'
  ]

  const accommodationTypes = [
    'Private Room', 'Shared Room', 'Traditional Sleeping Area', 'Guest House', 
    'Separate Building', 'Camping Area', 'Other'
  ]

  const experiencesOffered = [
    'Traditional Cooking', 'Folk Music & Dance', 'Arts & Crafts', 'Language Teaching',
    'Religious Practices', 'Festival Participation', 'Nomadic Lifestyle', 'Horseback Riding',
    'Traditional Medicine', 'Farming Activities', 'Herding Animals', 'Traditional Games',
    'Storytelling', 'Textile Arts', 'Pottery Making', 'Metalwork', 'Woodcarving',
    'Wedding Ceremonies', 'Seasonal Celebrations', 'Mountain Culture', 'Desert Traditions'
  ]

  const languages = [
    'Russian', 'Kazakh', 'Uzbek', 'Kyrgyz', 'Tajik', 'Turkmen', 'Mongolian',
    'English', 'Chinese', 'Turkish', 'Persian', 'Arabic', 'German', 'French', 'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (category: 'languages' | 'experiencesOffered', value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Host family signup data:', formData)
    router.push('/dashboard/host')
  }

  return (
    <div className="min-h-screen animated-bg flex items-center justify-center py-12">
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

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow rounded-2xl flex items-center justify-center">
                <div className="w-5 h-5 bg-dark-green rounded-full"></div>
              </div>
              <span className="text-white font-bold text-2xl">CHE</span>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">Join as a Host Family</h1>
            <p className="text-white/70">Share your culture and welcome travelers into your home</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Family Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Family Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Family Name *</label>
                  <input
                    type="text"
                    name="familyName"
                    value={formData.familyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="The Smith Family"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Main Contact Person *</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="family@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="+7 (777) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="+7 (777) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Family Size *</label>
                  <select
                    name="familySize"
                    value={formData.familySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select family size</option>
                    <option value="1-2" className="bg-dark-green">1-2 people</option>
                    <option value="3-4" className="bg-dark-green">3-4 people</option>
                    <option value="5-6" className="bg-dark-green">5-6 people</option>
                    <option value="7+" className="bg-dark-green">7+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Children Ages</label>
                  <input
                    type="text"
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="e.g., 5, 8, 12 years old"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Pets</label>
                  <input
                    type="text"
                    name="pets"
                    value={formData.pets}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="e.g., 2 cats, 1 dog"
                  />
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country} className="bg-dark-green">{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Almaty"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Street address"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="050000"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Home Type *</label>
                  <select
                    name="homeType"
                    value={formData.homeType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select home type</option>
                    {homeTypes.map(type => (
                      <option key={type} value={type} className="bg-dark-green">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Accommodation Type *</label>
                  <select
                    name="accommodationType"
                    value={formData.accommodationType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select accommodation</option>
                    {accommodationTypes.map(type => (
                      <option key={type} value={type} className="bg-dark-green">{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Account Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Create a strong password"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>

            {/* Cultural Experiences */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Cultural Experiences You Offer</h3>
              <p className="text-white/60 text-sm mb-4">Select the cultural experiences you can share with guests (select multiple)</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {experiencesOffered.map(experience => (
                  <label key={experience} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.experiencesOffered.includes(experience)}
                      onChange={() => handleCheckboxChange('experiencesOffered', experience)}
                      className="w-4 h-4 text-yellow bg-white/10 border-white/20 rounded focus:ring-yellow focus:ring-2"
                    />
                    <span className="text-white/80 text-sm">{experience}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Languages Spoken</h3>
              <p className="text-white/60 text-sm mb-4">Select languages your family speaks (select multiple)</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {languages.map(language => (
                  <label key={language} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes(language)}
                      onChange={() => handleCheckboxChange('languages', language)}
                      className="w-4 h-4 text-yellow bg-white/10 border-white/20 rounded focus:ring-yellow focus:ring-2"
                    />
                    <span className="text-white/80 text-sm">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hosting Details */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Hosting Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Maximum Guests *</label>
                  <select
                    name="maxGuests"
                    value={formData.maxGuests}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select max guests</option>
                    <option value="1" className="bg-dark-green">1 guest</option>
                    <option value="2" className="bg-dark-green">2 guests</option>
                    <option value="3" className="bg-dark-green">3 guests</option>
                    <option value="4" className="bg-dark-green">4 guests</option>
                    <option value="5+" className="bg-dark-green">5+ guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Price per Day (USD) *</label>
                  <input
                    type="number"
                    name="pricePerDay"
                    value={formData.pricePerDay}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Availability *</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select availability</option>
                    <option value="year-round" className="bg-dark-green">Year-round</option>
                    <option value="seasonal" className="bg-dark-green">Seasonal</option>
                    <option value="weekends" className="bg-dark-green">Weekends only</option>
                    <option value="specific-dates" className="bg-dark-green">Specific dates</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Previous Hosting Experience</label>
                  <select
                    name="previousHosting"
                    value={formData.previousHosting}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select experience</option>
                    <option value="none" className="bg-dark-green">First-time hosting</option>
                    <option value="some" className="bg-dark-green">Some experience</option>
                    <option value="experienced" className="bg-dark-green">Very experienced</option>
                  </select>
                </div>
              </div>
            </div>

            {/* About Your Family */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">About Your Family & Culture</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">About Your Family *</label>
                  <textarea
                    name="aboutFamily"
                    value={formData.aboutFamily}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all resize-none"
                    placeholder="Tell guests about your family, your interests, and what makes your home special..."
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Cultural Background *</label>
                  <textarea
                    name="culturalBackground"
                    value={formData.culturalBackground}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all resize-none"
                    placeholder="Describe your cultural traditions, customs, and heritage you'd like to share..."
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Special Skills or Crafts</label>
                  <textarea
                    name="specialSkills"
                    value={formData.specialSkills}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all resize-none"
                    placeholder="Any special skills, crafts, or knowledge you can teach guests..."
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">House Rules</label>
                  <textarea
                    name="houseRules"
                    value={formData.houseRules}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all resize-none"
                    placeholder="Any important house rules or expectations for guests..."
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Emergency Contact Name</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Emergency Contact Phone</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="+7 (777) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-yellow text-dark-green py-4 rounded-2xl font-bold hover:bg-yellow/90 transition-colors"
              >
                Create Host Family Account
              </button>
              <Link
                href="/auth/signup"
                className="flex-1 bg-white/10 text-white border border-white/20 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-colors text-center"
              >
                Back to Options
              </Link>
            </div>

            <div className="text-center pt-4">
              <p className="text-white/60">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-yellow hover:text-yellow/80 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
