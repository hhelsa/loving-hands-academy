import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import DirectorMessage from '@/components/DirectorMessage'
import About from '@/components/About'
import Programs from '@/components/Programs'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <DirectorMessage />
      <About />
      <Programs />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}