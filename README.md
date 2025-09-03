# Cultural Exchange Platform MVP

A Next.js-based platform connecting travelers with authentic cultural experiences through local host families across Russia & CIS countries.

## 🎨 Design System

**Color Palette:**

### Core Functionality
- **Festival Booking System**: Book authentic cultural festivals with integrated payment
- **Messaging System**: Real-time communication between tourists and hosts
- **Review & Rating System**: Photo/video uploads, verified reviews
- **Cultural Blog**: Expert articles on Central Asian and Russian culture
- **Payment Integration**: Multiple payment methods (Credit Card, PayPal, Crypto, Bank Transfer)
- **Notification System**: Real-time updates and alerts
- **Multilingual Support**: 8 languages including English, Russian, Kazakh, Uzbek, Kyrgyz

### User Experience
- **Animated Background**: Floating particles and shooting stars
- **Glassmorphism Design**: Modern translucent UI elements
- **Custom Scrollbars**: Project-themed yellow gradient scrollbars
- **Responsive Design**: Mobile-first approach
- **Interactive Components**: Booking modals, messaging interface, review system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cultural-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Login Credentials

### Admin Access
- **Username**: `admin`
- **Password**: `adjo1020`
- **Dashboard**: `/dashboard/admin`

### Test Users
- **Tourist**: Any email address → `/dashboard/tourist`
- **Host**: Username containing "host" or "family" → `/dashboard/host`

## 📁 Project Structure

```
├── app/
│   ├── auth/
│   │   ├── login/              # Login page
│   │   └── signup/             # Multi-role signup system
│   │       ├── tourist/        # Tourist registration
│   │       └── host/           # Host family registration
│   ├── dashboard/
│   │   ├── admin/              # Admin panel
│   │   ├── tourist/            # Tourist dashboard
│   │   └── host/               # Host dashboard
│   ├── globals.css             # Global styles & animations
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/
│   ├── BookingModal.tsx        # 3-step booking process
│   ├── MessagingSystem.tsx     # Real-time messaging
│   ├── ReviewSystem.tsx        # Reviews with photo uploads
│   ├── PaymentSystem.tsx       # Multi-method payments
│   ├── NotificationSystem.tsx  # Real-time notifications
│   ├── LanguageSelector.tsx    # Multilingual support
│   ├── CulturalBlog.tsx        # Blog system
│   ├── Festivals.tsx           # Festival showcase
│   ├── Hero.tsx                # Landing hero section
│   ├── InteractiveMap.tsx      # Cultural experiences map
│   ├── Testimonials.tsx        # User testimonials
│   └── Footer.tsx              # Site footer
└── public/                     # Static assets
```

## 🎨 Design System

### Colors
- **Primary Yellow**: `#F4D03F` (CHE brand color)
- **Dark Green**: `#1B4332` (accent color)
- **Background**: Animated gradient with particles
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
