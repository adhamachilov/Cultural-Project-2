'use client'

import { useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
  tags: string[]
}

export default function CulturalBlog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Ancient Art of Kazakh Eagle Hunting',
      excerpt: 'Discover the centuries-old tradition of hunting with golden eagles in the Altai Mountains of Kazakhstan.',
      content: `The tradition of hunting with golden eagles has been passed down through generations of Kazakh nomads in the Altai Mountains. This ancient practice, known as "berkutchi," represents one of the most remarkable partnerships between humans and wildlife.

The bond between a hunter and their eagle begins when the bird is just a young eaglet, captured from the wild and trained over months of patient work. The relationship is built on mutual respect and trust, with the eagle remaining a wild creature that chooses to work with its human partner.

During the hunting season, which runs from October to February, hunters and their eagles work together to catch foxes and wolves in the harsh mountain terrain. The eagles, with their incredible eyesight and powerful talons, can spot prey from miles away and dive at speeds of up to 150 mph.

What makes this tradition truly special is not just the hunting itself, but the deep cultural significance it holds. The practice represents the nomadic way of life, the connection to nature, and the passing of knowledge from father to son. Today, this ancient art faces challenges from modernization, making cultural preservation efforts more important than ever.

The annual Golden Eagle Festival in Bayan-Ölgii celebrates this tradition, bringing together the best hunters to showcase their skills and keep this remarkable culture alive for future generations.`,
      author: 'Murat Kazakhbayev',
      date: 'March 10, 2024',
      category: 'traditions',
      image: 'https://kalpak-travel.com/wp-content/uploads/2017/04/turkistan-mausoleum-kazakhstan.jpg',
      readTime: '8 min read',
      tags: ['Kazakhstan', 'Eagles', 'Hunting', 'Nomadic Culture']
    },
    {
      id: 2,
      title: 'Uzbek Silk Road Cuisine: A Journey Through Flavors',
      excerpt: 'Explore the rich culinary heritage of Uzbekistan, shaped by centuries of Silk Road trade.',
      content: `Uzbek cuisine is a testament to the country's position at the crossroads of ancient trade routes. The flavors, techniques, and ingredients tell the story of merchants, nomads, and settlers who brought their culinary traditions to this Central Asian heartland.

Plov, the national dish of Uzbekistan, is more than just a meal—it's a cultural institution. This aromatic rice dish, cooked with lamb, carrots, and onions in a special pot called a kazan, varies from region to region. In Tashkent, it's prepared differently than in Samarkand, with each city claiming their version is the most authentic.

The influence of the Silk Road is evident in the use of spices like cumin, coriander, and barberries, which were once precious commodities traded along these ancient routes. Dishes like manti (steamed dumplings) show Chinese influence, while the bread-making traditions reflect Persian heritage.

Street food culture thrives in Uzbek bazaars, where vendors sell fresh non bread from traditional tandoor ovens, samsa (baked meat pastries), and shashlik (grilled meat skewers). The communal aspect of eating is central to Uzbek culture—meals are shared, and hospitality is paramount.

Modern Uzbek chefs are now working to preserve traditional recipes while adapting them for contemporary tastes, ensuring that this rich culinary heritage continues to evolve while maintaining its authentic roots.`,
      author: 'Dilshod Rahmonov',
      date: 'March 5, 2024',
      category: 'cuisine',
      image: 'https://uzbekistan.travel/storage/app/uploads/public/671/9dc/d43/6719dcd43a6f2547697505.jpg',
      readTime: '6 min read',
      tags: ['Uzbekistan', 'Cuisine', 'Silk Road', 'Plov']
    },
    {
      id: 3,
      title: 'Russian Folk Music: Echoes of the Motherland',
      excerpt: 'From ancient bylinas to modern interpretations, explore the soul of Russian musical tradition.',
      content: `Russian folk music carries the soul of a nation across centuries of history. From the epic bylinas sung by traveling bards to the haunting melodies of village songs, this musical tradition reflects the vast landscapes and complex emotions of the Russian people.

The balalaika, with its distinctive triangular body and bright, percussive sound, has become synonymous with Russian folk music. Alongside the accordion and the domra, these instruments create the characteristic sound that has captivated audiences worldwide.

Traditional Russian songs often tell stories of love, loss, and the harsh beauty of the Russian landscape. Songs like "Kalinka" and "Katyusha" have transcended their folk origins to become symbols of Russian culture globally. The call-and-response structure of many folk songs reflects their communal origins, designed to be sung by groups during work or celebration.

The Soviet era brought both challenges and opportunities for folk music. While some traditional elements were suppressed, state-sponsored folk ensembles helped preserve and popularize many songs. Today, there's a renewed interest in authentic folk traditions, with young musicians exploring their roots while creating contemporary interpretations.

Russian folk dance is inseparable from the music, with energetic performances featuring the famous squat-kick dance moves and colorful traditional costumes. These performances continue to be a vital part of cultural celebrations and festivals throughout Russia and the diaspora.`,
      author: 'Natasha Volkov',
      date: 'February 28, 2024',
      category: 'music',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      readTime: '7 min read',
      tags: ['Russia', 'Folk Music', 'Balalaika', 'Cultural Heritage']
    },
    {
      id: 4,
      title: 'Kyrgyz Nomadic Traditions in the Modern World',
      excerpt: 'How ancient nomadic practices adapt and survive in contemporary Kyrgyzstan.',
      content: `The nomadic traditions of Kyrgyzstan represent one of the world's last remaining nomadic cultures. Despite modernization and urbanization, many Kyrgyz families continue to practice seasonal migration with their livestock, maintaining a way of life that has existed for over a thousand years.

The yurt, or "boz ui" in Kyrgyz, remains the perfect dwelling for nomadic life. These portable felt homes can be assembled in under an hour and provide excellent insulation against the harsh mountain climate. The circular design reflects the Kyrgyz worldview, with the central crown representing the connection between earth and sky.

Horsemanship is central to Kyrgyz culture, with children learning to ride before they can properly walk. Traditional games like kok-boru (similar to polo but played with a goat carcass) and kyz kuu (chase the girl) showcase the incredible riding skills that were once essential for survival on the steppes.

The oral tradition remains strong, with the epic of Manas—one of the world's longest epic poems—still recited by traditional storytellers called "manaschi." This epic, containing over half a million lines, preserves the history, values, and identity of the Kyrgyz people.

Today, eco-tourism provides new opportunities for nomadic families to share their culture while maintaining their traditional lifestyle. Visitors can experience authentic nomadic life, learning traditional crafts, participating in daily activities, and gaining insight into a way of life that offers valuable lessons about sustainability and community.`,
      author: 'Cholpon Tashieva',
      date: 'February 20, 2024',
      category: 'lifestyle',
      image: 'https://eurasia.travel/wp-content/uploads/2024/09/kyrgyz-people-3.jpg',
      readTime: '9 min read',
      tags: ['Kyrgyzstan', 'Nomadic Life', 'Yurts', 'Horses', 'Manas Epic']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'traditions', name: 'Traditions', count: blogPosts.filter(p => p.category === 'traditions').length },
    { id: 'cuisine', name: 'Cuisine', count: blogPosts.filter(p => p.category === 'cuisine').length },
    { id: 'music', name: 'Music & Arts', count: blogPosts.filter(p => p.category === 'music').length },
    { id: 'lifestyle', name: 'Lifestyle', count: blogPosts.filter(p => p.category === 'lifestyle').length }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  if (selectedPost) {
    return (
      <div className="min-h-screen animated-bg">
        {/* Background particles */}
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Blog</span>
          </button>

          {/* Article */}
          <article className="bg-white/8 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-yellow/20 text-yellow px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find(c => c.id === selectedPost.category)?.name}
                </span>
                <span className="text-white/60 text-sm">{selectedPost.readTime}</span>
                <span className="text-white/60 text-sm">{selectedPost.date}</span>
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">{selectedPost.title}</h1>
              
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow to-yellow/70 rounded-full flex items-center justify-center">
                  <span className="text-dark-green font-bold text-sm">
                    {selectedPost.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{selectedPost.author}</p>
                  <p className="text-white/60 text-sm">Cultural Expert</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-white/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6 mt-8">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Cultural Stories</h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Dive deep into the rich cultural heritage of Central Asia and Russia through authentic stories, 
            traditions, and insights from local experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-yellow text-dark-green'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/8 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden hover:border-yellow/40 transition-all group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow/90 text-dark-green px-3 py-1 rounded-full text-sm font-bold">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-white/60 text-sm mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 leading-tight group-hover:text-yellow transition-colors">
                  {post.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow to-yellow/70 rounded-full flex items-center justify-center">
                      <span className="text-dark-green font-bold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-white/60 text-sm">{post.author}</span>
                  </div>

                  <button className="text-yellow hover:text-yellow/80 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow/20 via-yellow/10 to-transparent rounded-3xl p-8 border border-yellow/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Share Your Cultural Story</h3>
            <p className="text-white/80 text-lg mb-6">
              Have an authentic cultural experience to share? We'd love to feature your story on our blog.
            </p>
            <Link 
              href="/contact"
              className="bg-yellow text-dark-green px-8 py-4 rounded-2xl font-bold hover:bg-yellow/90 transition-colors inline-flex items-center"
            >
              Submit Your Story
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
