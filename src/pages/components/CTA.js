import React from 'react'

const CTA = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
            Ready to Optimize Your Energy Strategy?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our hackathon and be part of the sustainable energy revolution
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition duration-300"
            onClick={(e) => {
              e.preventDefault()
              alert('Registration form would open here')
            }}
          >
            Register for the Hackathon
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA