import { motion, useTransform, useScroll, useSpring, useInView} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import service01 from "../../public/images/service01.png"
import service02 from "../../public/images/service02.png"
import service03 from "../../public/images/service03.png"
import service04 from "../../public/images/service04.png"
import service05 from "../../public/images/service05.png"
import conversion from "../../public/images/conversion.png"
import card from "../../public/images/card.png"
import sms from "../../public/images/sms.png"
import ui from "../../public/images/ui.png"
import ScaleUpContent from "@/effects/ScaleUpContent";
import Magnetic from "@/common/Magnetic";
import Paragraph from "@/typography/Paragraph";
import GridColumn from "@/layout/GridColumn";
import Heading2 from "@/typography/Heading2";
import SlideUpElement from "@/effects/SlideUpElement";

const Section1 = () => {

  return (  
     <HorizontalScrollCarousel />

  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset:['start start', 'end end']
  });
  useEffect(()=>{
    scrollYProgress.on('change',e=>{
      // console.log(scrollYProgress.current)
      // ;console.log(1-scrollYProgress.current)
    })
  })
  const x = useTransform(scrollYProgress, [0, 1], ["110%", "-70%"]);
  const swiftx = useSpring(x, { stiffness: 120, damping: 30, mass: 0.3 });
const texts=['h e l p i n g','l a n d','s c r a p e r s','s u c c e e d']
  return (

    <section ref={targetRef} className="  relative h-[300svh] bgneutral-900">
      <div className="sticky bgpurple-500 top-0 flex flex-col h-svh items-center justify-center overflow-hidden">
   {/* <div className="bgblue-600 grid grid-cols-12 gap5 h-full items-end place-content-end pb-20"> */}
   <GridColumn className={'bggreen-400'}>

    <motion.h2 style={{x:swiftx}} className='bgslate-400 col-start-0 col-span-full mask-gradien text-black break-words text-[3em]  lg:text-[8em] leading-[0.95] tracking-[-0.03em] lowercase text-center justify-center font-custom font-black flex flex-co flexwrap'>
          {texts.map((word,index) => {
            const total= texts.length
            // const start=(1/total) * index
            // const end=start + (1/total)*0.8
            // const end=(index* 0.125)*0.125+(index* 0.125+0.1)
            

            // const start=-(1/total) * index-(1/total)
            const start=(1/total) * index

            const end=start + (1/total)*0.8



          return <Text current={scrollYProgress} rangeForOnscroll={[start,end,end+0.3]} range={[start,end,end+0.1]} rang={[index* 0.125,(index* 0.125)*0.125+(index* 0.125+0.1)]} word={word} wowrd={(index* 0.125)+1-scrollYProgress.current} index={index}  key={index} />;
          })}
          </motion.h2> 

<Paragraph className="text-black z-[9] px-5 pt-[80px] bg-slate600  lg:col-start-4 col-span-full lg:col-span-6 text-center">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit magnam quis voluptatum aperiam aspernatur recusandae porro. Ad optio impedit itaque cupiditate error est earum voluptatibus nisi vero iusto. Animi?
</Paragraph>

   </GridColumn>
   {/* </div> */}
      </div>
    </section>
   
   
  );
};

const Text = ({index,word,current,range,rangeForOnscroll}) => {

  const opacit = useTransform(current, rangeForOnscroll, [0, 0,1]);
   const opacity = useSpring(opacit, { stiffness: 120, damping: 30, mass: 0.3 });

  // const y = useTransform(current, range, [30, 0]);
  // const minusy = useTransform(current, range, [-28, 0]);
  const origy = useTransform(current, range, [60, -18,0]);
   const y = useSpring(origy, { stiffness: 120, damping: 30, mass: 0.3 });
  const minus = useTransform(current, range, [-60,18, 0]);
   const minusy = useSpring(minus, { stiffness: 120, damping: 30, mass: 0.3 });
  const rotatplus = useTransform(current, range, [-15,18, 0]);
   const rotate = useSpring(rotatplus, { stiffness: 120, damping: 30, mass: 0.3 });
  const rotateminu = useTransform(current, range, [20,-18, 0]);
   const rotateminus = useSpring(rotateminu, { stiffness: 120, damping: 30, mass: 0.3 });
  

    return  <motion.span  style={{opacity:1}}  className='flex  mr-[0.3em] relative inlineblock'>
   {index==0?<div className='cursor-pointer absolute top-0 translate-y-[-95%] translate-x-[85%]'>
     <motion.svg xmlns="http://www.w3.org/2000/svg" width="150%" viewBox="0 0 386 127" fill="none" class="horizontal-words__arrow-svg"><motion.path style={{pathLength:opacity}} initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path><motion.path 
     style={{pathLength:opacity}}  initial={{pathLength:0}} transition={{type:'spring',stiffness:120,mass:0.3,damping:30,duration:0.9,ease:'easeOut'}} d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ></motion.path></motion.svg>
</div>:index==3?  <div className='w-full absolute top-0 left-0 translate-y-[4%] translate-x-[100%]'>
        {/* <img src='/truus/circle.svg' className='!w-[150%]'/> */}
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="50%" viewBox="0 0 140 127" fill="none" class="horizontal-words__arrow-end-svg">
  <motion.path whileInView={{pathLength:1}} initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.437 125.078L99.6875 107.891" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></motion.path>
  <motion.path whileInView={{pathLength:1}} initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.438 125.078L137.969 110.234" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="stroke-dashoffset: 0; stroke-dasharray: 212.766px, 13.4808px;">
  </motion.path></motion.svg>
      </div>:index==2?  <div className='z-[8] cursor-pointer absolute top-0 translate-y-[80%] translate-x-[85%]'>
        {/* <ScaleUpContent once={false} damping={5} > */}
<Magnetic >

        <motion.img initial={{x:80,scale:0}} whileInView={{x:0,scale:1}} transition={{type:'spring',damping:30,stiffness:120,duration:0.6,ease:'easeOut'}}   src='/truus/phone.svg' className='w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]'/>
</Magnetic>
        {/* </ScaleUpContent> */}
      </div>:<div className='z-[8] cursor-pointer absolute top-0 translate-y-[-45%] translate-x-[45%]'>
        <ScaleUpContent once={false} damping={5} >
<Magnetic >

        <img initial={{x:80,scale:0}} animate={{x:0,scale:1}} transition={{duration:0.6,ease:'easeOut'}}   src='/truus/smile.svg' className='w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]'/>
</Magnetic>
        </ScaleUpContent>
      </div>}
      {word?.split(' ').map((alphabet,index)=>{
    return (
      <motion.div className=""   style={{rotate:index%2==0?rotate:rotateminus,y:index%2==0?y:minusy}}>
          {alphabet}
          </motion.div>
  ) 

      })}</motion.span>
 
    }
    // return  <motion.span style={{opacity:opacity}} className='flex  mr-[0.3em] relative inlineblock'>{word}</motion.span>

  

export default Section1;

