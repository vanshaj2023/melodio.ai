import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';
import icon from '../public/icon.png';

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Generate random heights for waveform bars
  const waveformBars = Array.from({ length: 50 }, () => 
    Math.random() * 100
  );

  return (
    <div className="w-full max-w-3xl bg-slate-900 rounded-lg p-2 h-10 flex items-center gap-4">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors"
      >
        {isPlaying ? (
          <Pause size={20} className="text-white ml-1" />
        ) : (
          <Play size={20} className="text-white ml-1" />
        )}
      </button>
      
      <div className="flex-1 h-8 flex items-center gap-0.5">
        {waveformBars.map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-slate-700 rounded-sm hover:bg-slate-500 transition-all duration-350"
            style={{
              height: `${height}%`,
              minWidth: '3px',
              maxWidth: '6px'
            }}
          />
        ))}
      </div>
      <Image src={icon} alt='icon' className='w-9 h-9' />
    </div>
  );
};

export default Audio;
