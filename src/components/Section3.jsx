import React from 'react'
import { SwipeableCards } from './SwipeableCards'
import Heading2 from '@/typography/Heading2'
import Heading3 from '@/typography/Heading3'
import { motion} from "framer-motion";


function Section3() {
  return (
    <div className='min-h-svh bg-black py-20'>Section3
<SwipeableCards/>
    <div className='relative flex justify-center items-center'>
   <div className='max-w-[50em]  lg:max-w-[60em] relative'>
   <Heading3 className="text-balance">
  <span>We are a </span>
  <em className="relative inline-block font-custom2 font-light">
    <span>young, </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 201 86"
      fill="none"
      className="team__h2-circle-svg absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <motion.path
      initial={{pathLength:0}} whileInView={{pathLength:1}}
        d="M94.2928 1.00027C123.974 0.963816 154.146 4.60865 181.273 16.5546C189.974 20.3907 199.369 26.6143 199.971 36.0452C200.401 42.8702 195.929 49.03 190.946 53.75C180.208 63.9191 166.386 70.3066 152.306 74.9538C125.258 83.8745 96.2711 86.9179 67.9394 83.8289C50.4851 81.9245 33.011 77.6054 17.9651 68.6209C9.40333 63.509 1.07316 55.618 1.00038 45.7041C0.960683 39.7721 4.01088 34.1226 8.27852 29.9767C12.5461 25.8307 17.9452 23.015 23.4369 20.6915C48.2553 10.2126 75.8527 8.8093 102.795 7.54272"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </em>

  <span>future-proof team of 49 </span>
  <span>&nbsp;digitally native </span>

  <em className="relative inline-block font-light font-custom2">
    <span>wunderkinder.</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 403 17"
      fill="none"
      className="team__h2-line-svg"
    >
      <motion.path
      initial={{pathLength:0}} whileInView={{pathLength:1}}
        d="M1 16C25.8389 14.2222 50.643 12.2137 75.2387 9.47009C107.364 5.99145 144.414 1.26496 174.898 1C178.242 1.35897 168.254 2.8718 166.786 3.22223C163.842 3.76924 160.464 4.41881 157.146 5.11966C152.23 6.22223 134.982 9.64957 144.171 12.1282C152.23 13.8974 167.551 13.4701 178.572 13.094C200.11 12.2393 222.066 10.2137 243.639 8.99146C296.296 5.69231 349.291 6.34188 402 8.58975"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </em>

  <span>&nbsp;not to brag!</span>
</Heading3>

    <div className='flex justify-center'>
       
      </div>

      
    

      </div>
</div>

    </div>
  )
}

export default Section3