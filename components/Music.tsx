"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import play from '../public/play.png'
import pause from '../public/pause.png'
import Audio from './Audio'
import Textarea from './Textarea'

const Music: React.FC = () => {
    const [description, setDescription] = useState<string>('')
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const waveformRef = useRef<HTMLDivElement>(null)
    const waveSurfer = useRef<WaveSurfer | null>(null)

    useEffect(() => {
        if (waveformRef.current) {
            waveSurfer.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: '#D9DCFF',
                progressColor: '#4353FF',
                cursorColor: '#4353FF',
                barWidth: 3,
                barRadius: 3,
                height: 100,
            })

            waveSurfer.current.load('/audio.mp3')
        }

        return () => {
            if (waveSurfer.current) {
                waveSurfer.current.destroy()
            }
        }
    }, [])

    const handlePlayPause = () => {
        if (waveSurfer.current) {
            if (isPlaying) {
                waveSurfer.current.pause()
            } else {
                waveSurfer.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className='w-full max-w-xl bg-transparent text-white gap-2 rounded-lg shadow-lg'>
            <div className='flex items-center mb-6'>
                {/* <div ref={waveformRef} className='w-full h-16 border-2 rounded-md'></div> */}
                <Audio />
            </div>
            <div className='text-center '>
                <h3 className='text-xl font-semibold'>Describe the melody you need for your moment.</h3>
                {/* <textarea
                    className='w-full p-4 mt-4 bg-white text-black rounded-md'
                    placeholder='Feeling intrigued while exploring a new city.'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                /> */}
                <Textarea/>
            </div>
            {/* <div className='text-center'>
                <button className='bg-green-500 text-white py-2 px-6 rounded-full'>Let's vibe</button>
            </div> */}
        </div>
    )
}

export default Music
