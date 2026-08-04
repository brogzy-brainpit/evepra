import React from 'react'
import { motion, useTransform, useScroll, useSpring, useInView} from "framer-motion";
import Heading2 from '@/typography/Heading2';
import InteractiveCard from './InteractiveCards';
import Heading3 from '@/typography/Heading3';
import CustomArrow from './CustomArrow';
import CustomBtn from './CustomBtn';
import Link from 'next/link';
import Image from 'next/image';
import CTA from './CTA';


function Section5
() {
 const cards = [
  {
    title: 'Ceramic Coating',
    img: '/assets/camera.svg',
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
    img: '/assets/smile.svg',
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
    img: '/assets/eyes.svg',
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
    img: '/assets/time.svg',
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
    img: '/assets/hands.svg',
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
    <div className=' bg-brand-white min-h-screen flex items-center overflow-clip'>
      
      <section className='relative py-20 container mx-auto overflo-x-hidden bgpurple-400 '>
       <Heading2 className='mb-32 !text-black font-custom'>
      
    <CTA  href='tel:+971 50 123 4567'
                 className="text-brand-black mt-[-.92em] text-para leading-[.8]"
               >
                 Call us
               </CTA>
    <span className='mr-[0.3em]'>if you need</span>
   
{/* <TitleLineSvg/> */}

  </Heading2>
       <div className=' flex bg-slate600 justify-center items-center lg:flex-row flex-col gap-[10em] lg:gap-0 relative'>
         {cards.map((card,i)=>{
          return (
       <InteractiveCard
  key={i}
  className={`${i !== 0 ? "lg:-ml-12" : ""} sticky top-[20%] shadow-lg flex flex-col justify-center text-white w-[80vw] h-[55vh] mdw-[260px] mdh-[360px] lg:w-[34em] lg:h-[28em] px-4 py-6 rounded-xl`}
  style={{
    rotate: card.left,
    backgroundColor: card.background,
    y: card.y,
  }}
>
  <Image
  width={500}
  height={500}
  src={card.img}

  className="w-[8em] md:w-[100px] lg:w-[130px] absolute top-0 right-0 -translate-x-[20%] -translate-y-1/2"
  />

  <div className="w-full flex flex-col gap-2">
    <Heading3 style={{ color: card.color }} className="!text-left w-[70%] font-custom ">
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
        
        className="font-body text-para text-brand-white flex items-center justify-start"
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
 <CTA  href={'/services'}
                 className="text-brand-black mt[2em] text-heading3 "
               >
                 other services
               </CTA>
{/* <CustomBtn>
  <Link scroll={false} href={'/services'} className='links-cursor flex items-center gap-2 '>
  other services
  </Link>
</CustomBtn> */}
       </div>
      </section>
    </div>
  )
}

export default Section5


