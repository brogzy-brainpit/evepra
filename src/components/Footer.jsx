import SlideUpText from '@/effects/SlideUpText'
import React from 'react'
import CustomArrow from './CustomArrow'
import { Facebook, FacebookIcon, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideUpElement from '@/effects/SlideUpElement'
import Display from '@/typography/Display'
import StaggerTextHover from '@/effects/StaggerTextHover'
import Magnetic from '@/common/Magnetic'
import Socials from './Socials'
import Link from 'next/link'
import ScaleUpContent from '@/effects/ScaleUpContent'
import CTA from './CTA'
import Section from '@/layout/Section'

function Footer() {

  return (
    <div className='bg-brand-secondary w-full min-h-vh h-[90svh] md:h-svh lg:h-svh relative'>

      <Section padding={false} className=' px-5 relative w-full flex flex-col justify-between h-full gontainer-section containe m-auto'>
<div className="flex flex-col">
{/* phone and email */}
  <div className="flex gap-2 breaker my-6 ">
  {/* Right side - single 50% item */}
  <div className=" breaker-chil   lg:items-start lg:justify-start md:justify-start flex   w-[68%]  ">
         <h3 duration={0.5} delay={0.04} className=' text-brand-white links-cursor font-custom font-bold text-heading3 ' >
          <CTA className='text-para leading-[.8]' href="https://instagram.com/memet_lab">hello@reserve.com</CTA>
          {/* hello@reserve.com */}
          </h3>  
          </div>
            <div className=" breaker-child  lg:items-start lg:justify-end flex w-[68%]  ">
         <h3 duration={0.5} delay={0.04} className='links-cursor text-brand-white  font-custom font-bold text-heading3 '>
          <CTA className='text-para leading-[.8]' href='tel:+971 50 123 4567'>+(234)9063260237</CTA>

          </h3>  
          </div>
          
        

</div>

 <div className=" mb-6 grid grid-cols-1 md:grid-cols-3 gap-2  w-full mdw-[50%]">

            <div className={`w-full my-4 items-end md:items-start justify-between flex gap-[4px] flex-col`}>
         <p  className=' text-brand-white font-custom2 font-normal italic links-cursor circular text-para  leading-pa3a uppercase'> Address</p>
         <p  className=' text-brand-white links-cursor font-body  text-para  leading-para'>general Streen 45-FB</p>
         <p  className=' text-brand-white links-cursor font-body  text-para  leading-para'>1017 MT Kaduna</p>
         <p  className=' text-brand-white links-cursor font-body  text-para  leading-para'>Nigeria</p>
          </div>

          <div className={`w-full my-4 items-start md:items-center justify-between flex gap-[2px] flex-col  borde border-brand-accent`}>
         <p  className=' text-brand-white font-custom2 font-normal italic links-cursor circular text-para  leading-pa3a uppercase'> Let's talk</p>
         <p  className=' text-brand-white links-cursor font-body  text-para  leading-para'> email@domain.com</p>
          </div>

            <div className={`w-full my-4 items-end justify-between flex gap-[4px] flex-col`}>
         <p  className=' text-brand-white font-custom2 font-normal italic links-cursor circular  text-para  leading-p3ra uppercase'>Policies</p>
         <p  className=' text-brand-white links-cursor font-body  text-para  leading-para'>Privacy policy</p>
         <p  className=' text-brand-white links-cursor font-body  text-para  leading-para'>Terms and conditions
         </p>

          </div>
  </div>

</div>
  {/* down */}
<div className="flex flex-col">
  {/* the brand name and its icons */}
   <div className="relative overflow-x-clip h-ft w-full bgblack text-brand-white links-cursor p10" >
   <div className="relative h-ft w-full bgblack text-brand-white links-cursor p10 [clip-path:inset(0_0_25%_0)]" >
 <StaggerTextHover  inView={true} className='w-full'/>
    </div>
    <div className='absolute OVERFLCL top-0 bgpurple-400 w-full h-full'>

    <div className="absolute top-[10%] translate-y-[30%] translate-x-[30%] left-0 w-full h-full flex items-center justify-center">
<ScaleUpContent once={false} stiffness={180} damping={10} margin='0px'  >
<img src="/assets/bucket.svg" className='w-[10vw] lg:w-[10vw]' alt="Logo"/>
</ScaleUpContent>
    </div>
    <div className="absolute top-[-70%] translate-y-[30%] translate-x-[-70%] left-[30%] w-full h-full flex items-center justify-center">
<ScaleUpContent once={false} stiffness={180} damping={10} margin='0px' delay={.2}  >
<img src="/assets/camera.svg" className='w-[10vw] lg:w-[10vw]' alt="Logo"/>
</ScaleUpContent>
    </div>
     <div className="absolute top-[10%] translate-y-[20%] translate-x-[-40%] left-[20%] w-full h-full flex items-center justify-center">
<ScaleUpContent once={false} stiffness={180} damping={10} margin='0px' delay={.3}  >
<img src="/assets/time.svg" className='w-[10vw] lg:w-[10vw]' alt="Logo"/>
</ScaleUpContent>
    </div>
     <div className="absolute top-[10%] translate-y-[20%] translate-x-[-20%] left-[20%] w-full h-full flex items-center justify-center">
<ScaleUpContent once={false} stiffness={180} damping={10} margin='0px' delay={.5}  >
<img src="/assets/smile.svg" className='w-[10vw] lg:w-[10vw]' alt="Logo"/>
</ScaleUpContent>
    </div>
     <div className="absolute top-0 translate-x-[20%] left-0 w-full h-full flex items-center justify-center">
<ScaleUpContent once={false} stiffness={180} damping={10} margin='0px' delay={.4}  >
<img src="/assets/eyes.svg" className='w-[10vw] lg:w-[10vw]' alt="Logo"/>
</ScaleUpContent>
    </div>
    </div>
  </div>
  {/* the socials and bymemet */}
  <div className="relative py-4 md:py-[30px] flex gap-2  w-full ">
  {/* Left side - stacked items */}
      <Socials/>
            <div className={`w-full items-center justify-end flex`}>
         
         <p  className=' text-brand-white links-cursor font-custom  text-para  capitalize'><CTA className='text-para' href="https://instagram.com/memet_lab">code by Memet</CTA></p>

          </div>
</div>
  
</div>

      </Section>
      </div>
  )
}

export default Footer