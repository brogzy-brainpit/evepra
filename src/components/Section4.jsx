import React from 'react'
import { motion, useTransform, useScroll, useSpring, useInView} from "framer-motion";
import GridColumn from '@/layout/GridColumn';
import Section from '@/layout/Section';
import { Rotate3D } from 'lucide-react';
import Anime from './Anime';

function Section4(){
  return (
    <div className="max-h-screen h-screen  bg-purple-400">
    <Section className={'h-full'}>
<GridColumn className={'h-full'}>
  <div className=' py-20 col-span-6 bg-pink-400 h-[50%] lg:h-full relative'>
    <img src='/truus/butterfly.svg'  className='z-[2] w-[60%] absolute top-0  translate-y-[20%]'/>
 <h2 className=' relative z-[3] mb-40 text-neutral-900 break-words text-[3em]  lg:text-[5em] leading-[0.95] tracking-[-0.03em] lowercase text-center justify-center font-custom font-black flex flex-wrap'>
      
   
    <span className='mr-[0.3em]'>proud</span>
    <span className='mr-[0.3em]'>to</span>
    <span className='mr-[0.3em]'>have</span>
    <span className='mr-[0.3em]'>worked</span>
     <span className=' relative mr-[0.3em]  font-custom2 font-normal italic text-regular'>
      <div className='w-full absolute bottom-0 left-0 translate-y-[100%] translate-x-[0%] mr-[0.3em] inline-block'>
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 169 10" fill="none" class="draw-btn__svg"><motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:0.6,ease:'easeOut'}} d="M1 6.5661C56.3941 3.06082 112.187 1.20095 168 0.999878" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" style=""></motion.path>
        <motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:0.6,ease:'easeOut',delay:0.6}} d="M32.1313 8.63371C68.2147 6.92799 104.462 6.13378 140.695 6.25107" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" style=""></motion.path></motion.svg>
      </div>
      with</span>
   
{/* <TitleLineSvg/> */}

  </h2>

 <span  className='flex  mr-[0.3em] relative inlineblock'>
   <div   className='lg:scale-x-[-1] cursor-pointer absolute top-0 translate-y-[-5%] translate-x-[89%]'>
     <motion.svg style={{rotate:150,}} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 386 127" fill="none"><motion.path whileInView={{pathLength:1}} initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path><motion.path 
     whileInView={{pathLength:1}}  initial={{pathLength:0}} transition={{type:'spring',stiffness:120,mass:0.3,damping:30,duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path></motion.svg>
</div>
</span>

  </div>
  <div className=' overflow-hidden col-span-6 h-[50%] lg:h-full bg-slate-400 max-h-full relative'>
    <Anime/>
  </div>
</GridColumn>

    </Section>



    </div>
  )
}

export default Section4

