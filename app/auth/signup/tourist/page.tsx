'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function TouristSignup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    nationality: '',
    homeCountry: '',
    phoneNumber: '',
    interests: [],
    travelExperience: '',
    languages: [],
    emergencyContact: '',
    emergencyPhone: '',
    dietaryRestrictions: '',
    medicalConditions: ''
  })

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Australia',
    'Japan', 'South Korea', 'China', 'India', 'Brazil', 'Argentina', 'Mexico', 'Netherlands',
    'Sweden', 'Norway', 'Denmark', 'Finland', 'Switzerland', 'Austria', 'Belgium', 'Portugal',
    'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Greece', 'Turkey', 'Israel', 'UAE',
    'Saudi Arabia', 'South Africa', 'Egypt', 'Morocco', 'Nigeria', 'Kenya', 'Ghana', 'Other'
  ]

  const interests = [
    'Traditional Cooking', 'Folk Music & Dance', 'Arts & Crafts', 'Language Learning',
    'Religious Practices', 'Festivals & Celebrations', 'Nomadic Culture', 'Historical Sites',
    'Traditional Medicine', 'Horseback Riding', 'Mountain Culture', 'Desert Traditions',
    'Textile Arts', 'Pottery & Ceramics', 'Metalwork', 'Woodcarving', 'Storytelling',
    'Traditional Games', 'Wedding Ceremonies', 'Seasonal Celebrations'
  ]

  const languages = [
    'English', 'Russian', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Chinese',
    'Japanese', 'Korean', 'Arabic', 'Turkish', 'Hindi', 'Urdu', 'Persian', 'Uzbek',
    'Kazakh', 'Kyrgyz', 'Tajik', 'Turkmen', 'Mongolian', 'Other'
  ]

  const travelExperiences = [
    'First-time cultural traveler',
    'Some cultural travel experience',
    'Experienced cultural traveler',
    'Frequent international traveler',
    'Cultural exchange veteran'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (category: 'interests' | 'languages', value: string) => {
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
    console.log('Tourist signup data:', formData)
    router.push('/dashboard')
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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow rounded-2xl flex items-center justify-center">
                <div className="w-5 h-5 bg-dark-green rounded-full"></div>
              </div>
              <span className="text-white font-bold text-2xl">CHE</span>
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">Join as a Tourist</h1>
            <p className="text-white/70">Discover authentic cultural experiences around the world</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Enter your last name"
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
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Nationality *</label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select your nationality</option>
                    {countries.map(country => (
                      <option key={country} value={country} className="bg-dark-green">{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Home Country *</label>
                  <select
                    name="homeCountry"
                    value={formData.homeCountry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select your home country</option>
                    {countries.map(country => (
                      <option key={country} value={country} className="bg-dark-green">{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Travel Experience *</label>
                  <select
                    name="travelExperience"
                    value={formData.travelExperience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                  >
                    <option value="" className="bg-dark-green">Select your experience level</option>
                    {travelExperiences.map(exp => (
                      <option key={exp} value={exp} className="bg-dark-green">{exp}</option>
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

            {/* Cultural Interests */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Cultural Interests</h3>
              <p className="text-white/60 text-sm mb-4">Select the cultural experiences you're most interested in (select multiple)</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {interests.map(interest => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleCheckboxChange('interests', interest)}
                      className="w-4 h-4 text-yellow bg-white/10 border-white/20 rounded focus:ring-yellow focus:ring-2"
                    />
                    <span className="text-white/80 text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <p className="text-white/60 text-sm mb-4">Select languages you speak (select multiple)</p>
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

            {/* Emergency Contact & Health */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Emergency Contact & Health Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Emergency Contact Name</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all"
                    placeholder="Full name of emergency contact"
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
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Dietary Restrictions</label>
                  <textarea
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all resize-none"
                    placeholder="Any dietary restrictions or allergies..."
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Medical Conditions</label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow focus:bg-white/15 transition-all resize-none"
                    placeholder="Any medical conditions hosts should know about..."
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
                Create Tourist Account
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
