import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import InteractiveMap from '@/components/InteractiveMap'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen animated-bg">
      <Hero />
      <Testimonials />
      <InteractiveMap />
      <Footer />
    </div>
  )
}
