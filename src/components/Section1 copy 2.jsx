import { motion, useTransform, useScroll, useSpring, useInView} from "framer-motion";
import { useRef } from "react";
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

const Section1 = () => {

  return (
    <div className="bg-neutral-00">
     
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
        &nbsp;
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-55%"]);
  const swiftx = useSpring(x, { stiffness: 120, damping: 15, mass: 0.5 });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-eutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x:swiftx }} className="flex gap-4">
    <h2 className='mask-gradien text-black break-words text-[3em]  lg:text-[6em] leading-[0.95] tracking-[-0.03em] lowercase text-center justify-center font-custom font-black flex flexwrap'>
          {['we','make','advertising','for','the','new','mainstream'].map((word,index) => {
          return <Text word={word} index={index}  key={index} />;
          })}
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

const Text = ({index,word}) => {
  const targetRe = useRef(null);
  const { scrollX } = useScroll({
    target: targetRe,axis:"x",
    offset:['start','end']
  });

  const opacity = useTransform(scrollX, [0, 1], [0, 1]);
  
  if(index==0){
    return  <motion.span ref={targetRe} style={{opacity}}  className='mr-[0.3em] inline-block'>
       <motion.div
        style={{ scaleX: opacity, background:'red' }}
        className="fixed top-0 left-0 right-0 h-1 origin-left"
      />
      {word}</motion.span>
    
  }else if(index==1){
   return <span ref={targetRe} className='relative mr-[0.3em] inline-block'>
      <div className='cursor-pointer absolute top-0 translate-y-[-45%] translate-x-[45%]'>
        <ScaleUpContent once={false} damping={5} >
<Magnetic >

        <img initial={{x:80,scale:0}} animate={{x:0,scale:1}} transition={{duration:0.6,ease:'easeOut'}}   src='/truus/smile.svg' className='w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]'/>
</Magnetic>
        </ScaleUpContent>
      </div>
      {word}</span>
  }
  else if(index==2){
   return <span ref={targetRe} className='mr-[0.3em] inline-block font-custom2 font-normal italic text-regular'>{word}</span>

  }
  else if(index==6){
     
   return  <span ref={targetRe} className=' relative mr-[0.3em]'>
      <div className='w-full absolute top-0 left-0 translate-x-[0%]'>
        {/* <img src='/truus/circle.svg' className='!w-[150%]'/> */}
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="105%" viewBox="0 0 608 100" fill="none">
        <motion.path whileInView={{pathLength:1}} initial={{pathLength:0}} transition={{duration:0.9,ease:'easeOut'}} d="M322.902 98.9997C232.515 99.0422 140.637 94.7899 58.0275 80.853C31.532 76.3775 2.92086 69.1167 1.08733 58.1139C-0.222339 50.1514 13.3981 42.965 28.5701 37.4583C61.2714 25.5944 103.362 18.1423 146.239 12.7206C228.606 2.3131 316.878 -1.23755 403.155 2.36627C456.307 4.58809 509.519 9.62707 555.338 20.109C581.41 26.0728 606.777 35.279 606.999 46.8453C607.12 53.7659 597.831 60.3569 584.835 65.1939C571.839 70.0309 555.398 73.3158 538.675 76.0266C463.097 88.252 379.057 89.8891 297.011 91.3668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></motion.path></motion.svg>
      </div>
      {word}</span>

  }
  else{
    return  <span ref={targetRe} className='mr-[0.3em]'>{word}</span>

  }
  
};

export default Section1;

