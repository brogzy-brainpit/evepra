
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion, useSpring, useVelocity, useScroll, useTransform } from "framer-motion";
import HoverText from "@/effects/HoverText";
import FlipTextEffect from "@/effects/FlipTextEffect";
import SlideUpText from "@/effects/SlideUpText";
import Magnetic from "@/common/Magnetic";
import StaggerTextHover from "@/effects/StaggerTextHover";
import { useHeaderColor } from "@/providers/ColorProvider";
import ScaleUpContent from "@/effects/ScaleUpContent";
import { MenuIcon } from "lucide-react";

function Header({activeColor,activebg,menutextt}) {
  const ref = useRef(null);
  const scaleMenuIcon= useRef(null)
   
const scaleMenu= {
    initial: { scale: 0 },
    enter: {
      scale:1,
      transition: { duration: 0.6,delay:1, ease: "easeInOut" },

    },
     exit: {
      scale: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  // ✅ use framer-motion's useScroll, not drei
  const { scrollY } = useScroll();
  const speedRotate = useVelocity(scrollY);
  const scrollMarker = useSpring(speedRotate, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  // scale down the crazy values
  const rotation = useTransform(scrollMarker, v => v * 0.07);
// const rotation = useTransform(scrollMarker, [0, 1], [30, 3360]);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const Links = [
    { title: "our work", url: "about" },
    { title: "culture", url: "contact" },
    { title: "methods", url: "about" },
  ];

  return (
    <div className="mix-blend-differenc fixed top-[3%] w-full z-50">
      <header
        ref={ref}
        className=" container px-5 mx-auto flex justify-center items-center"
        style={{ height: "var(--header-height)" }}
      >
        <div className=" shadowlg backdropblur-lg  roundedfull w-full flex items-center justify-between py-2">
          <Link href={"/"} className="overflow-visible  text-center font-custom text-2xl">
            {/* <h2 className={"relative circular font-bold text-white text-4xl leading-[1] flex items-end"}>alfred <span className="absolute bottom-1 -right-[10px] ml-[4px] w-[8px] h-[8px] rounded-full bg-white"></span></h2> */}
       <StaggerTextHover activeColor={activeColor } className="relative font-custom font-bold text-brand-secondary text-4xl leading-[1] tracking-tighter " text={["E", "v", "e" ,"p", "r" ,"a",'*']}/>
      
 </Link>

          <ul className= " hidden md:flex flex-row gap-6 mx-auto">
            {Links.map(({ title, url }) => (
              <Magnetic>
              <Link scroll={false}
                key={title}
                className="font-bold circular text-white text-para capitalize"
                href={`/${url}`}
              >
            {title}
              </Link>

              </Magnetic>
            ))}
          </ul>

           <Magnetic>
      <motion.div variants={scaleMenu} initial='initial' animate='enter' exit={'exit'} ref={scaleMenuIcon} onClick={(e)=>{setBurgerMenu(true)}} className=" w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] relative cursor-pointer flex items-center justify-center ">     
  <motion.div
     style={{ rotate:rotation}}
      whileHover={{
    rotate: 360,
    transition: {
      repeat: Infinity, // loop forever
      repeatType: "loop", // keeps looping forward
      ease: "linear", // smooth
      duration: 4, // adjust speed
    },
  }}
    className="absolute inset-0 flex items-center justify-center z-0"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 52 48"  className="w-full h-full"><motion.path d="M51.9374 7.15723C51.4261 6.40359 50.38 7.32816 49.7458 7.55542C48.6021 7.9944 47.2965 8.46446 46.2388 8.97919C45.7938 9.20257 45.4737 9.40458 44.9214 9.60853C43.7798 9.97564 42.4703 10.0475 41.233 10.3175C40.5733 10.4476 40.0308 10.739 39.4199 10.8614C38.9457 10.9682 38.4422 10.9604 37.9601 11.0032C37.1737 11.1022 36.5043 11.2052 35.7412 11.178C35.144 11.1955 34.4571 11.1877 33.8404 11.0945C33.3134 11.0304 32.7358 11.1003 32.2264 11.0711C30.7959 10.9255 29.4864 10.7973 28.1886 10.0961C27.326 9.66291 26.5571 8.96365 25.7491 8.46446C24.7538 7.79239 24.0942 6.90084 23.4131 5.95101C22.689 4.95651 21.9923 3.83575 21.4166 2.76938C21.1024 2.24882 20.9307 1.68747 20.7394 1.12418C20.6125 0.809514 20.5891 0.467654 20.4271 0.275357C20.1734 -0.0470787 19.6192 -0.122832 19.3635 0.246222C19.1606 0.535637 19.102 0.898864 18.983 1.28151C18.7839 2.05264 18.6219 2.70917 18.4814 3.49001C18.4034 4.06495 18.3721 4.61465 18.2004 5.15658C17.7828 6.21906 17.7125 7.40974 17.3027 8.43144C17.1387 8.94423 16.7406 9.85521 16.4928 10.4768C16.1122 11.3761 15.9463 12.392 15.5423 13.2816C15.2652 13.874 15.1481 14.2411 14.8768 14.7714C14.4416 15.6513 13.8698 16.4263 13.3878 17.3237C13.0209 18.0404 12.5271 18.5804 12.1329 19.2952C11.93 19.6507 11.7524 20.0547 11.4889 20.346C10.7785 21.123 9.9452 21.9252 9.18993 22.6517C8.63373 23.1897 8.14779 23.9142 7.49011 24.3066C6.59824 24.8038 5.9386 25.6818 4.92183 25.9537C4.08655 26.3305 2.99366 26.2198 2.13692 26.4412C1.7466 26.6549 1.42654 26.82 0.938646 26.9754C0.636151 27.0628 0.331705 27.1444 0.146304 27.3678C-0.0644664 27.595 -0.0508039 27.9777 0.208756 28.1661C0.493687 28.4031 1.05769 28.339 1.48899 28.2652C2.27743 28.1913 2.97024 28.2244 3.79967 28.1603C4.42807 28.1525 5.05649 28.3137 5.67319 28.3526C7.13687 28.4322 8.56933 29.248 9.49633 30.3396C10.0603 31.1438 10.7434 31.9906 11.202 32.8822C11.5631 33.7874 12.01 34.6478 12.2422 35.5977C12.3554 36.6543 12.4491 37.711 12.5115 38.7657C12.531 39.6437 12.4803 40.4808 12.4745 41.3879C12.5623 42.6272 12.613 43.7771 12.2344 45.0027C12.1251 45.5699 11.9124 46.1662 11.8324 46.7178C11.7797 47.1665 12.0373 47.489 12.3417 47.7706C13.3527 48.532 13.6278 47.1976 14.2543 46.677C14.5704 46.3818 15.0505 46.0982 15.3823 45.7913C15.9248 45.2902 16.4303 44.7968 17.0568 44.3947C17.8101 43.9247 18.456 43.3983 19.225 42.936C19.8397 42.6136 20.3764 42.3882 20.9111 42.1357C21.8284 41.755 22.6812 41.3627 23.6492 41.0208C24.2171 40.8207 24.8514 40.6615 25.3783 40.3856C25.6886 40.2205 25.9013 40.0787 26.2136 39.9797C26.5883 39.8554 27.0176 39.8379 27.4138 39.7408C28.0032 39.5757 28.6374 39.5543 29.26 39.496C30.1851 39.3659 30.9813 39.2319 31.881 39.1076C32.7084 38.9696 33.5515 39.0629 34.381 39.0104C35.1811 38.9541 35.9871 39.0396 36.7424 39.1522C37.4254 39.2183 38.1397 39.2455 38.8208 39.4164C39.5331 39.5776 40.185 39.5796 40.8485 39.7058C41.5276 39.8495 42.1034 39.9855 42.8293 40.172C43.731 40.3992 44.6111 40.7702 45.5108 40.9742C46.2212 41.0849 46.8711 41.4811 47.5951 41.7822C48.4987 42.0813 49.9077 43.4022 50.8152 42.9379C51.1919 42.5631 50.3488 41.8308 50.1673 41.5045C50.0092 41.2889 49.8336 41.0422 49.6365 40.881C49.1544 40.5177 48.6665 40.1409 48.3465 39.6242C47.841 38.8725 47.3336 38.0995 46.8672 37.307C46.6291 36.8893 46.3246 36.6096 46.0456 36.1066C45.8075 35.6656 45.5655 35.1276 45.3488 34.6517C44.777 33.4824 44.5448 32.5423 44.2852 31.3671C44.1213 30.9534 43.9749 30.495 43.8266 30.0716C43.6646 29.5743 43.6783 29.0499 43.6119 28.5021C43.5358 27.494 43.407 26.4529 43.4402 25.4972C43.4382 24.3299 43.8539 23.1139 43.9749 21.9582C44.256 20.7054 44.7712 19.6604 45.2474 18.4192C45.667 17.4635 45.9148 16.4574 46.4671 15.5503C46.6974 15.1482 46.9589 14.7403 47.1033 14.3169C47.1306 14.2353 47.1287 14.2411 47.1423 14.2023C47.1736 14.1051 47.2029 14.008 47.2263 13.909C47.3395 13.3088 47.7161 12.7591 48.1299 12.3104C48.5729 11.817 48.8324 11.2848 49.2754 10.7487C49.6462 10.3058 49.9936 9.8455 50.3703 9.38709C50.9479 8.67424 52.2809 8.27022 51.9471 7.18637L51.9374 7.16695V7.15723Z"    fill="#ffffff"
      
      animate={{
    fill: activebg,
    // filter: `drop-shadow(0px 0px 12px ${activebg})`
  }}
      transition={{ duration: 0.6, ease: "easeInOut" }}></motion.path></svg>
    
  </motion.div>

  <motion.h2  animate={{ color: menutextt }}
      transition={{ duration: 0.6, ease: "easeInOut" }} className="pointer-events-none relative z-10 text-brand-secondary text-[16px] font-custom uppercase font-bold text-center">
    {/* Menu */}
  <MenuIcon/>
  </motion.h2>
         
</motion.div>


          </Magnetic>
        </div>
        <MobileMenu Links={Links} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>

      </header>
    </div>
  );
}



export const menuSlide={
    initial:{
       x: '100%',
        
    }, 
    enter:{
        x:'0%',
     transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
     exit:{
        x:'100%',
        transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
}
const MobileMenu=({burgerMenu, setBurgerMenu,Links})=>{
    const textAnim={
        initial:{
           opacity: 0,
            
        }, 
        enter:{
            opacity:1,
         transition:{duration:0.5, delay:0.5, ease:[0.76, 0, 0.24, 1]},
    
        },
         exit:{
            opacity:0,
            // transition:{duration:1.5, ease:[0.76, 0, 0.24, 1]},
    
        },
    }
    return <motion.div variants={menuSlide} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" className='z-0 m[10vh] fixed items-center justify-center w-[100%] top-0 left-0 h-screen bg-black'> 

<div className='relative bg-brand-secondary  h-full w-full'>
<Magnetic>
  <div className=' md:flex cursor-pointer absolute top-10 font-body right-10 font-bold text-[20px] shadow-lg bebas text-red-600 bg-white p-4 rounded-full w-[40px] h-[40px] items-center justify-center' onClick={(e)=>{setBurgerMenu(false)}} >
  
x
 
</div>
</Magnetic>

<div className=' bg-slate600  flex justify-center items-center flex-col  h-full'>
{Links.map(({url,title},index)=>{
  return (

  <Link href={url}>
   {/* <motion.h1  variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className=' font-custom text-heading2 font-bold uppercase heading-hover'>About</motion.h1>  */}
 <SlideUpText delay={0.1*index} once={false} text={title} className=' font-custo circular text-white  text-footer font-bold uppercase heading-footer'/>
  </Link>
  )
})}
    

</div>
</div>

    </motion.div>
}
export default Header
