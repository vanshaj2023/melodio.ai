import React from 'react'
import { Mail, Twitter, Youtube, Disc } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#0F0216] text-white py-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          {/* Contact us section */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold'>Contact us</h3>
            <p className='mt-2'>
              <Mail className='inline-block mr-2' /> play@melodio.ai
            </p>
          </div>

          {/* Social contact section */}
          <div className='text-center'>
            <h3 className='text-lg font-semibold'>Social contact</h3>
            <div className='flex justify-center mt-2 space-x-4'>
              <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
                <Disc className='w-6 h-6' />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Twitter className='w-6 h-6' />
              </a>
              <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
                <Youtube className='w-6 h-6' />
              </a>
            </div>
          </div>

          {/* Terms section */}
          <div className='text-center md:text-right'>
            <h3 className='text-lg font-semibold'>Terms</h3>
            <div className='mt-2'>
              <a href='/terms-of-service' className='block'>
                Terms of service
              </a>
              <a href='/privacy-policy' className='block mt-1'>
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
