import { MotionConfig } from 'framer-motion'
import { ShadeProvider } from './shade'
import Header from './Header'
import Consult from './Consult'
import { Hero, Treatments, Preview, Process, Doctor, Cost, Faq, Footer } from './sections'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ShadeProvider>
        <Header />
        <main><Hero /><Treatments /><Preview /><Process /><Doctor /><Cost /><Faq /><Consult /></main>
        <Footer />
      </ShadeProvider>
    </MotionConfig>
  )
}
