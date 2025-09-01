'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Anastasia Volkov",
      location: "Russia → Kazakhstan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      text: "Living with the Nazarbayev family in Almaty was life-changing. I learned to make traditional baursaks and participated in Nauryz celebrations. The warmth and hospitality were incredible.",
      rating: 5
    },
    {
      id: 2,
      name: "Dmitri Petrov",
      location: "Kazakhstan → Uzbekistan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      text: "Staying in Samarkand with a local family opened my eyes to the rich Silk Road history. Every meal was a cultural lesson, and I still keep in touch with my host family.",
      rating: 5
    },
    {
      id: 3,
      name: "Aida Nazarova",
      location: "Kyrgyzstan → Tajikistan",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      text: "The nomadic traditions I experienced in the Pamir mountains were unforgettable. My host family taught me traditional crafts and shared ancient stories.",
      rating: 5
    },
    {
      id: 4,
      name: "Rustam Karimov",
      location: "Uzbekistan → Kyrgyzstan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      text: "Bishkek welcomed me with open arms. Learning about nomadic culture while sharing Uzbek traditions created beautiful cultural bridges between our peoples.",
      rating: 5
    },
    {
      id: 5,
      name: "Gulnara Berdieva",
      location: "Turkmenistan → Kazakhstan",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      text: "The hospitality in Almaty was beyond my expectations. I learned traditional Kazakh music and experienced the most beautiful mountain landscapes of my life.",
      rating: 5
    },
    {
      id: 6,
      name: "Sergei Ivanov",
      location: "Russia → Turkmenistan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      text: "My host family in Ashgabat treated me like their own son. I learned Turkmen, tried traditional dishes, and gained a second family across the region.",
      rating: 5
    }
  ];

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          Stories from Our <span className="text-gradient">Cultural Explorers</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Real experiences from travelers who chose to live culture, not just visit it
        </p>
      </div>

      {/* Testimonials Scrolling Container */}
      <div className="testimonial-row">
        <div className="testimonial-track animate-scroll-right">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-yellow text-sm font-medium">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-white/80 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="testimonial-row mt-6">
        <div className="testimonial-track animate-scroll-left">
          {duplicatedTestimonials.reverse().map((testimonial, index) => (
            <div key={`reverse-${testimonial.id}-${index}`} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-yellow text-sm font-medium">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-white/80 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
