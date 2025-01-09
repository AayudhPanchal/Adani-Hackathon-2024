import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import CTA from './components/CTA.js'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Benefits />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage