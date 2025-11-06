import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleShopNow = () => {
    navigate('/products')
  }

  const handleLearnMore = () => {
    navigate('/about')
  }

  return (
    <section className="w-full py-20 bg-[#f5f5f5]" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`
              text-4xl md:text-6xl lg:text-7xl font-bold mb-6
              text-black leading-tight
              ${isVisible ? 'animate-fade-in-down opacity-0' : 'opacity-0'}
            `}
            style={{
              animationDelay: '0.8s',
              animationFillMode: 'forwards'
            }}
          >
            Discover Amazing Products
          </h1>

          <p
            className={`
              text-lg md:text-xl lg:text-2xl mb-8 md:mb-12
              text-[#666666] max-w-2xl mx-auto leading-relaxed
              ${isVisible ? 'animate-fade-in-down opacity-0' : 'opacity-0'}
            `}
            style={{
              color: '#666666',
              animationDelay: '1.0s',
              animationFillMode: 'forwards'
            }}
          >
            Quality items for modern living with ON U exclusive collection
          </p>

          <div
            className={`
              flex flex-col sm:flex-row gap-4 justify-center items-center
              ${isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}
            `}
            style={{
              animationDelay: '1.2s',
              animationFillMode: 'forwards'
            }}
          >
            <button
              onClick={handleShopNow}
              className="bg-black text-white px-8 py-4 text-base md:text-lg hover-scale border-black hover:bg-gray-800 transition-all duration-300"
              size="lg"
            >
              Shop Now
              <ArrowUp className="inline-block ml-2 h-5 w-5 rotate-45" />
            </button>

            <button
              onClick={handleLearnMore}
              className="border-black text-black px-8 py-4 text-base md:text-lg hover:bg-black hover:text-white transition-all duration-300 border-2"
              size="lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner