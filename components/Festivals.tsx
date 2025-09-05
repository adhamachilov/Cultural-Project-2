'use client'

import { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import BookingModal from './BookingModal'
import Link from 'next/link'

export default function Festivals() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [bookingModal, setBookingModal] = useState<{ isOpen: boolean; item: any }>({ isOpen: false, item: null })

  const upcomingFestivals = [
    {
      id: 1,
      name: t('navruzFestival'),
      location: t('navruzLocation'),
      date: '2024-03-21',
      dateFormatted: 'March 21, 2024',
      category: 'seasonal',
      price: 150,
      duration: '3 days',
      image: 'https://www.centralasia-travel.com/upload/tiles/navruz-9-708.jpg',
      description: t('navruzDescription'),
      highlights: ['Traditional performances', 'Local cuisine tasting', 'Cultural workshops', 'Folk music concerts']
    },
    {
      id: 2,
      name: t('eagleHuntingFestival'),
      location: t('eagleHuntingLocation'),
      date: '2024-04-15',
      dateFormatted: 'April 15, 2024',
      category: 'cultural',
      price: 280,
      duration: '2 days',
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/01/24/21/5515748.jpg?width=1200',
      description: t('eagleHuntingDescription'),
      highlights: ['Eagle hunting demonstrations', 'Horseback riding', 'Traditional games', 'Nomadic lifestyle experience']
    },
    {
      id: 3,
      name: t('maslenitsaFestival'),
      location: t('maslenitsaLocation'),
      date: '2024-02-26',
      dateFormatted: 'February 26, 2024',
      category: 'religious',
      price: 200,
      duration: '7 days',
      image: 'https://wp.expatexplore.com/wp-content/uploads/2022/02/MaslenitsaFeatureImage.jpg',
      description: t('maslenitsaDescription'),
      highlights: ['Blini making workshops', 'Folk dance performances', 'Winter sports', 'Traditional crafts']
    },
    {
      id: 4,
      name: t('worldNomadGames'),
      location: t('worldNomadLocation'),
      date: '2024-05-10',
      dateFormatted: 'May 10, 2024',
      category: 'sports',
      price: 320,
      duration: '4 days',
      image: 'https://eurasianet.org/sites/default/files/styles/article/public/images/DSC_2269.jpg?itok=nYUeOymV',
      description: t('worldNomadDescription'),
      highlights: ['Kok-boru matches', 'Archery competitions', 'Traditional wrestling', 'Cultural ceremonies']
    },
    {
      id: 5,
      name: t('silkRoadFestival'),
      location: t('silkRoadLocation'),
      date: '2024-06-05',
      dateFormatted: 'June 5, 2024',
      category: 'cultural',
      price: 240,
      duration: '3 days',
      image: 'https://central-asia.guide/wp-content/uploads/2023/01/tajik-food-1024x682.jpg',
      description: t('silkRoadDescription'),
      highlights: ['Silk weaving workshops', 'Traditional music', 'Craft exhibitions', 'Historical tours']
    },
    {
      id: 6,
      name: t('carpetFestival'),
      location: t('carpetLocation'),
      date: '2024-07-20',
      dateFormatted: 'July 20, 2024',
      category: 'arts',
      price: 180,
      duration: '2 days',
      image: 'https://turkmenistan.gov.tm/storage/app/media/Images/2022/05-2022/29052022/Haly%20Bayramy/29052022-1-1-halybayramy.jpg',
      description: t('carpetDescription'),
      highlights: ['Carpet weaving demos', 'Traditional patterns', 'Artisan workshops', 'Cultural exhibitions']
    }
  ]

  const categories = [
    { id: 'all', name: t('allFestivals'), count: upcomingFestivals.length },
    { id: 'cultural', name: t('cultural'), count: upcomingFestivals.filter(f => f.category === 'cultural').length },
    { id: 'seasonal', name: t('seasonal'), count: upcomingFestivals.filter(f => f.category === 'seasonal').length },
    { id: 'religious', name: t('religious'), count: upcomingFestivals.filter(f => f.category === 'religious').length },
    { id: 'sports', name: t('sports'), count: upcomingFestivals.filter(f => f.category === 'sports').length },
    { id: 'arts', name: t('artsCrafts'), count: upcomingFestivals.filter(f => f.category === 'arts').length }
  ]

  const filteredFestivals = selectedCategory === 'all' 
    ? upcomingFestivals 
    : upcomingFestivals.filter(festival => festival.category === selectedCategory)

  return (
    <div>
      <section id="festivals" className="relative py-24 overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gradient mb-6">
            {t('festivalsTitle')}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('festivalsSubtitle')}
          </p>
        </div>

        {/* Festival Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-yellow text-dark-green'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-yellow/40'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredFestivals.map((festival) => (
            <div key={festival.id} className="group">
              <div className="bg-white/8 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-yellow/40 transition-all hover:bg-white/12">
                {/* Festival Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow/90 text-dark-green px-3 py-1 rounded-full text-xs font-bold capitalize">
                      {festival.category}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ${festival.price}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
                      <div className="text-white text-sm font-semibold">{festival.dateFormatted}</div>
                      <div className="text-white/80 text-xs">{festival.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Festival Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2 leading-tight">{festival.name}</h3>
                  
                  <div className="flex items-center text-white/60 text-sm mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {festival.location}
                  </div>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{festival.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {festival.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="bg-white/10 text-white/80 px-2 py-1 rounded-lg text-xs">
                          {highlight}
                        </span>
                      ))}
                      {festival.highlights.length > 2 && (
                        <span className="bg-white/10 text-white/80 px-2 py-1 rounded-lg text-xs">
                          +{festival.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setBookingModal({ 
                        isOpen: true, 
                        item: {
                          title: festival.name,
                          price: festival.price,
                          location: festival.location,
                          dates: festival.dateFormatted,
                          type: 'festival',
                          image: festival.image
                        }
                      })}
                      className="flex-1 bg-gradient-to-r from-yellow to-yellow/80 text-dark-green py-3 rounded-2xl font-bold hover:from-yellow/90 hover:to-yellow/70 transition-all transform hover:scale-105"
                    >
                      {t('bookNowButton')}
                    </button>
                    <button className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow/20 via-yellow/10 to-transparent rounded-3xl p-8 border border-yellow/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">{t('ctaTitle')}</h3>
            <p className="text-white/80 text-lg mb-6">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-yellow text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow/90 transition-colors">
                {t('startJourneyButton')}
              </Link>
              <button className="border border-yellow text-yellow px-8 py-3 rounded-full font-semibold hover:bg-yellow hover:text-black transition-colors">
                {t('viewAllButton')}
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Booking Modal */}
      {bookingModal.item && (
        <BookingModal
          isOpen={bookingModal.isOpen}
          onClose={() => setBookingModal({ isOpen: false, item: null })}
          item={bookingModal.item}
        />
      )}
    </div>
  )
}
