"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import gplay from '../public/g-play.png'
import appstore from '../public/app-store.png'
import Form from './Form'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import Hero5 from './Hero5'
import Footer from './Footer'

const StarryBackground: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScroll(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = 1 + (scroll * 0.0005); // Adjust the multiplication factor to control zoom speed

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark background with stars */}
      <div 
        className="absolute inset-0 bg-[#0F0216] transition-transform duration-100 ease-linear"
        style={{ 
          transform: `scale(${scale})`,
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.2) 0.5px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(147,51,234,0.3) 0px, transparent 200px),
            radial-gradient(circle at 20% 80%, rgba(139,92,246,0.3) 0px, transparent 200px)
          `,
          backgroundSize: '30px 30px, 400px 400px, 400px 400px'
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-xl animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              background: `rgba(${Math.random() > 0.5 ? '147,51,234' : '139,92,246'},0.2)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              transform: `scale(${scale})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Header */}
        <div className='flex flex-col md:flex-row items-center justify-between px-8 py-4 text-white'>
          <div className='text-center md:text-left max-w-xl'>
            <h3 className='text-lg font-medium mb-1'>Our beta version app is now available for download.</h3>
            <p className='text-sm text-gray-300'>Feel free to check it out and experience more features!</p>
          </div>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <Image 
              src={gplay} 
              alt='Google Play Store' 
              width={135} 
              height={40} 
              className="hover:opacity-90 transition-opacity" 
            />
            <Image 
              src={appstore} 
              alt='App Store' 
              width={135} 
              height={40} 
              className="hover:opacity-90 transition-opacity" 
            />
          </div>
        </div>

        {/* Main Title */}
        <div className='text-center py-12 text-white'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-200 to-lime-200 bg-clip-text text-transparent'>
            Vibe Your Moment
          </h1>
          <h2 className='text-xl md:text-2xl text-gray-200'>
            Endless stream of personalized music tailored to any scenario
          </h2>
        </div>

        {/* Form Section */}
        <div className='flex flex-col items-center justify-center px-4'>
          <div className='w-full max-w-3xl bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-[0_0_50px_-12px_rgba(147,51,234,0.2)]'>
            <Form />
          </div>
          <p className='mt-6 text-gray-400'>This is the demo version of Melodio AI.</p>
          <button className='mt-4 border border-purple-400 bg-transparent text-white py-2 px-6 rounded-full hover:bg-purple-500/20 transition-colors'>
            Feedback
          </button>
        </div>

        {/* Hero Sections */}
        <div className="mt-20">
          <Hero1 />
          <Hero2 />
          <Hero3 />
          <Hero4 />
          <Hero5 />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;