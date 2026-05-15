import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
