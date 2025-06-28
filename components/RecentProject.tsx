"use client"
import { projects } from '@/data'
import React, { useEffect, useState } from 'react'
import { LampContainer } from './ui/LampEffect'
import { PinContainer } from './ui/3d-pin'
import { MagicButton } from './ui/MagicButton'
import Image from 'next/image'

const RecentProject = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id='projects'>
      <div className='py-20 flex flex-col justify-center items-center'>
        <LampContainer>
          <h1 className='heading mb-4'>A small selection of {' '}
            <span className='text-lime-200'>Recent Projects</span>
          </h1>
         
          <a  href='https://github.com/VinaySurwase'>
          <MagicButton title='Github Profile' /></a>
          <div className='w-24 h-2 mt-5 rounded-lg bg-gradient-to-r from-slate-300 to-slate-500'></div>
        </LampContainer>
        <div className='flex flex-wrap items-center justify-center p-4 gap-y-28 gap-x-24 -mt-64'>
          {projects.length > 0 ? projects.map(({id, title, des, img, iconLists, link, color}) => (
            <div key={id} className='lg:min-h-[22.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[60vw]'>
              <PinContainer title={link} href={link} disableMainLink={true}>
                <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <Image fill src='/bg.png' alt='Background Image' />
                  </div>
                  <Image fill src={img} alt={title} className='z-10 absolute bottom-0 h-[210px]' />
                </div>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                <p className='lg:text-sm opacity-60 lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
              </PinContainer>
            </div>
          )) : (
            <p className='text-center text-gray-500'>No recent projects available.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default RecentProject

