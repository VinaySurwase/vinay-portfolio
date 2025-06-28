"use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

import {MagicButton} from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import {FlipWords} from './ui/FlipWords'
import Image from 'next/image'


const Hero = () => {
  return (
   
    <div className='pb-20 pt-36 flex items-center justify-center relative min-h-screen'>
      
      <Spotlight className='-top-20 -left-10 md:-left-32 md:-top-20 h-screen' fill='yellow'/>
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='cyan'/>
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='purple'/>
     
      {/* Profile Image - Better positioned */}
      <div className="absolute left-4 lg:left-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Image
          src="/Vinay-Profile-2.jpeg"
          alt="Vinay Surwase profile picture"
          width={350}
          height={350}
          className="rounded-full border-4 border-amber-100 shadow-2xl object-cover"
        />
      </div>

      {/* Main Content */}
      <div className='flex flex-col items-center justify-center z-10 w-full max-w-4xl px-4 lg:ml-96'>
        <TextGenerateEffect 
          words={`Hello I am`} 
          className='text-center text-[40px] md:text-5xl lg:text-6xl mb-4'
        />
         
        <FlipWords 
          words={['Vinay Surwase', 'A Student', 'A Developer', 'A Coder']} 
          duration={2000}  
          className='text-center text-[40px] md:text-5xl lg:text-6xl mb-6 text-blue-400 font-extrabold'
        />
        
        <p className='text-center md:tracking-widest mb-8 text-sm md:text-lg lg:text-xl max-w-2xl'>
          Currently Studying at IIITDM JABALPUR
        </p>

        <a href='https://github.com/VinaySurwase' className="mb-8">
          <MagicButton title='See my work' icon={<FaLocationArrow/>} position='right'/>
        </a>

        {/* Decorative element */}
        <div className='bg-gradient-to-r from-orange-400 to-orange-600 w-72 h-2 rounded-lg shadow-lg'></div>
      </div>
    </div>
  )
}

export default Hero
