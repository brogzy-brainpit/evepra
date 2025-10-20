import React from 'react'
import { motion, useTransform, useScroll, useSpring, useInView} from "framer-motion";

function Section3() {
  const cards=[
    {title:'card 1',
      img:'/truus/camera.svg',
      background:'#10b981',
      color:"white",
      left:10,
      y:0,
      offers:['offer card 1', 'offer card 2','offer card 3','offer card 4','offer card 5',]
    },
    {title:'card 2',
      img:'/truus/phone.svg',
      background:'rgb(46, 109, 188)',
      color:"white",
      left:-10,
      y:30,

      offers:['offer card 1', 'offer card 2','offer card 3','offer card 4']
    },
    {title:'card 3',
      img:'/truus/love.svg',
      background:'#9333ea',
      color:"white",
      left:12,
      y:-10,
      offers:['offer card 1', 'offer card 2','offer card 3','offer card 4','offer card 5',]
    },
    {title:'card 4',
      background:'rgb(255, 196, 9)',
      color:"black",
      img:'/truus/hands.svg',
      y:0,
      left:-12,
      offers:['offer card 1', 'offer card 2','offer card 3',]
    },
    {title:'card 5',
      left:14,
      y:30,
      color:"white",
      img:'/truus/watch.svg',
      background:'#fa12bc',
      offers:['offer card 1', 'offer card 2','offer card 3','offer card 4',,]
    },
  ]
  return (
    <div className=' text-white min-h-screen flex items-center'>
      
      <section className='relative py-20 container mx-auto overflo-x-hidden bgpurple-400 '>
       <h2 className='mb-40 text-neutral-900 break-words text-[3em]  lg:text-[5em] leading-[0.95] tracking-[-0.03em] lowercase text-center justify-center font-custom font-black flex flex-wrap'>
      
   
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

  </h2>
       <div className=' flex bg-slate600 justify-center items-center lg:flex-row flex-col relative'>
         {cards.map((card,i)=>{
          return (
        <motion.div key={i} style={{rotate:card.left,backgroundColor:card.background,y:card.y}} className={` ${ i!==0?'lg:-ml-12':''} sticky top-[20%]  shadow-lg flex flex-col justify-center   text-white w-[240px] h-[300px] lg:w-[280px] lg:h-[420px] px-4 py-5 rounded-xl`}>
          <img src={card.img} className='w-[90px] lg:w-[130px] absolute top-0 right-0 -translate-x-[20%] -translate-y-1/2'/>
          {/* headers */}
          <div className='w-full flex flex-col gap-4 '>
            <h2 style={{color:card.color}} className='font-custom text-4xl font-bold tracking-tight'>card heading</h2>
            {/* <img src='/truus/line.svg' className='w-full'/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 250 6"  class="services-card__line-svg">
            <path d="M2.0019 3.05432C84.0122 2.70675 166.022 2.34756 248.04 2C244.505 2.66037 240.969 3.32077 237.434 3.98115" stroke={card.color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"  fill={'black'} ></path></svg>
          </div>
          {/* bodi */}
          <ul className='mt-4 flex flex-col gap-2'>
            {card.offers.map((offer)=>{
             return  <li style={{color:card.color}} className='font-body  text-para flex items-center justify-start '>
              <span className='mr-2 w-5 h-5'>
               <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 113 113" fill="none" data-single-target="" class="home-header__star-svg"><path d="M56.4193 0.419312L60.3791 52.4595L112.419 56.4193L60.3791 60.3791L56.4193 112.419L52.4595 60.3791L0.419312 56.4193L52.4595 52.4595L56.4193 0.419312Z" fill={card.color}></path></svg>
                </span>{offer}</li>
            })}
          </ul>

        </motion.div>

          )
        })}
       </div>
        

      </section>
    </div>
  )
}

export default Section3

