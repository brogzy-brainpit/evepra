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
<div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-purple-500 z-10">
      <div className="flex items-center bg-purple-500 justify-center">
           <TextLanding preLoaderOut={preLoaderOut}/>
      </div>
      <img src='/assets/brand/01.jpg' className='absolute bottom-0 '/>

</div>
    </div>
  )
}

export default about