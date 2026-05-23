import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Service from '@/components/Service'
import UseCases from '@/components/UseCases'
import Flow from '@/components/Flow'
import Works from '@/components/Works'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Service />
      <UseCases />
      <Flow />
      <Works />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
