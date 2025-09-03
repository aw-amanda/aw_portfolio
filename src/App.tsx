import { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import './index.css'
import { Layout } from './components/Layout'
import { SplashCursor } from './components/ui/SplashCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  const [opacity, setOpacity] = useState(1)
  const container = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(0), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none bg-black transition-opacity duration-7000 ease-out"
        style={{ opacity }}
      />
      <Layout title="Amanda Williamson - Developer Portfolio">
        <SplashCursor />
        <Navbar />
        <div ref={container} className="relative">
          <Hero />
          <About />
          <Projects />
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default App;