import React from 'react'
import {BentoGrid, BentoGridItem} from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
      <h1 className=' mt-20 mb-5 text-6xl ml-5 font-bold'> #<span className='text-rose-300'>About </span>me </h1>
       <BentoGrid>
        {gridItems.map(({id,title,description,className,img,imgClassName,spareImg,titleClassName}) => (
            <BentoGridItem 
            id={id} 
            key={id}
            title={title}
            description={description}
            className={className}
            img = {img}
            imgClassName={imgClassName}
            spareImg={spareImg}
            titleClassName={titleClassName}
            
            />


        ))}
       </BentoGrid>
    </section>
  )
}

export default Grid