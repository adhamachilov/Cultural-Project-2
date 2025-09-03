'use client'

import { useState } from 'react'

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  const countries = [
    {
      id: 'russia',
      name: 'Russia',
      flag: '🇷🇺',
      families: 89,
      cities: ['Moscow', 'St. Petersburg', 'Kazan', 'Sochi'],
      description: 'Vast cultural diversity in Russia',
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&h=250&fit=crop',
      color: '#fdeb37'
    },
    {
      id: 'kazakhstan',
      name: 'Kazakhstan',
      flag: '🇰🇿',
      families: 45,
      cities: ['Almaty', 'Nur-Sultan', 'Shymkent'],
      description: 'Experience nomadic traditions and modern city life',
      image: 'https://kalpak-travel.com/wp-content/uploads/2017/04/turkistan-mausoleum-kazakhstan.jpg',
      color: '#8BA79B'
    },
    {
      id: 'uzbekistan',
      name: 'Uzbekistan',
      flag: '🇺🇿',
      families: 38,
      cities: ['Tashkent', 'Samarkand', 'Bukhara'],
      description: 'Discover the heart of the ancient Silk Road',
      image: 'https://uzbekistan.travel/storage/app/uploads/public/671/9dc/d43/6719dcd43a6f2547697505.jpg',
      color: '#F1BFAD'
    },
    {
      id: 'kyrgyzstan',
      name: 'Kyrgyzstan',
      flag: '🇰🇬',
      families: 22,
      cities: ['Bishkek', 'Osh', 'Karakol'],
      description: 'Mountain adventures and nomadic heritage',
      image: 'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-people-3.jpg',
      color: '#fdeb37'
    },
    {
      id: 'tajikistan',
      name: 'Tajikistan',
      flag: '🇹🇯',
      families: 18,
      cities: ['Dushanbe', 'Khujand', 'Kulob'],
      description: 'Persian culture in the Pamir mountains',
      image: 'https://www.mustseespots.com/tajikistan/img/historical-museum-of-sughd-region.jpg',
      color: '#8BA79B'
    },
    {
      id: 'turkmenistan',
      name: 'Turkmenistan',
      flag: '🇹🇲',
      families: 15,
      cities: ['Ashgabat', 'Turkmenbashi', 'Mary'],
      description: 'Desert hospitality and ancient traditions',
      image: 'https://i.pinimg.com/736x/f7/34/d5/f734d5f8e84b42b7075fa6f644641766.jpg',
      color: '#F1BFAD'
    }
  ]

  return (
    <section id="locations" className="py-20 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Explore <span className="text-gradient">Cultural Destinations</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Connect with host families across Russia and CIS countries for authentic cultural experiences
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16">
          <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 via-transparent to-morning-blue/5"></div>
            
            {/* Real Map Embed */}
            <div className="relative z-30 rounded-2xl overflow-hidden" style={{ height: '500px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345678.123456789!2d65.0!3d50.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAwJzAwLjAiTiA2NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s&maptype=terrain"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute top-12 left-12 bg-dark-green/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-sm">
              <h3 className="text-white font-bold text-xl mb-2">Central Asia & Russia</h3>
              <p className="text-white/70 text-sm mb-4">
                Discover authentic cultural experiences across 6 countries with over 200 host families
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow rounded-full mr-2"></div>
                  <span className="text-white/80">Host Families</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-morning-blue rounded-full mr-2"></div>
                  <span className="text-white/80">Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.id}
              className="group bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedCountry(selectedCountry === country.id ? null : country.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">{country.flag}</div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-2xl mb-1">{country.name}</h3>
                  <div className="flex items-center text-yellow text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {country.families} families
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {country.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {country.cities.slice(0, 3).map((city) => (
                    <span
                      key={city}
                      className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {city}
                    </span>
                  ))}
                  {country.cities.length > 3 && (
                    <span className="bg-yellow/20 text-yellow px-3 py-1 rounded-full text-xs font-medium">
                      +{country.cities.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow">{country.families}</div>
                      <div className="text-white/60 text-xs">Host Families</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow">{country.cities.length}</div>
                      <div className="text-white/60 text-xs">Cities</div>
                    </div>
                  </div>
                  <button className="w-full bg-yellow text-dark-green px-4 py-2 rounded-full font-semibold text-sm hover:bg-yellow/90 transition-colors">
                    Explore {country.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow mb-2">227</div>
            <div className="text-white/60">Total Families</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow mb-2">6</div>
            <div className="text-white/60">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow mb-2">32</div>
            <div className="text-white/60">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow mb-2">1,200+</div>
            <div className="text-white/60">Happy Travelers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
