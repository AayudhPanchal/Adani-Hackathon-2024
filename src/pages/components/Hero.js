import React from 'react'
import { LineChart, Lightbulb } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-300 to-blue-400 text-transparent bg-clip-text">
            Energy Optimization Hackathon
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Join us in revolutionizing energy efficiency and sustainable power generation through advanced ML solutions
          </p>
          <a 
            href="#cta" 
            className="inline-block bg-green-500/20 border border-green-500 text-green-400 px-8 py-4 rounded-md hover:bg-green-500/30 transition duration-300 text-lg"
          >
            Get Started
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex items-center space-x-8">
              <LineChart className="h-16 w-16 text-green-400" />
              <Lightbulb className="h-16 w-16 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero