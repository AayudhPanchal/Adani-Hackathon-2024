import React from 'react'
import { BarChart, Wind } from 'lucide-react'

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
          Integrated ML Models
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
            <BarChart className="h-12 w-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Demand Prediction Model</h3>
            <p className="text-gray-400">
              Accurately forecast energy demand using advanced machine learning algorithms, enabling efficient resource allocation and cost reduction.
            </p>
          </div>
          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
            <Wind className="h-12 w-12 text-green-400 mb-4 group-hover:text-green-300 transition-colors" />
            <h3 className="text-xl font-semibold mb-2 text-green-300">Generation Model for Power Plants</h3>
            <p className="text-gray-400">
              Optimize power generation strategies by integrating renewable energy sources and maximizing overall efficiency of your power plants.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features