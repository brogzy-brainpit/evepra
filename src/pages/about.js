import TextLanding from '@/effects/TextLanding'
import React, { useEffect, useState } from 'react'

function about() {
     const [preLoaderOut,setPreLoaderOut]=useState(false)
  
    useEffect(()=>{
  
     const timer=  setTimeout(() => {
      setPreLoaderOut(true)
      document.body.style.cursor="default"
      window.scrollTo({top:0})
      }, 2600);
      return ()=>clearTimeout(timer)
    },[])
  return (
       <div className='min-h-svh bg-brand-white relative flex items-center justify-center'>
<div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen  z-10">
      <div className="flex items-center  justify-center">
           <TextLanding preLoaderOut={preLoaderOut}/>
      </div>
      <img src='/assets/brand/03.jpg' className='absolute -rotate-12 top-0 object-cover right-[4%] translate-x-[-30%] h-[24em] aspect-[5/7]'/>
      <img src='/assets/brand/01.jpg' className='absolute -rotate-12 bottom-0 object-cover left-[10%] translate-x-[-50%] h-[24em] aspect-[5/7]'/>

</div>
    </div>
  )
}

export default about