import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import GridColumn from '@/layout/GridColumn';
import ScaleUpContent from '@/effects/ScaleUpContent';
import Magnetic from '@/common/Magnetic';
import Heading1 from '@/typography/Heading1';
import Heading2 from '@/typography/Heading2';

function Landing({preLoaderOut}) {
  return (
    <div className='relative h-svh bg-red300 p-4 box-border'>
      <div className='bg-purple-500 overflow-hidden relative h-full rounded-3xl [cursor:url("	https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68384fb09ef00eb464b45496_cursor-text.svg")_9_19,text]'>
{/* <div className={'bg-red-500 h-full grid grid-cols-6 lg:grid-cols-12 gap-[1.25rem] lg:gap-[2.5rem]'}> */}
  <GridColumn className={'bg-red-500 h-full'}>

      <div className='z-[2] absolute top-0 left-0 bg-black/80 h-full w-full inset-0'/>
      <div className='z-[1] absolute top-0 left-0 h-full w-full inset-0'>
  <Image width={600} height={700}  className='z-0 h-full w-full object-cover' src={'/images/service01.png'}/>
      </div>

<div className=' lg:col-start-3 col-span-full lg:col-span-8 relative h-full w-full flex items-end justify-center pb-[4em] z-[2] bgslate-500'>
 {preLoaderOut && <Heading2>

    <span className='mr-[0.2em] inline-block'>we</span>
    <span className='relative mr-[0.2em] inline-block'>
      <div className='cursor-pointer absolute top-0 translate-y-[-45%] translate-x-[45%]'>
        <ScaleUpContent damping={5} >
<Magnetic >

        <img initial={{x:80,scale:0}} animate={{x:0,scale:1}} transition={{duration:0.6,ease:'easeOut'}}   src='/truus/smile.svg' className='w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]'/>
</Magnetic>
        </ScaleUpContent>
      </div>
      make</span>
    <span className='mr-[0.2em] inline-block font-custom2 font-normal leading-[0.5] italic text-regular loratest'>advertising</span>
    <span className='mr-[0.2em]'>for</span>
    <span className='mr-[0.2em]'>the</span>
    <span className='mr-[0.2em]'>new</span>
     <span className=' relative mr-[0.2em]'>
      <div className='w-full absolute top-0 left-0 translate-x-[0%]'>
        {/* <img src='/truus/circle.svg' className='!w-[150%]'/> */}
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="105%" viewBox="0 0 608 100" fill="none">
        <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.6,ease:'easeOut'}} d="M322.902 98.9997C232.515 99.0422 140.637 94.7899 58.0275 80.853C31.532 76.3775 2.92086 69.1167 1.08733 58.1139C-0.222339 50.1514 13.3981 42.965 28.5701 37.4583C61.2714 25.5944 103.362 18.1423 146.239 12.7206C228.606 2.3131 316.878 -1.23755 403.155 2.36627C456.307 4.58809 509.519 9.62707 555.338 20.109C581.41 26.0728 606.777 35.279 606.999 46.8453C607.12 53.7659 597.831 60.3569 584.835 65.1939C571.839 70.0309 555.398 73.3158 538.675 76.0266C463.097 88.252 379.057 89.8891 297.011 91.3668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></motion.path></motion.svg>
        {/* stroke-dashoffset: 0; stroke-dasharray: 1277.72px, 0.1px; */}
      </div>
      mainstream</span>
   
{/* <TitleLineSvg/> */}

  </Heading2>}
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

// curlyarrow

{/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 386 127" fill="none" class="horizontal-words__arrow-svg"><path d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="stroke-dashoffset: 0; stroke-dasharray: 737.765px, 25.0641px;"></path><path d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="stroke-dashoffset: 0; stroke-dasharray: 737.098px, 25.0416px;"></path></svg> */}


// arrow down 
//  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 140 127" fill="none" class="horizontal-words__arrow-end-svg">
//   <path d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.437 125.078L99.6875 107.891" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.438 125.078L137.969 110.234" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="stroke-dashoffset: 0; stroke-dasharray: 212.766px, 13.4808px;">
//   </path></svg>


