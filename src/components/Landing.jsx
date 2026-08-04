import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {animate, motion, useInView} from 'framer-motion'
import GridColumn from '@/layout/GridColumn';
import ScaleUpContent from '@/effects/ScaleUpContent';
import Magnetic from '@/common/Magnetic';
import Heading1 from '@/typography/Heading1';
import Heading2 from '@/typography/Heading2';
import SlideUpElement from '@/effects/SlideUpElement';
import LandingEffect from '@/effects/LandingEffect';
import { useHeaderColor } from '@/providers/ColorProvider';
import Socials from './Socials';
import Section from '@/layout/Section';
import LandingVideo from './LandingVideo';

function Landing({preLoaderOut}) {
  const { setActiveSection } = useHeaderColor();
     const landing = useRef(null);
       const inView= useInView(landing)
      useEffect(()=>{
       // alert('good')
       if(!inView){
        return;
        //  setActiveSection('Section1')   
       }else{
         setActiveSection('landing')

       }
      },[inView])
  
 const parent={
  initial:{
    
  },
    animate:{
      transition:{
        delayChildren:0,
        staggerChildren:0.03
      }
  },
  exit:{
      transition:{
        delayChildren:0,
        staggerChildren:0.03
      }
  }

 }
 const child={
  initial:{
    scale:0,
    x:130,
    y:80,
  },
   exit:{
    scale:0,
    x:130,
    y:80,
  },
    animate:{
      scale:1,
       x:0,
    y:0,
      // transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
     transition: {
      // duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1],
      ease: [0.76, 0, 0.24, 1],
        type: "spring",
        stiffness:100,
        damping:13,
        // duration:0.4, // ignored for spring but could use if tween
      },
    }
  
 }
 const MotionHeading2= motion(Heading2)
  return (
    <div ref={landing} className='relative h-svh bg-red300 p-0 md:p-2 box-border'>
      <div className='overflow-hidden relative h-full rounded-none md:rounded-2xl [cursor:url("	https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68384fb09ef00eb464b45496_cursor-text.svg")_9_19,text]'>
{/* <div className={'bg-red-500 h-full grid grid-cols-6 lg:grid-cols-12 gap-[1.25rem] lg:gap-[2.5rem]'}> */}
  <GridColumn className={'bg-black h-full'}>
      {/* <iframe
        className="z-[2] absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[100vh] -translate-x-1/2 -translate-y-1/2"
        src="https://player.vimeo.com/video/1038524436?api=1&background=1&autoplay=1&loop=1&muted=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe> */}
      
          <LandingVideo poster={"/images/hero.png"} preLoaderOut={preLoaderOut} link="/videos/exoticcar.mp4"/>
<div className=' lg:col-start-3 z-10 col-span-full lg:col-span-8 relative h-full w-full flex items-end justify-center pb-[4em] bgslate-500'>
  <motion.h2 className='text-white text-cursor max-w-[10em] break-word text-heading2 leading-[1] tracking-[-0.03em] capitalize owercase text-center justify-center font-custom font-black ' initial='initial' exit='exit' animate={preLoaderOut?'animate':'initial'} variants={parent} >
 
    <motion.span variants={child} className='text-cursor mr-[0.2em] inline-block'>we</motion.span>
    <motion.span variants={child} className='relative mr-[0.2em] inline-block'>
      <div className='cursor-pointer absolute top-0 translate-y-[-45%] translate-x-[45%]'>
<Magnetic >
        <img initial={{x:80,scale:0}} animate={{x:0,scale:1}} transition={{duration:0.6,ease:'easeOut'}}   src='/assets/bucket.svg' className='w-[40px] h-[40px] lg:size-[1.4em]'/>
</Magnetic>
      </div>

      bring</motion.span>
    
    <motion.span variants={child} className='mr-[0.2em] relative inline-block font-custom2 font-normal leading-[0.5] italic text-regular loratest'>
        <div className='cursor-pointer absolute top-0 left-0 translate-y-[-65%] translate-x-[105%]'>
<Magnetic >

        <img initial={{x:80,scale:0}} animate={{x:0,scale:1}} transition={{duration:0.6,ease:'easeOut'}}   src='/assets/camera.svg' className='w-[40px] h-[40px] lg:size-[1.2em]'/>
</Magnetic>
      </div>
      showroom</motion.span>
    <motion.span variants={child} className='mr-[0.2em] inline-block'>quality</motion.span>
    <motion.span variants={child} className='mr-[0.2em] inline-block'>to </motion.span>
    <motion.span variants={child} className='mr-[0.2em] inline-block'>daily</motion.span>
     <motion.span variants={child} className=' relative mr-[0.2em] inline-block'>
      <div className='w-full absolute top-0 left-0 translate-x-[0%]'>
        {/* <img src='/truus/circle.svg' className='!w-[150%]'/> */}
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="105%" viewBox="0 0 608 100" fill="none">
        <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.6,ease:'easeOut'}} d="M322.902 98.9997C232.515 99.0422 140.637 94.7899 58.0275 80.853C31.532 76.3775 2.92086 69.1167 1.08733 58.1139C-0.222339 50.1514 13.3981 42.965 28.5701 37.4583C61.2714 25.5944 103.362 18.1423 146.239 12.7206C228.606 2.3131 316.878 -1.23755 403.155 2.36627C456.307 4.58809 509.519 9.62707 555.338 20.109C581.41 26.0728 606.777 35.279 606.999 46.8453C607.12 53.7659 597.831 60.3569 584.835 65.1939C571.839 70.0309 555.398 73.3158 538.675 76.0266C463.097 88.252 379.057 89.8891 297.011 91.3668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></motion.path></motion.svg>
        {/* stroke-dashoffset: 0; stroke-dasharray: 1277.72px, 0.1px; */}
      </div>
      driving</motion.span>
   
{/* <TitleLineSvg/> */}

  </motion.h2>
</div>
   <div className='absolute z-header bottom-[1em]  left-0 h-ful w-full inset-'>
      <Section padding={false} className={'flex lg:justify-start justify-center items-center  px-5 w-fi'}>
      <Socials/>
      </Section>
      </div>
  </GridColumn>

{/* </div> */}
      </div>
      
      
      </div>
  )
}

const TitleLineSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    viewBox="0 0 608 100"
    fill="none"
    className="home-header__title-line-svg"
  >
    <path
      d="M322.902 98.9997C232.515 99.0422 140.637 94.7899 58.0275 80.853C31.532 76.3775 2.92086 69.1167 1.08733 58.1139C-0.222339 50.1514 13.3981 42.965 28.5701 37.4583C61.2714 25.5944 103.362 18.1423 146.239 12.7206C228.606 2.3131 316.878 -1.23755 403.155 2.36627C456.307 4.58809 509.519 9.62707 555.338 20.109C581.41 26.0728 606.777 35.279 606.999 46.8453C607.12 53.7659 597.831 60.3569 584.835 65.1939C571.839 70.0309 555.398 73.3158 538.675 76.0266C463.097 88.252 379.057 89.8891 297.011 91.3668"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDashoffset: 0,
        strokeDasharray: '1277.72px, 0.1px',
      }}
    />
  </svg>
);
export default Landing




