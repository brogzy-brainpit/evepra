import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView} from 'framer-motion'
import RubberSection from './RubberSection'
import StaggerText from '@/effects/StaggerText'
import { useHeaderColor } from '@/providers/ColorProvider'
import SlideUpText from '@/effects/SlideUpText'
import { ArrowRightToLine, ArrowUpWideNarrow, Play } from 'lucide-react'
import ScaleUpContent from '@/effects/ScaleUpContent'
import SlideUpElement from '@/effects/SlideUpElement'
import Section from '@/layout/Section'
import GridRow from '@/layout/GridRow'
import GridColumn from '@/layout/GridColumn'
import Heading2 from '@/typography/Heading2'
import CustomBtn from './CustomBtn'
import Paragraph from '@/typography/Paragraph'


function Section1() {
  //  const ref = useRef(null);
  // const inView = useInView(ref, { amount:0.4});
  // const inView = useInView(ref, { amount:0.9});
  // const inView = useInView(ref);const ref = useRef(null);
//  const ref = useRef(null);
 const ref = useRef(null);
  const { setActiveSection } = useHeaderColor();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Create an IntersectionObserver with fine-grained thresholds
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (ratio >= 0.9) {
          // Scrolling down — mostly visible
          setActiveSection("Section1");
          setIsInView(true);
        } else if (ratio >= 0.1 && !isInView) {
          // Scrolling up — just 10% visible from bottom
          setActiveSection("Section1");
          setIsInView(true);
        } else if (ratio === 0) {
          // Fully out of view
          setActiveSection("default");
          setIsInView(false);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // [0, 0.1, 0.2, ... 1.0]
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection, isInView]);
  
 
  return (
 <div ref={ref} className='relative'>
<Section className={'bg-purple-500 min-h-screen h-screen lg:h-fit'}>
  <GridRow>
    


</GridRow>
</Section>

 </div>

  )
}

export default Section1


































