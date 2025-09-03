export const translations = {
  en: {
    // Navbar
    about: "About",
    packages: "Packages", 
    locations: "Locations",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up",
    
    // Hero Section
    heroTitle: "Live a Culture,\nNot Just Visit It",
    heroSubtitle: "Cultural Homestay Exchange across CIS countries. Stay with families, learn traditions, create memories.",
    exploreButton: "Start Your Journey",
    learnMoreButton: "Learn More",
    
    // Festivals Section
    festivalsTitle: "Cultural Festivals & Events",
    festivalsSubtitle: "Experience vibrant celebrations and traditional ceremonies",
    viewAllButton: "View All Festivals",
    bookNowButton: "Book Now",
    
    // Map Section
    mapTitle: "Explore Cultural Destinations",
    mapSubtitle: "Discover authentic experiences around the world",
    
    // Testimonials
    testimonialsTitle: "What Our Travelers Say",
    testimonialsSubtitle: "Real experiences from cultural explorers",
    
    // Footer
    footerAbout: "About CHE",
    footerAboutText: "Cultural Heritage Exchange connects travelers with authentic local experiences, preserving traditions while fostering global understanding.",
    quickLinks: "Quick Links",
    destinations: "Destinations",
    experiences: "Experiences", 
    community: "Community",
    support: "Support",
    helpCenter: "Help Center",
    safety: "Safety",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    followUs: "Follow Us",
    rightsReserved: "All rights reserved."
  },
  
  ru: {
    // Navbar
    about: "О нас",
    packages: "Пакеты",
    locations: "Локации", 
    contact: "Контакты",
    login: "Войти",
    signup: "Регистрация",
    
    // Hero Section
    heroTitle: "Живите культурой,\nа не просто посещайте её",
    heroSubtitle: "Культурный обмен проживанием в семьях в странах СНГ. Живите с семьями, изучайте традиции, создавайте воспоминания.",
    exploreButton: "Начать путешествие",
    learnMoreButton: "Узнать больше",
    
    // Festivals Section
    festivalsTitle: "Культурные фестивали и события",
    festivalsSubtitle: "Испытайте яркие празднования и традиционные церемонии",
    viewAllButton: "Посмотреть все фестивали",
    bookNowButton: "Забронировать",
    
    // Map Section
    mapTitle: "Исследуйте культурные направления",
    mapSubtitle: "Откройте для себя подлинные впечатления по всему миру",
    
    // Testimonials
    testimonialsTitle: "Что говорят наши путешественники",
    testimonialsSubtitle: "Реальный опыт от исследователей культуры",
    
    // Footer
    footerAbout: "О CHE",
    footerAboutText: "Обмен культурным наследием связывает путешественников с подлинным местным опытом, сохраняя традиции и способствуя глобальному пониманию.",
    quickLinks: "Быстрые ссылки",
    destinations: "Направления",
    experiences: "Впечатления",
    community: "Сообщество", 
    support: "Поддержка",
    helpCenter: "Центр помощи",
    safety: "Безопасность",
    terms: "Условия обслуживания",
    privacy: "Политика конфиденциальности",
    followUs: "Подписывайтесь на нас",
    rightsReserved: "Все права защищены."
  },
  
  uz: {
    // Navbar
    about: "Biz haqimizda",
    packages: "Paketlar",
    locations: "Joylar",
    contact: "Aloqa",
    login: "Kirish",
    signup: "Ro'yxatdan o'tish",
    
    // Hero Section
    heroTitle: "Madaniyatni yashang,\nfaqat tashrif buyurmang",
    heroSubtitle: "MDH mamlakatlarida madaniy oilaviy almashinuv. Oilalar bilan yashang, an'analarni o'rganing, xotiralar yarating.",
    exploreButton: "Sayohatingizni boshlang",
    learnMoreButton: "Ko'proq bilib oling",
    
    // Festivals Section
    festivalsTitle: "Madaniy festivallar va tadbirlar",
    festivalsSubtitle: "Jonli bayramlar va an'anaviy marosimlarni boshdan kechiring",
    viewAllButton: "Barcha festivallarni ko'rish",
    bookNowButton: "Hozir bron qiling",
    
    // Map Section
    mapTitle: "Madaniy yo'nalishlarni o'rganing",
    mapSubtitle: "Butun dunyo bo'ylab haqiqiy tajribalarni kashf eting",
    
    // Testimonials
    testimonialsTitle: "Sayohatchilarimiz nima deydi",
    testimonialsSubtitle: "Madaniyat tadqiqotchilarining haqiqiy tajribalari",
    
    // Footer
    footerAbout: "CHE haqida",
    footerAboutText: "Madaniy meros almashinuvi sayohatchilarni mahalliy haqiqiy tajribalar bilan bog'lab, an'analarni saqlab qolish va global tushunishni rivojlantirishga yordam beradi.",
    quickLinks: "Tezkor havolalar",
    destinations: "Yo'nalishlar", 
    experiences: "Tajribalar",
    community: "Jamiyat",
    support: "Qo'llab-quvvatlash",
    helpCenter: "Yordam markazi",
    safety: "Xavfsizlik",
    terms: "Xizmat shartlari",
    privacy: "Maxfiylik siyosati",
    followUs: "Bizni kuzatib boring",
    rightsReserved: "Barcha huquqlar himoyalangan."
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
