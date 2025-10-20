import Image from "next/image";
import localFont from "next/font/local";
import RubberSection from "@/components/RubberSection";
import { ColorProvider,useHeaderColor } from "@/providers/ColorProvider";
import {AnimatePresence, motion} from 'framer-motion';
import SmoothScroll from "@/providers/Lenis";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section5 from "@/components/Section5";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import Section4 from "@/components/Section4";
import Section3 from "@/components/Section3";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function PageContent() {
  const { activeSection } = useHeaderColor();

  const headertextColor = {
    default: "#FFF",
    landing: "#fff",
    Section1: "#FF0033",
    Section2: "#FFFFFF",
    // Section2: "#4dff88",
    contact: "#ffb84d",
  };
   const menubg = {
    default: "#FFF",
    landing: "#FFF",
    Section1: "#FF0033",
    Section2: "#FFFFFF",
    contact: "#ffb84d",
  };
  const menutext = {
    default: "#FF0033",
    landing: "#FF0033",
    Section1: "#fff",
    Section2: "#FF0033",
    contact: "#ffb84d",
  };
   const textColor = {
    default: "#fff",
    landing: "#fff",
    Section2: "#FF0033",
    // Section2: "#4dff88",
    Section1: "#FF0033",
    contact: "#ffb84d",
  };
   const bgColor = {
    default: "#FFF",
    landing: "#FFF",
    Section1: "#FFF",
    Section2: "#FFF",
    contact: "#ffb84d",
  };
  
const activeheaderColor= headertextColor[activeSection] || "#fff";
const activeMenubg = menubg[activeSection] || "#FFF";
const menutextt = menutext[activeSection] || "#FF0033";

  const activeColor = textColor[activeSection] || "#fff";
  const activebg = bgColor[activeSection] || "#FFF";
 const pageVariants = {
    initial: { opacity: 1, y:0 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      // background:'rgb(21, 21, 21)',
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.4,
        ease: "easeInOut",
      },
    },
  };
   const [isLoading,setIsLoading]=useState(true)
   const [preLoaderOut,setPreLoaderOut]=useState(false)

  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    }, 2420);
  },[])
  return (
    <SmoothScroll>

    <motion.section 
    // variants={pageVariants} initial='initial' exit='exit'   
    animate={{
    backgroundColor: activebg}}
  transition={{ duration: 0.6, ease: "easeInOut" }}
   className="bg-neutral-800 w-full h-full">
    <AnimatePresence mode="wait" onExitComplete={()=>{setPreLoaderOut(true)}}>
    {isLoading &&  <Preloader/>}
    </AnimatePresence>
      <Header menutextt={menutextt} activeColor={activeheaderColor} activebg={activeMenubg} />
{/* <RubberSection
        damping={40}
        stiffness={270}
        mass={0.8}
        className="mb-[-140px]"
        defaultStart={["start start", "end start"]}
        defaultY={[0, -1000]}
      ></RubberSection> */}
      {/* <RubberSection
        damping={10}
        stiffness={120}
        mass={0.7}
        className="mb-[-140px]"
        defaultStart={["start start", "end start"]}
        defaultY={[0, -200]}
      >
      </RubberSection> */}
     <Landing preLoaderOut={preLoaderOut} />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        {/* <Section4 /> */}


    </motion.section>
    </SmoothScroll>
           
    
  );
}

export default function Home() {
  return (
    <main>
      <ColorProvider>
        <PageContent />
      </ColorProvider>
    </main>
  );
}
