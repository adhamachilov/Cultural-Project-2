'use client'

import { useState } from 'react'

interface Review {
  id: number
  user: string
  avatar: string
  rating: number
  date: string
  experience: string
  comment: string
  photos: string[]
  helpful: number
  verified: boolean
}

interface ReviewFormData {
  rating: number
  comment: string
  photos: File[]
}

export default function ReviewSystem() {
  const [activeTab, setActiveTab] = useState<'read' | 'write'>('read')
  const [reviewForm, setReviewForm] = useState<ReviewFormData>({
    rating: 0,
    comment: '',
    photos: []
  })

  const reviews: Review[] = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'SJ',
      rating: 5,
      date: 'February 2024',
      experience: 'Traditional Kazakh Cooking with Aigul Family',
      comment: 'Absolutely incredible experience! The Aigul family welcomed us with such warmth and taught us authentic recipes passed down through generations. The beshbarmak we made was delicious, and learning about the cultural significance of each dish made it even more special.',
      photos: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
      ],
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      user: 'Michael Chen',
      avatar: 'MC',
      rating: 4,
      date: 'January 2024',
      experience: 'Eagle Festival Experience',
      comment: 'Amazing cultural immersion! The eagle hunting demonstration was breathtaking and the hospitality of the nomadic family was outstanding. Only minor issue was the weather, but that\'s beyond anyone\'s control.',
      photos: [
        'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-people-3.jpg'
      ],
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      user: 'Emma Rodriguez',
      avatar: 'ER',
      rating: 5,
      date: 'December 2023',
      experience: 'Russian Maslenitsa Celebration',
      comment: 'The most authentic cultural experience I\'ve ever had! Learning to make blini from scratch, participating in traditional games, and hearing folk stories made this unforgettable.',
      photos: [],
      helpful: 15,
      verified: true
    }
  ]

  const handleRatingClick = (rating: number) => {
    setReviewForm({ ...reviewForm, rating })
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReviewForm({ ...reviewForm, photos: Array.from(e.target.files) })
    }
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Process review submission
    alert('Review submitted successfully!')
    setReviewForm({ rating: 0, comment: '', photos: [] })
    setActiveTab('read')
  }

  const renderStars = (rating: number, interactive = false, size = 'w-5 h-5') => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={interactive ? () => handleRatingClick(star) : undefined}
            className={`${size} ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            disabled={!interactive}
          >
            <svg
              className={`w-full h-full ${
                star <= rating ? 'text-yellow' : 'text-white/20'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white/8 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
      {/* Header Tabs */}
      <div className="border-b border-white/20">
        <div className="flex">
          <button
            onClick={() => setActiveTab('read')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'read'
                ? 'text-yellow border-b-2 border-yellow bg-white/5'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Read Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setActiveTab('write')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'write'
                ? 'text-yellow border-b-2 border-yellow bg-white/5'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Write Review
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'read' ? (
          <div className="space-y-6">
            {/* Overall Rating Summary */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-4xl font-bold text-white">4.7</span>
                    {renderStars(5, false, 'w-6 h-6')}
                  </div>
                  <p className="text-white/70">Based on {reviews.length} reviews</p>
                </div>
                <div className="text-right">
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const count = reviews.filter(r => r.rating === stars).length
                      const percentage = (count / reviews.length) * 100
                      return (
                        <div key={stars} className="flex items-center space-x-2 text-sm">
                          <span className="text-white/70 w-8">{stars}★</span>
                          <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-white/50 w-8">{count}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white/5 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow to-yellow/70 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-dark-green font-bold">{review.avatar}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-semibold">{review.user}</h4>
                            {review.verified && (
                              <div className="flex items-center space-x-1 bg-green-500/20 px-2 py-1 rounded-full">
                                <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-green-400 text-xs font-medium">Verified</span>
                              </div>
                            )}
                          </div>
                          <p className="text-white/60 text-sm">{review.experience}</p>
                        </div>
                        <span className="text-white/50 text-sm">{review.date}</span>
                      </div>

                      <div className="flex items-center space-x-3 mb-3">
                        {renderStars(review.rating)}
                        <span className="text-white/70 text-sm">{review.rating}/5</span>
                      </div>

                      <p className="text-white/80 mb-4 leading-relaxed">{review.comment}</p>

                      {review.photos.length > 0 && (
                        <div className="flex space-x-3 mb-4">
                          {review.photos.map((photo, index) => (
                            <img
                              key={index}
                              src={photo}
                              alt={`Review photo ${index + 1}`}
                              className="w-20 h-20 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform"
                            />
                          ))}
                        </div>
                      )}

                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span className="text-sm">Helpful ({review.helpful})</span>
                        </button>
                        <button className="text-white/60 hover:text-white transition-colors text-sm">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Write a Review</h3>
            
            <form onSubmit={handleSubmitReview} className="space-y-6">
              {/* Rating */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  Overall Rating *
                </label>
                <div className="flex items-center space-x-4">
                  {renderStars(reviewForm.rating, true, 'w-8 h-8')}
                  <span className="text-white/70">
                    {reviewForm.rating > 0 ? `${reviewForm.rating}/5` : 'Click to rate'}
                  </span>
                </div>
              </div>

              {/* Experience Selection */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Experience *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow"
                >
                  <option value="" className="bg-dark-green">Select an experience</option>
                  <option value="cooking" className="bg-dark-green">Traditional Cooking Class</option>
                  <option value="festival" className="bg-dark-green">Cultural Festival</option>
                  <option value="homestay" className="bg-dark-green">Family Homestay</option>
                  <option value="craft" className="bg-dark-green">Traditional Crafts Workshop</option>
                </select>
              </div>

              {/* Review Comment */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Your Review *
                </label>
                <textarea
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow resize-none"
                  placeholder="Share your experience... What made it special? What did you learn? How was the hospitality?"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Add Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-yellow/50 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/70">Click to upload photos</p>
                    <p className="text-white/50 text-sm mt-1">PNG, JPG up to 10MB each</p>
                  </label>
                </div>
                
                {reviewForm.photos.length > 0 && (
                  <div className="mt-4">
                    <p className="text-white/70 text-sm mb-2">{reviewForm.photos.length} photo(s) selected</p>
                    <div className="flex flex-wrap gap-2">
                      {reviewForm.photos.map((photo, index) => (
                        <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-lg text-sm">
                          {photo.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('read')}
                  className="flex-1 bg-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={reviewForm.rating === 0 || !reviewForm.comment.trim()}
                  className="flex-1 bg-yellow text-dark-green py-4 rounded-2xl font-bold hover:bg-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
