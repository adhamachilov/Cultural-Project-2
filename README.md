# Cultural Exchange Platform MVP

A Next.js-based platform connecting travelers with authentic cultural experiences through local host families across Russia & CIS countries.

## 🎨 Design System

**Color Palette:**
- Dark Green (`#031D1E`) - Headers, navigation, primary text
- Yellow (`#fdeb37`) - CTAs, highlights, interactive elements
- Desert Sand (`#F1BFAD`) - Content backgrounds, cards
- Morning Blue (`#8BA79B`) - Secondary text, accents

**Typography:**
- Primary: Inter (sans-serif)
- Headers: Playfair Display (serif)

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── auth/
│   │   ├── login/          # Login page
│   │   └── signup/         # Registration page
│   ├── dashboard/
│   │   ├── tourist/        # Tourist dashboard
│   │   └── host/           # Host family dashboard
│   ├── admin/              # Admin panel
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── Hero.tsx            # Landing hero section
│   ├── SearchSection.tsx   # Search functionality
│   ├── MapSection.tsx      # Interactive map display
│   ├── InteractiveMap.tsx  # Leaflet map component
│   ├── DashboardMap.tsx    # Dashboard map view
│   └── Footer.tsx          # Site footer
└── ...config files
```

## ✨ Features

### Landing Page
- Hero section with cultural visuals
- Interactive search with country/city filters
- Map of Russia & CIS countries with family locations
- Two experience paths: General vs Specific cultural activities

### Authentication
- Dual registration: Tourists vs Host Families
- Tourist signup: interests, travel preferences
- Host signup: cultural specialties, location, capacity

### Tourist Dashboard
- Advanced search and filtering
- Grid/Map view toggle
- Family profiles with ratings and specialties
- Booking system integration

### Host Dashboard
- Earnings and booking analytics
- Profile management with photos
- Calendar and availability management
- Guest messaging system

### Admin Panel
- User and host family management
- Booking oversight and analytics
- Host application approval workflow
- Platform statistics and revenue tracking

## 🗺️ Supported Regions

- Russia (Moscow, St. Petersburg)
- Kazakhstan (Almaty)
- Uzbekistan (Tashkent, Samarkand)
- Kyrgyzstan (Bishkek)
- Azerbaijan (Baku)
- Armenia (Yerevan)
- Tajikistan (Dushanbe)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Maps:** Leaflet + React Leaflet
- **Icons:** Lucide React
- **Authentication:** NextAuth.js (planned)
- **Database:** Prisma (planned)
- **Payments:** Stripe (planned)

## 🎯 MVP Roadmap

- [x] Landing page with hero and search
- [x] Interactive map with country highlights
- [x] Authentication system (UI)
- [x] Tourist dashboard with family browsing
- [x] Host dashboard with booking management
- [x] Admin panel for platform oversight
- [ ] Database integration with Prisma
- [ ] Payment system with Stripe
- [ ] Real authentication with NextAuth
- [ ] File upload for host photos
- [ ] Booking calendar integration
- [ ] Messaging system backend

## 🌍 Cultural Focus

The platform emphasizes authentic cultural exchange through:
- Traditional crafts and skills
- Local cuisine and cooking classes
- Music and artistic traditions
- Agricultural and nomadic practices
- Language exchange opportunities
- Historical and cultural tours
