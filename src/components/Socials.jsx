import Magnetic from '@/common/Magnetic'
import React from 'react'

function Socials() {
  return (
    <div className={`w  items-start gap-2 flex`}>
            
            <div  className=' text-white font-body  text-para  leading-para uppercase'>
               <Magnetic>
               <img src='/assets/insta.svg' className='links-cursor w-6 h-6 lg:w-8 lg:h-8 '/>
               </Magnetic>
             </div>
              <div  className=' text-white font-body  text-para  leading-para uppercase'>
                <Magnetic>
             <img src='/assets/tiktok.svg' className='links-cursor w-6 h-6 lg:w-8 lg:h-8 '/>
                </Magnetic>
             </div>
              <div className=' text-white font-body  text-para  leading-para uppercase'>
               <Magnetic>
             <img src='/assets/whatsapp.svg' className='links-cursor w-6 h-6 lg:w-8 lg:h-8 '/>
                </Magnetic>
             </div>
             </div>
  )
}

export default Socials