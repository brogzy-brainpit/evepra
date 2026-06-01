import React from 'react'
import { motion, useTransform, useScroll, useSpring, useInView} from "framer-motion";
import Heading2 from '@/typography/Heading2';
import InteractiveCard from './InteractiveCards';
import Heading3 from '@/typography/Heading3';
import CustomArrow from './CustomArrow';
import CustomBtn from './CustomBtn';
import Link from 'next/link';


function Section5
() {
 const cards = [
  {
    title: 'Ceramic Coating',
    img: '/truus/camera.svg',
    background: '#10b981',
    color: 'white',
    left: 10,
    y: 0,
    offers: [
      'Long-lasting paint protection',
      'Hydrophobic water beading',
      'Enhanced gloss finish',
      'UV damage resistance',
    ],
  },
  {
    title: 'Paint Correction',
    img: '/truus/phone.svg',
    background: 'rgb(46, 109, 188)',
    color: 'white',
    left: -10,
    y: 30,
    offers: [
      'Swirl mark removal',
      'Light scratch reduction',
      'Restored paint clarity',
      'Mirror-like shine',
    ],
  },
  {
    title: 'Interior Detailing',
    img: '/truus/love.svg',
    background: '#9333ea',
    color: 'white',
    left: 12,
    y: -10,
    offers: [
      'Deep upholstery cleaning',
      'Dashboard surface restoration',
      'Odor elimination treatment',
      'Carpet stain removal',
      'Premium interior finish',
    ],
  },
  {
    title: 'Exterior Detailing',
    background: '#F4683B',
     color: 'white',
    img: '/truus/hands.svg',
    y: 0,
    left: -12,
    offers: [
      'Thorough hand wash',
      'Clay bar treatment',
      'Protective wax coating',
    ],
  },
  {
    title: 'Engine Bay Detailing',
    left: 14,
    y: 30,
    color: 'white',
    img: '/truus/watch.svg',
    background: '#fa12bc',
    offers: [
      'Safe engine cleaning',
      'Degreasing treatment applied',
      'Plastic trim dressing',
      'Fresh detailed appearance',
    ],
  },
];
  return (
    <div className=' text-white min-h-screen flex items-center overflow-clip'>
      
      <section className='relative py-20 container mx-auto overflo-x-hidden bgpurple-400 '>
       <Heading2 className='mb-32 !text-black font-custom'>
      
   
    <span className='mr-[0.3em]'>call</span>
    <span className='mr-[0.3em]'>us</span>
    <span className='mr-[0.3em]'>if</span>
    <span className='mr-[0.3em]'>you</span>
     <span className=' relative mr-[0.3em]  font-custom2 font-normal italic text-regular'>
      <div className='w-full absolute bottom-0 left-0 translate-y-[100%] translate-x-[0%] mr-[0.3em] inline-block'>
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 169 10" fill="none" class="draw-btn__svg"><motion.path d="M1 6.5661C56.3941 3.06082 112.187 1.20095 168 0.999878" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" style=""></motion.path>
        <motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:0.6,ease:'easeOut'}} d="M32.1313 8.63371C68.2147 6.92799 104.462 6.13378 140.695 6.25107" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" style=""></motion.path></motion.svg>
      </div>
      need:</span>
   
{/* <TitleLineSvg/> */}

  </Heading2>
       <div className=' flex bg-slate600 justify-center items-center lg:flex-row flex-col gap-[10em] lg:gap-0 relative'>
         {cards.map((card,i)=>{
          return (
       <InteractiveCard
  key={i}
  className={`${i !== 0 ? "lg:-ml-12" : ""} sticky top-[20%] shadow-lg flex flex-col justify-center text-white w-[13em] h-[17em] mdw-[260px] mdh-[360px] lg:w-[34em] lg:h-[28em] px-4 py-6 rounded-xl`}
  style={{
    rotate: card.left,
    backgroundColor: card.background,
    y: card.y,
  }}
>
  <img
    src={card.img}
    className="w-[60px] md:w-[100px] lg:w-[130px] absolute top-0 right-0 -translate-x-[20%] -translate-y-1/2"
  />

  <div className="w-full flex flex-col gap-2">
    <Heading3 style={{ color: card.color }} className="!text-left font-custom tracking-tight">
      {card.title}
    </Heading3>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 250 6">
      <path
        d="M2.0019 3.05432C84.0122 2.70675 166.022 2.34756 248.04 2C244.505 2.66037 240.969 3.32077 237.434 3.98115"
        stroke={card.color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="black"
      />
    </svg>
  </div>

  <ul className="mt-4 flex flex-col gap-2">
    {card.offers.map((offer, j) => (
      <li
        key={j}
        style={{ color: card.color }}
        className="font-body text-para flex items-center justify-start"
      >
        <span className="mr-2 w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 113 113" fill="none">
            <path
              d="M56.4193 0.419312L60.3791 52.4595L112.419 56.4193L60.3791 60.3791L56.4193 112.419L52.4595 60.3791L0.419312 56.4193L52.4595 52.4595L56.4193 0.419312Z"
              fill={card.color}
            />
          </svg>
        </span>
        {offer}
      </li>
    ))}
  </ul>
</InteractiveCard>


          )
        })}
       </div>

       <div className="flex my-[6em] items-center justify-center">

<CustomBtn>
  <Link href={'/services'} className='flex items-center gap-2 '>
  other services
  </Link>
</CustomBtn>
       </div>
      </section>
    </div>
  )
}

export default Section5


