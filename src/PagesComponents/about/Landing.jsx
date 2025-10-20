import SlideUpText from '@/effects/SlideUpText'
import React, { useEffect, useRef } from 'react'

import { motion, useInView} from 'framer-motion'
import RubberSection from '@/components/RubberSection'
import SnapCarousel from '@/components/embla/EmblaCarousel';
import StaggerText from '@/effects/StaggerText'

function AboutLanding() {
  const texts=[
    {text:'Individual Coaching',
      url:'#',img:'/images/service01.png',y:-50,initialY:-30
    }, {text:'Group Coaching',
      url:'#',img:'/images/service02.png',y:-90,initialY:0
    }, {text:'Corporate Group Coaching',
      url:'#',img:'/images/service03.png',y:-180,initialY:30
    }, {text:'Individual Coaching',
      url:'#',img:'/images/service01.png',y:-50,initialY:-30
    }, 
  ]
  return (
    <div className='bgwhite w-full min-h-[60vh]'>
      <div className='container mx-auto '>

       <section className='flex flex-col justify-center items-center my-4 w-full h-full  gap-4'>
      <StaggerText initialColor={'#FFFFFF'} color={'#FFFFFF'} once={false} className=' text-brand-secondary items-center justify-center  text-heading2 font-custom  text-center max-w-[80vw] gap-[5px] leading-none' text={'recent work'.split('')}/>
       <div className='md:w-[58%] w-full'>
         <p 
         className='text-center text-white circular text-balance text-para  leading-para'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe laudantium atque quos nulla! Natus quasi repellendus fugit, laudantium quia earum laboriosam odio cumque neque sunt ipsa saepe quas cum!
            </p>  
          </div> 
      </section>
     <SnapCarousel/>

      <section className='hidden md:block my-10 w-full h-full  gap-6'>
      
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2  w-full">
  {/* Left side - stacked items */}
  {texts.map(({text,url,img,y,initialY},index)=>{

     return (
   <RubberSection defaultStart={["start 0.89", "0.7 start"]} defaultY={[initialY, y]} >
        <div className="cursor-pointer overflow-hidden relative w-full py-10 px-2 h-[350px] rounded-xl items-start justify-end flex gap-4 flex-col">
  {/* Background image */}
  <motion.img
    src={img}
    className="absolute inset-0 object-cover w-full h-full z-0"
  />

</div>
   </RubberSection>

    )
   
  })}
         
          
  </div>


      </section>
      
      </div>
    </div>
  )
}

export default AboutLanding