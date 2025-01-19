import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

const TextPrompt = () => {
  const [text, setText] = useState('');
  
  const handleSubmit = () => {
    console.log('Generating vibe for:', text);
  };

  return (
    <div className="relative w-full max-w-3xl min-h-[200px] rounded-xl bg-slate-800/80 backdrop-blur-sm p-6 overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Feeling intrigued while exploring a new city"
          className="w-full bg-transparent text-gray-200 text-lg placeholder:text-gray-400 focus:outline-none resize-none"
          rows={3}
        />
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-400 text-sm">
            {text.length}/500
          </span>
          
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2 bg-lime-300 text-slate-900 rounded-full font-medium hover:bg-lime-200 transition-colors"
          >
            <Wand2 size={18} />
            Let's vibe
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextPrompt;