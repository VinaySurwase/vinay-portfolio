import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Image from 'next/image'

const Experience = () => {
  const durations = [12000, 15000, 18000, 20000]; // Predefined durations

  return (
    <div className='py-20' id='experience'>
        <h1 className='heading'>My work <span className='text-teal-500'>Experience</span></h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10' >
          {workExperience.map((card, index)=>(
            <Button duration={durations[index % durations.length]} key={card.id} className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <Image src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16 rounded-full' width={40} height={40} />
              </div>
              <div className='lg:ms-5 '>
                <h1 className='text-start text-xl md:text-2xl font-bold' dangerouslySetInnerHTML= {{__html:card.title}}>
                 
                </h1>
                <p className='text-start text-white-100 mt-3 font-semibold'>
                  {card.desc}
                </p>

              </div>

            </Button>

          ))}

        </div>
    </div>
  )
}

export default Experience