import { motion, useTransform, useScroll} from "framer-motion";
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


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-eutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[330px] md:w-[400px] rounded-lg overflow-hidden cursor-pointer bg-neutral-200"
    >
      <motion.img initial={{ scale:1}} whileHover={{scale:1.2}} transition={{ duration: 3.1, ease: 'easeInOut' }} src={card.url.src}
       
        className="h-[60%] w-full object-cover absolute inset-0 overflow-hidden border-0"
      />
      {/* <motion.div   initial={{ y:"60%"}}
        whileHover={{ y:"30%"}} className="w-full absolute hover:top-[30%] top-[60%] z-10 bg-[#C9FD74]">
       */}
       <div className="relative group w-full h-[400px] overflow-hidden">
  {/* The animated child */}
  <div className="transition-all duration-300 ease-in-out w-full absolute top-[60%] group-hover:top-[30%] z-10 bg-[#C9FD74]">
    {/* Inner content */}
    <div className="w-full flex justify-between p-4">
      <div className="flex flex-col">
        <h2 className='font-custom leading-1 text-4xl capitalize text-black'>{card.title}</h2>
        <h2 className='font-custom leading-1 text-4xl capitalize text-black'>{card.title2}</h2>
      </div>
      <h2 className='font-normal text-para text-black'>{card.id}</h2>
    </div>

    <div className="bg-slat-400 p-4 pt-0">
      {card?.subSevice?.map(({ title, logo }, index) => (
        <div key={index} className="w-full flex items-center justify-between py-2 border-b">
          <h2 className='font-normal text-para text-black'>{title}</h2>
          <img src={logo.src} className='w-[40px]' />
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default Example;

// const cards = [
//   {
//     url: service01,
//     title: "email",
//     title2: "design",
//     id: 1,
//     subSevice:[
//       {
//       title:"Welcome Series",
//       logo:conversion
//     },
//      {
//       title:"Abandoned Cart",
//       logo:ui
//     },
//      {
//       title:"Welcome Series",
//       logo:sms
//     },
//   ]
//   },
//   {
//     url: service02,
//     title: "flow",
//     title2: "automation",
//     subSevice:[
//       {
//       title:"Welcome Series",
//       logo:conversion
//     },
//      {
//       title:"Abandoned Cart",
//       logo:ui
//     },
//      {
//       title:"Welcome Series",
//       logo:sms
//     },
//   ],
//     id: 2,
//   },
//   {
//     url: service03,
//     title: "A&B",
//     title2: "Testing",
//     subSevice:[
//       {
//       title:"Welcome Series",
//       logo:conversion
//     },
//      {
//       title:"Abandoned Cart",
//       logo:ui
//     },
//      {
//       title:"Welcome Series",
//       logo:sms
//     },
//   ],
//     id: 3,
//   },
//   {
//     url: service04,
//     title: "Campaign",
//     title2: "Management",
//     subSevice:[
//       {
//       title:"Welcome Series",
//       logo:conversion
//     },
//      {
//       title:"Abandoned Cart",
//       logo:ui
//     },
//      {
//       title:"Welcome Series",
//       logo:sms
//     },
//   ],
//     id: 4,
//   },
//   {
//     url:service05,
//     title: "Reports &",
//     title2: "Analytics",
//      subSevice:[
//       {
//       title:"Welcome Series",
//       logo:conversion
//     },
//      {
//       title:"Abandoned Cart",
//       logo:ui
//     },
//      {
//       title:"Welcome Series",
//       logo:sms
//     },
//   ],
//     id: 5,
//   },
//   {
//     url: service01,
//     title: "Klaviyo",
//     title2: "Setup",
//      subSevice:[
//       {
//       title:"Welcome Series",
//       logo:conversion
//     },
//      {
//       title:"Abandoned Cart",
//       logo:ui
//     },
//      {
//       title:"Welcome Series",
//       logo:sms
//     },
//   ],
    
//     id: 6,
//   },
//   {
//     url: service02,
//     title: "Free",
//     title2: "Audit",
//     subSevice:[
//       {
//       title:"Welcome Series",
//       logo:conversion
//     },
//      {
//       title:"Abandoned Cart",
//       logo:ui
//     },
//      {
//       title:"Welcome Series",
//       logo:sms
//     },
//   ],
//     id: 7,
//   },
// ];
const cards = [
  {
    url: service01,
    title: "Brand",
    title2: "Positioning",
    id: 1,
    subSevice: [
      {
        title: "Real Estate Brand Voice",
        logo: conversion,
      },
      {
        title: "Visual Identity Strategy",
        logo: ui,
      },
      {
        title: "Messaging Alignment",
        logo: sms,
      },
    ],
  },
  {
    url: service02,
    title: "Lead",
    title2: "Funnels",
    id: 2,
    subSevice: [
      {
        title: "Seller/Buyer Funnels",
        logo: conversion,
      },
      {
        title: "Nurture Sequences",
        logo: ui,
      },
      {
        title: "Local Market Capture",
        logo: sms,
      },
    ],
  },
  {
    url: service03,
    title: "Copy &",
    title2: "Content",
    id: 3,
    subSevice: [
      {
        title: "Listing Descriptions",
        logo: conversion,
      },
      {
        title: "Social Media Captions",
        logo: ui,
      },
      {
        title: "Blog/SEO Articles",
        logo: sms,
      },
    ],
  },
  {
    url: service04,
    title: "Social",
    title2: "Campaigns",
    id: 4,
    subSevice: [
      {
        title: "Instagram Reels Planning",
        logo: conversion,
      },
      {
        title: "Facebook Ad Copy",
        logo: ui,
      },
      {
        title: "Email Nurture Campaigns",
        logo: sms,
      },
    ],
  },
  {
    url: service05,
    title: "Market",
    title2: "Insights",
    id: 5,
    subSevice: [
      {
        title: "Real Estate Trends Report",
        logo: conversion,
      },
      {
        title: "Audience Behavior Insights",
        logo: ui,
      },
      {
        title: "Ad Campaign Analytics",
        logo: sms,
      },
    ],
  },
  {
    url: service01,
    title: "Content",
    title2: "Toolkit",
    id: 6,
    subSevice: [
      {
        title: "Realtor Content Calendar",
        logo: conversion,
      },
      {
        title: "Property Highlight Templates",
        logo: ui,
      },
      {
        title: "Email Scripts Pack",
        logo: sms,
      },
    ],
  },
  {
    url: service02,
    title: "Strategy",
    title2: "Session",
    id: 7,
    subSevice: [
      {
        title: "Brand Audit & Clarity",
        logo: conversion,
      },
      {
        title: "Lead Generation Plan",
        logo: ui,
      },
      {
        title: "Content Strategy Outline",
        logo: sms,
      },
    ],
  },
];
