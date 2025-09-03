'use client'

import { useState } from 'react'

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақша', flag: '🇰🇿' },
  { code: 'uz', name: 'Uzbek', nativeName: 'O\'zbek', flag: '🇺🇿' },
  { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча', flag: '🇰🇬' },
  { code: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ', flag: '🇹🇯' },
  { code: 'tk', name: 'Turkmen', nativeName: 'Türkmen', flag: '🇹🇲' },
  { code: 'mn', name: 'Mongolian', nativeName: 'Монгол', flag: '🇲🇳' }
]

const translations = {
  en: {
    selectLanguage: 'Select Language',
    currentLanguage: 'English',
    welcome: 'Welcome to Cultural Heritage Exchange',
    description: 'Discover authentic cultural experiences',
    festivals: 'Festivals',
    experiences: 'Experiences',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    signup: 'Sign Up',
    bookNow: 'Book Now',
    learnMore: 'Learn More'
  },
  ru: {
    selectLanguage: 'Выберите язык',
    currentLanguage: 'Русский',
    welcome: 'Добро пожаловать в Культурное Наследие',
    description: 'Откройте для себя подлинные культурные впечатления',
    festivals: 'Фестивали',
    experiences: 'Опыт',
    about: 'О нас',
    contact: 'Контакты',
    login: 'Войти',
    signup: 'Регистрация',
    bookNow: 'Забронировать',
    learnMore: 'Узнать больше'
  },
  kk: {
    selectLanguage: 'Тілді таңдаңыз',
    currentLanguage: 'Қазақша',
    welcome: 'Мәдени Мұра Алмасуына қош келдіңіз',
    description: 'Нағыз мәдени тәжірибелерді ашыңыз',
    festivals: 'Фестивальдар',
    experiences: 'Тәжірибелер',
    about: 'Біз туралы',
    contact: 'Байланыс',
    login: 'Кіру',
    signup: 'Тіркелу',
    bookNow: 'Брондау',
    learnMore: 'Көбірек білу'
  },
  uz: {
    selectLanguage: 'Tilni tanlang',
    currentLanguage: 'O\'zbek',
    welcome: 'Madaniy Meros Almashinuviga xush kelibsiz',
    description: 'Haqiqiy madaniy tajribalarni kashf eting',
    festivals: 'Festivallar',
    experiences: 'Tajribalar',
    about: 'Biz haqimizda',
    contact: 'Aloqa',
    login: 'Kirish',
    signup: 'Ro\'yxatdan o\'tish',
    bookNow: 'Buyurtma berish',
    learnMore: 'Batafsil'
  },
  ky: {
    selectLanguage: 'Тилди тандаңыз',
    currentLanguage: 'Кыргызча',
    welcome: 'Маданий Мурас Алмашууга кош келиңиз',
    description: 'Чыныгы маданий тажрыйбаларды ачыңыз',
    festivals: 'Фестивалдар',
    experiences: 'Тажрыйбалар',
    about: 'Биз жөнүндө',
    contact: 'Байланыш',
    login: 'Кирүү',
    signup: 'Катталуу',
    bookNow: 'Брондоо',
    learnMore: 'Көбүрөөк билүү'
  }
}

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('en')
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]
  const t = translations[currentLang as keyof typeof translations] || translations.en

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsOpen(false)
    // In a real app, this would update the global language state
    localStorage.setItem('preferredLanguage', langCode)
  }

  return (
    <div className="relative">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-white text-sm font-medium hidden sm:block">
          {currentLanguage.name}
        </span>
        <svg 
          className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden">
          <div className="p-3 border-b border-white/20">
            <h3 className="text-white font-semibold text-sm">{t.selectLanguage}</h3>
          </div>
          
          <div className="max-h-64 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-colors ${
                  currentLang === language.code ? 'bg-white/5' : ''
                }`}
              >
                <span className="text-xl">{language.flag}</span>
                <div className="flex-1 text-left">
                  <div className="text-white font-medium text-sm">{language.name}</div>
                  <div className="text-white/60 text-xs">{language.nativeName}</div>
                </div>
                {currentLang === language.code && (
                  <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-white/20">
            <p className="text-white/60 text-xs text-center">
              More languages coming soon
            </p>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

// Hook to use translations
export function useTranslations() {
  const [currentLang, setCurrentLang] = useState('en')

  // Load saved language preference
  useState(() => {
    const saved = localStorage.getItem('preferredLanguage')
    if (saved && translations[saved as keyof typeof translations]) {
      setCurrentLang(saved)
    }
  })

  const t = translations[currentLang as keyof typeof translations] || translations.en

  return { t, currentLang, setCurrentLang }
}
