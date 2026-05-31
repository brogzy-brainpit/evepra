import React, { useEffect, useRef } from 'react'
import { motion, useTransform, useScroll, useSpring, useInView} from "framer-motion";
import GridColumn from '@/layout/GridColumn';
import Section from '@/layout/Section';
import { Rotate3D } from 'lucide-react';
import Marquee from './Marquee';
import MarqueeX from './MarqueeX';
import Heading2 from '@/typography/Heading2';
import { useHeaderColor } from '@/providers/ColorProvider';

function Section4(){
  return (
    <div   className="min-h-screen h-screen w-full bgpurple-400">
    <Section container={false} padding={false} className={'h-full w-full  pt-10 pb-5 lg:py-10'}>
<GridColumn className={'h-full w-full bgpink-900'}>
  <div className='p-5 py-20 lg:col-span-7 col-span-full bgpink-400  relative'>
    <img src='/truus/butterfly.svg'  className='z-[2] w-[50%] absolute top-0  translate-x-[20%] translate-y-[20%]'/>
 <Heading2 className=' relative z-[3] lg:max-w-[80%] bgred-400 !justify-start !text-left !text-neutral-900 text-[3em]  lg:text-[5em] leading-[0.95] tracking-[-0.03em] lowercase font-custom font-black'>
    <span className='mr-[0.3em]'>proud</span>
    <span className='mr-[0.3em]'>to</span>
    <span className='mr-[0.3em]'>have</span>
    <span className='mr-[0.3em]'>worked</span>
     <span className=' relative mr-[0.3em]  font-custom2 font-normal italic text-regular'>
      <div className='w-full absolute bottom-0 left-0 translate-y-[100%] translate-x-[0%] mr-[0.3em] inline-block'>
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 169 10" fill="none" class="draw-btn__svg"><motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:0.6,ease:'easeOut'}} d="M1 6.5661C56.3941 3.06082 112.187 1.20095 168 0.999878" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" style=""></motion.path>
        <motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:0.6,ease:'easeOut',delay:0.6}} d="M32.1313 8.63371C68.2147 6.92799 104.462 6.13378 140.695 6.25107" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" style=""></motion.path></motion.svg>
      </div>
      on</span>
   
{/* <TitleLineSvg/> */}

  </Heading2>

  
 <span  className=' hidden lg:block z-[1] w-[50%] absolute bottom-0   translate-x-[60%] translate-y-[-20%]'>
   <div   className='lg:scale-x-[-1]'>
     <motion.svg style={{rotate:170,}} xmlns="http://www.w3.org/2000/svg" width="300px" viewBox="0 0 386 127" fill="none"><motion.path whileInView={{pathLength:1}} initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path><motion.path 
     whileInView={{pathLength:1}}  initial={{pathLength:0}} transition={{type:'spring',stiffness:120,mass:0.3,damping:30,duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path></motion.svg>

</div>
</span>

  </div>

  <div className=' bg-red-6 col-span-full lg:col-span-5 bgslate-400 max-hfull w-full relative'>
   <div className='mask-gradient overflow-hidden w-full h-full hidden lg:flex justify-center gap-4 '>
   <Marquee direction='down' items={[
   { type: "image", src: "/assets/carslogo/bmw.svg",bg:'orange' },
   { type: "image", src: "/assets/carslogo/mercedez.svg",bg:'#F4683B' },
   { type: "image", src: "/assets/carslogo/aston.svg",bg:'#82A0FF' },
 ]} />
 <Marquee direction='up' items={[
     { type: "image", src: "/assets/carslogo/ferrari.svg",bg:'#4968EF' },
    { type: "image", src: "/assets/carslogo/tesla.svg",bg:'grey' },
    { type: "image", src: "/assets/carslogo/jeep.svg",bg:'#A33D62' },
 ]} />
   </div>

   <div className='mask-gradient overflow-hidden w-full h-ful lg:hidden flex justify-between flex-col gap-4 '>
    <MarqueeX direction='left' items={[
   { type: "image", src: "/assets/carslogo/ferrari.svg",bg:'#4968EF' },
    { type: "image", src: "/assets/carslogo/tesla.svg",bg:'grey' },
    { type: "image", src: "/assets/carslogo/jeep.svg",bg:'#A33D62' },
  ]} />
    <MarqueeX direction='right' items={[
    { type: "image", src: "/assets/carslogo/bmw.svg",bg:'orange' },
   { type: "image", src: "/assets/carslogo/mercedez.svg",bg:'#F4683B' },
   { type: "image", src: "/assets/carslogo/aston.svg",bg:'#82A0FF' },
  ]} />

   </div>
  </div>
</GridColumn>

    </Section>



    </div>
  )
}

export default Section4

