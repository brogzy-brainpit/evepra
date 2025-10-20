"use client"
import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion'

const textOpacity={
    initial:{
       opacity: 0,
        
    }, 
    enter:{
        opacity:1,
     transition:{duration:0.3, delay:0.1},

    },
     exit:{
        opacity:0,
    },
}
const menuSlide={
    initial:{
       y: '0%',
        
    }, 
    enter:{
        y:'0%',
     transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
     exit:{
        y:'-100%',
        transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
}
function Preloader() {
    const [index,setIndex]=useState(0)
    const words=['hello','bonjour','مرحبًا','你好','नमस्ते', 'привет', 'welcome']
    // const positions= [{left:"54%",top:"60%"},{left:"60vw",top:"-5vh"}, {left:"4%",top:"5%"},{left:"90%",top:"50%"},{left:"90%",top:"3%"},{left:"40%",top:"80%"},{left:"60%",top:"5vh"},]
        // const images=[floating1,floating2,floating3,floating4,floating5,floating6,floating7,]
    useEffect(()=>{
        if(index==words.length-1) return 
        console.log("running")
        setTimeout(() => {
            setIndex(index+1)
        }, index==0?1400:170);
    },[index])
  return (
    <motion.div variants={menuSlide} initial="initial" exit="exit" className=' z-preloader  fixed  flex flex-col items-center justify-center w-screen top-0 left-0 h-screen bg-black'> 
   <div className='h-full w-full relative flex items-center justify-center flex-col'>
   <motion.p className='text-[8vw] text-white capitalize  z-30 font-custom2' variants={textOpacity} animate="enter" initial="initial" exit="exit">
    {words[index]}
    </motion.p>

    {/* <motion.div style={{left:positions[index].left,top:positions[index].top}} className='absolute'>
    <Image className='w-[200px] z-20' src={images[index]}/>
    </motion.div> */}
   </div>
 {/* <div className=' w-full  h-[14px] mt-[10vh] relative  '>
<div style={{borderRadius:"0% 0% 50% 50%"}} className='absolute top-0 left-[-0%] w-[110%] h-[1200%] bg-slate-400  '>f</div>
 f
 </div> */}

     </motion.div>
  )
}

export default Preloader