import Image from "next/image";
import localFont from "next/font/local";
import RubberSection from "@/components/RubberSection";
import { ColorProvider,useHeaderColor } from "@/providers/ColorProvider";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Section2 from "@/components/Section2";
import Section5 from "@/components/Section5";
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
    <main>

      <Header preLoaderOut={preLoaderOut}  menutextt={menutextt} activeColor={activeheaderColor} />
     
      <ColoredComponent section="default"  >
     <Landing preLoaderOut={preLoaderOut} />
     </ColoredComponent>

     <HorizontalTextWavy/>

     <ColoredComponent section="Section1"  >
         <Section2 />
     </ColoredComponent>
     <ColoredComponent section="Section2"  >
          <Section3 />
     </ColoredComponent>
     <ColoredComponent section="Section1"  >
   <Section5 />
</ColoredComponent>
<ColoredComponent section="Section1"  >
   <Section4 />
</ColoredComponent>
    </main>
           
    
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
