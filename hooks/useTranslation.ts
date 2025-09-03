'use client'

import { useState, useEffect } from 'react'
import { translations, Language, TranslationKey } from '../lib/translations'

export function useTranslation() {
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

  return {
    language,
    changeLanguage,
    t
  }
}
