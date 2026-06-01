import Link from 'next/link'
import React, { Children, useState } from 'react'
import { motion} from 'framer-motion'

function CustomBtn({children,href='#',icon,className=' capitalize '}) {
  const [isAktiv,setAktiv] =useState(false)
  return (

    
    <div onMouseEnter={()=>{setAktiv(true)}}
    onMouseLeave={()=>{setTimeout(() => {setAktiv(false)}, 200)}}
     className={`${className} font-body bg-brand-secondar  
     p-  h-[3em] w-[8em] relative overflow-hidden flex items-center justify-center`}>
    
   <motion.div transition={{duration:.3,ease:"easeOut"}} animate={{scale:isAktiv?0:1, y:isAktiv?[0,-20,50]:0}} className='rounded-full bg-brand-secondary text-brand-white h-full w-full flex items-center justify-center'>
    {children}
   </motion.div>
   <motion.div transition={{duration:.3,ease:"easeOut"}} animate={{scale:isAktiv?1:0, y:isAktiv?"0%":[0,-20,50]}} className='rounded-full bg-brand-accent text-brand-white h-full w-full flex items-center justify-center absolute '>
    {children}
   </motion.div>
       </div>
  )
}

export default CustomBtn