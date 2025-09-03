import Hero from '../components/Hero'
import RugStrip from '../components/RugStrip'
import RugStripRight from '../components/RugStripRight'
import Festivals from '../components/Festivals'
import InteractiveMap from '../components/InteractiveMap'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen animated-bg">
      <Hero />
      <RugStrip />
      <Festivals />
      <RugStripRight />
      <InteractiveMap />
      <RugStrip />
      <Testimonials />
      <Footer />
    </div>
  )
}
