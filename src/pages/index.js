import Image from "next/image";
import localFont from "next/font/local";
import RubberSection from "@/components/RubberSection";
import { ColorProvider,useHeaderColor } from "@/providers/ColorProvider";
import {AnimatePresence, motion, time} from 'framer-motion';
import SmoothScroll from "@/providers/Lenis";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Section2 from "@/components/Section2";
import Section5 from "@/components/Section5";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import Section4 from "@/components/Section4";
import Section3 from "@/components/Section3";
import ColoredComponent from "@/components/ColoredComponent";
import HorizontalTextWavy from "@/components/HorizontalTextWavy";
import { secondaryColor, whiteColor } from "../../data";

function PageContent() {
  const { activeSection } = useHeaderColor();
   const menubg = {
    default: whiteColor,
    landing: whiteColor,
    Section1: secondaryColor,
    Section2: whiteColor,
    contact: secondaryColor,
  };
  const menutext = {
    default: secondaryColor,
    landing: secondaryColor,
    Section1: whiteColor,
    Section2: secondaryColor,
    contact: whiteColor,
  };
  
const activeheaderColor= menubg[activeSection] || "#fff";
const menutextt = menutext[activeSection] || "#2D7864";

   const [isLoading,setIsLoading]=useState(true)
   const [preLoaderOut,setPreLoaderOut]=useState(false)

  useEffect(()=>{

   const timer=  setTimeout(() => {
    setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    }, 2600);
    return ()=>clearTimeout(timer)
  },[])
  return (
    <SmoothScroll>

    <AnimatePresence initial={false} mode="wait" onExitComplete={()=>{setPreLoaderOut(true)}}>
    {isLoading &&  <Preloader key={'preloader'}/>}
    </AnimatePresence>
      <Header preLoaderOut={preLoaderOut}  menutextt={menutextt} activeColor={activeheaderColor} />
     
      <ColoredComponent section="default"  >
     <Landing preLoaderOut={preLoaderOut} />
     </ColoredComponent>

     <HorizontalTextWavy/>

     <ColoredComponent section="Section2"  >
         <Section2 />
     </ColoredComponent>
     <ColoredComponent section="Section1"  >
          <Section3 />
     </ColoredComponent>
      {/* <ColoredComponent section="default"   >
      </ColoredComponent> */}
     <ColoredComponent section="Section1"  >
   <Section5 />
   <Section4 />
</ColoredComponent>
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
