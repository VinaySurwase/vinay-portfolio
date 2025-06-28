import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 nm-[100px]' id='contact'>
       
       <div className='flex flex-col items-center '>
        <h1 className='heading lg:max-w-[45vw]'>Want to work <span className='text-red-400'>together </span> ?</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center '> Reach out to me today ? Lets discuss how we can make some cool projects </p>
        <a href='mailto:vinaydsurwase@gmail.com'> 
            <MagicButton title='Lets get in touch ' icon={<FaLocationArrow/> } position='right'/>
        </a>
       </div>
       <div className='flex mt-16 md:flex-row flex-col justify-between items-enter'>
        <p className='md:text-base text-sm md:font-normal font-extralight'>Copyright © 2025 Vinay Surwase</p>
        <div className='flex items-center md:gap-3 gap-6 '>{socialMedia.map((profile) =>(
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mb-8'>
               <a href={profile.navigate}> <Image  src={profile.img} alt={String(profile.id)} width='40' height='40'/></a>

            </div>
        ))}</div>
       </div>
       </footer>
  )
}

export default Footer