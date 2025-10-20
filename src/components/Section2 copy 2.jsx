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
 <div ref={ref} className='relative bg-[#7a2333] '>
<Section className={'min-h-screen h-screen lg:h-fit container mx-auto '}>
  <GridRow>
     <GridColumn>
        <div className='col-span-full  lg:col-start-6'>
          {/* animated-line */}
          <motion.div className='origin-left h-[1px] lg:h-[2px] bg-neutral-900 w-full'  initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{ once: false }} transition={{duration:0.6,}} />
          {/* animated-line */}

         <Heading2 className='font-custom'>
        <SlideUpElement gap='6px' once={false} >
          <span className="inline-block w-[0.7em] h-[0.7em] mr-2 align-baseline translate-y-[0.05em]">
            <img
              src="/images/rotate.png"
              className="w-[0.7em] h-[0.7em]"
              style={{ animation: "spin 3s linear infinite" }}
              alt="rotate icon"
            />
          </span>
          {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita sed quos corporis possimus iste, nisi quas ducimus unde ipsum.'.split(' ').map((word)=>{
            return (
          <span className=''>{word}</span>

            )
          })}
        </SlideUpElement>
         </Heading2>
          </div>
      </GridColumn>

<GridColumn className={'bg-purple-600'}>
<div className='col-span-full lg:col-span-8 bg-pink-500'>
{/* <div className='flex flex-wrap  bg-slate-800'> */}
  {/* <SlideUpElement delay={0.2} margin='-130px' gap='4px' once={false} > */}
   {/* button 001 */}
    
    <CustomBtn className='flex-1 lg:flex-none mr-2.5 flex items-center  whitespace-nowrap capitalize border border-brand-secondary bg-brand-secondary' href='/'>
    <span className="p-4 hidden lg:block">learn more about us</span>
     <span className="inline-fle p-4 block lg:hidden">learn more</span>
     <span className="inline-flex p-4">
     <ArrowRightToLine className="w-5 h-5 p text-white" />
     </span>
     </CustomBtn>
     {/* button 002 */}
      <div className="font-body ml-2.5 flex items-center border border-neutral-900 bg-transparent whitespace-nowrap">
       <a href='/' className='text-neutral-900 flex w-full justify-between items-center transition-all duration-300 ease-out'>
        <span className="inline-fle p-4 lg:block hidden">play video</span>
        <span className="inline-flex p-4">
        <Play className="w-5 h-5 text-neutral-900" />
        </span>
       </a>
      </div>


{/* </SlideUpElement> */}
{/* </div> */}

</div>

  <h2 className='col-span-full lg:col-span-4 sm:col-start6 self-end bg-slate600 flex justify-end '>
  <SlideUpText duration={0.40} delay={0.1} once={false} className={'font-body text-neutral-900 text-para'} text={'Copyright© 2021-2031'}/>
  </h2>

</GridColumn>

</GridRow>
</Section>

 </div>

  )
}

export default Section1