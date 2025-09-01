'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor-glow') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-glow"></div>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-dark-green/95 backdrop-blur-md rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl border border-white/10">
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-dark-green rounded-full"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white/90 hover:text-yellow transition-colors text-sm font-medium">About</a>
              <a href="#packages" className="text-white/90 hover:text-yellow transition-colors text-sm font-medium">Packages</a>
              <a href="#locations" className="text-white/90 hover:text-yellow transition-colors text-sm font-medium">Locations</a>
              <a href="#contact" className="text-white/90 hover:text-yellow transition-colors text-sm font-medium">Contact</a>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="bg-white/10 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-white/20 transition-colors"
                >
                  <span className="text-white text-sm font-medium">{selectedLanguage}</span>
                  <svg className={`w-4 h-4 text-white transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-dark-green/95 backdrop-blur-md rounded-xl border border-white/10 py-2 min-w-[140px] z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.name)
                          setIsLanguageOpen(false)
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors flex items-center space-x-3"
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-white text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <Link href="/auth/login" className="text-white/90 hover:text-yellow transition-colors text-sm font-medium">
                  Login
                </Link>
                <div className="w-px h-4 bg-white/20"></div>
                <Link href="/auth/signup" className="bg-yellow text-dark-green px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow/90 transition-colors whitespace-nowrap">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-3">
              <a href="#about" className="text-white/90 hover:text-yellow transition-colors text-xs font-medium">About</a>
              <a href="#packages" className="text-white/90 hover:text-yellow transition-colors text-xs font-medium">Packages</a>
              <div className="bg-white/10 rounded-full px-3 py-1">
                <span className="text-white text-xs font-medium">CHE</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
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
          <div className="particle particle-11"></div>
          <div className="particle particle-12"></div>
          <div className="particle particle-13"></div>
          <div className="particle particle-14"></div>
          <div className="particle particle-15"></div>
          <div className="particle particle-16"></div>
          <div className="particle particle-17"></div>
          <div className="particle particle-18"></div>
          <div className="particle particle-19"></div>
          <div className="particle particle-20"></div>
          <div className="particle particle-21"></div>
          <div className="particle particle-22"></div>
          <div className="particle particle-23"></div>
          <div className="particle particle-24"></div>
          <div className="particle particle-25"></div>
          <div className="particle particle-26"></div>
          <div className="particle particle-27"></div>
          <div className="particle particle-28"></div>
          <div className="particle particle-29"></div>
          <div className="particle particle-30"></div>
          <div className="particle particle-31"></div>
          <div className="particle particle-32"></div>
          <div className="particle particle-33"></div>
          <div className="particle particle-34"></div>
          <div className="particle particle-35"></div>
        </div>
        <div className="shooting-stars">
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Live a Culture,<br />
            <span className="text-gradient">Not Just Visit It</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Cultural Homestay Exchange across CIS countries. Stay with families, learn traditions, create memories.
          </p>
          <button className="bg-yellow text-dark-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow/90 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </>
  )
}
