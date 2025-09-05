'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language, TranslationKey } from '../lib/translations'

interface TranslationContextType {
  language: Language
  changeLanguage: (newLanguage: Language) => void
  t: (key: TranslationKey) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
