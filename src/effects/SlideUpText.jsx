import { useInView,motion } from 'framer-motion'
import React, { useRef } from 'react'

function SlideUpText({children,text,once=true,margin='0px',fontSize,duration=0.50,delay=0.02,center=false,gap='10px',y="0%",className}) {
    const textRef3= useRef(null)
    const inView= useInView(textRef3,{once,margin})
  const slideUp = {
  initial: { y: 100 }, // px instead of "%"
  enter: (index) => ({
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delay: delay * index,
    },
  }),
  exit: { y: 100 },
};



  return (
    <p ref={textRef3} style={{gap}} className={` text-balance t-center flex-wrap m-0 flex ${center?'justify-center':''}  items-center gap-2`}>
        {text.split(" ").map((p,index)=>{
        return <span className={`${className} text-balance inline-flex overflow-hidden`} key={index} >
            <motion.span custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className='text-center'>{p}</motion.span >
        </span>
    })}
    </p>
  )
}

export default SlideUpText