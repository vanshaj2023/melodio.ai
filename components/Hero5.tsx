import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import hero1 from '../public/Hero5.png'

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen  overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Royalty-Free Creations
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          We are working on a feature to provide you with copyright-free music creation.
          </p>

          <button className="group flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-500/10 transition-all duration-300">
            <span className="text-lg font-semibold">Download APP</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Image section */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            {/* Neon border effect */}
            <Image src={hero1} alt='Hero Image' layout='fill' objectFit='cover' />

            {/* Overlay gradient */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
