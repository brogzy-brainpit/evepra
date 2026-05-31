import SlideUpText from '@/effects/SlideUpText'
import React from 'react'
import CustomBtn from './CustomBtn'
import CustomArrow from './CustomArrow'
import { Facebook, FacebookIcon, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideUpElement from '@/effects/SlideUpElement'
import Display from '@/typography/Display'
import StaggerTextHover from '@/effects/StaggerTextHover'

function footer() {
  const texts=[
    {text:'aircraft maintainanc',
      url:'#',background:'pink'
    }, {text:' maintainance & tracking',
      url:'#',background:'#059669'
    }, {text:'aircraft & tracking',
      url:'#',background:'orange'
    }
  ]
  return (
    <div className='bg-brand-secondary w-full relative py-4  flex gap-2 flex-col '>

      <section className=' relative mt-4 w-full h-full gap-6 container-section container mx-auto'>

  <div className="flex gap-2 breaker my-6 ">
  {/* Right side - single 50% item */}
  <div className="breaker-chil  px-4  items-start justify-end md:justify-start flex   w-[68%]  ">
         <SlideUpText duration={0.5} delay={0.04} className=' text-white font-custom font-bold text-[20px] md:text-[30px] leading-[40px] uppercase' text={'hello@reserve.com'}/>  
          </div>
            <div className="breaker-child px-4  items-start justify-end flex w-[68%]  ">
         <SlideUpText duration={0.5} delay={0.04} className=' text-white font-custom font-bold text-[20px] md:text-[30px] leading-[40px] uppercase' text={'+(234)9063260237'}/>  
          </div>
          
        

</div>

 <div className="  p-4 grid grid-cols-1 md:grid-cols-3 gap-2  w-full mdw-[50%]">
  {/* Left side - stacked items */}
       {/* <div className={`w-full  items-start gap-2 flex flex-col`}> */}
            <div className={`w-full  -4 rounded-2xl items-end md:items-start justify-between flex gap-[4px] flex-col`}>
         
         <p  className=' text-white font-body  text-para  leading-para'>general Streen 45-FB</p>
         <p  className=' text-white font-body  text-para  leading-para'>1017 MT Kaduna</p>
         <p  className=' text-white font-body  text-para  leading-para'>Nigeria</p>
          </div>

          <div className={`w-full  -4 rounded-2xl items-end md:items-center justify-between flex gap-[2px] flex-col  borde border-brand-accent`}>

         <p  className=' text-white circular font-bold text-para  leading-pa3a uppercase'> Let's talk</p>
         <p  className=' text-white font-body  text-para  leading-para'> email@domain.com</p>

          </div>
            <div className={`w-full items-end justify-between flex gap-[4px] flex-col`}>
         
         <p  className=' text-white circular font-bold  text-para  leading-p3ra uppercase'>Policies</p>
         <p  className=' text-white font-body  text-para  leading-para'>Privacy policy</p>
         <p  className=' text-white font-body  text-para  leading-para'>Terms and conditions
         </p>

          </div>
  
         
          
  </div>


<div className='flex flex-col justify-center relative h[200px] lg:h-[300px] overflow-x-clip'>
   <div className="relative h-ft w-full bgblack text-white p10" >
   <div className="relative h-ft w-full bgblack text-white p10 [clip-path:inset(0_0_25%_0)]" >
 <StaggerTextHover inView={true} className='w-full'/>
    </div>
    <div className='absolute top-0 bgpurple-400 w-full h-full'>

    <div className="absolute top-[10%] translate-y-[30%] translate-x-[30%] left-0 w-full h-full flex items-center justify-center">
<img src="/assets/bucket.svg" className='w-[10vw] lg:w-[6vw]' alt="Logo"/>
    </div>
    <div className="absolute top-[-70%] translate-y-[30%] translate-x-[-70%] left-[30%] w-full h-full flex items-center justify-center">
<img src="/assets/camera.svg" className='w-[10vw] lg:w-[8vw]' alt="Logo"/>
    </div>
     <div className="absolute top-[10%] translate-y-[20%] translate-x-[-40%] left-[20%] w-full h-full flex items-center justify-center">

<img src="/assets/time.svg" className='w-[10vw] lg:w-[6vw]' alt="Logo"/>
    </div>
     <div className="absolute top-0 translate-x-[20%] left-0 w-full h-full flex items-center justify-center">
<img src="/assets/eyes.svg" className='w-[10vw] lg:w-[8vw]' alt="Logo"/>
    </div>
    </div>
  </div>

  <div className=" absolut bottom-0 left-0 bgbrand-accent py-4 md:py-[30px] flex gap-2  w-full ">
  {/* Left side - stacked items */}
       <div className={`w-full  items-start gap-2 flex`}>
         
         <p  className=' text-white font-body  text-para  leading-para uppercase'>
          <img src='/assets/insta.svg' className='w-6 h-6 lg:w-8 lg:h-8 '/>
          </p>
           <p  className=' text-white font-body  text-para  leading-para uppercase'>
          <img src='/assets/tiktok.svg' className='w-6 h-6 lg:w-8 lg:h-8 '/>
          </p>
           <p  className=' text-white font-body  text-para  leading-para uppercase'>
          <img src='/assets/whatsapp.svg' className='w-6 h-6 lg:w-8 lg:h-8 '/>
          </p>
          </div>
            <div className={`w-full items-center justify-end flex`}>
         
         <p  className=' text-white font-custom  text-para  capitalize'>code by memet </p>

          </div>
  
         
          

</div>
</div>

   




 
      
      </section>
      </div>
  )
}

export default footer