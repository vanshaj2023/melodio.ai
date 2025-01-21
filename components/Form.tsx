import React from 'react'
import Music from './Music'

const Form: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='text-center max-w-2xl h-80 overflow-y-scroll scrollbar-hide'>
        <p className='text-lg leading-relaxed'>
          Hey there, music lover, have you heard the news?<br />
          Melodio&apos;s here with tunes that&apos;ll light your fuse.<br />
          With AI magic, we create your sound,<br />
          Unlimited music, wherever you&apos;re bound.
          <br /><br />
          Oh, Melodio, we&apos;re here to redefine,<br />
          Your music world, every beat, every rhyme.<br />
          From gaming to workouts, or chillin&apos; out at night,<br />
          We got your tracks, everything feels just right.
          <br /><br />
          Relax, focus, or get in the zone,<br />
          Melodio&apos;s tunes are yours alone.<br />
          We&apos;ve just launched, come join the fun,<br />
          Hop on our waitlist, let&apos;s get this done!
          <br /><br />
          Oh, Melodio, we&apos;re here to redefine,<br />
          Your music world, every beat, every rhyme.<br />
          From gaming to workouts, or chillin&apos; out at night,<br />
          We got your tracks, everything feels just right.
          <br /><br />
          Oh, Melodio, we&apos;re here to redefine,<br />
          Your music world, every beat, every rhyme.<br />
          From gaming to workouts, or chillin&apos; out at night,<br />
          We got your tracks, everything feels just right.
          <br /><br />
          So come on, join us, don&apos;t hesitate,<br />
          With Melodio, the music&apos;s great.<br />
          AI-powered, just for you,<br />
          Let&apos;s create some magic, see what we can do!
        </p>
      </div>
      <Music />
    </div>
  )
}

export default Form
