import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import useWindow from './useWindow';
import Section from '@/layout/Section';
import GridColumn from '@/layout/GridColumn';
import AnimatedText from './AnimatedText';
import TextLanding from '@/effects/TextLanding';

function Stack() {
  const { dimension } = useWindow();

  const scrollTracker = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scrollTracker,
    offset: ['start start', 'end end']
  })

  const testimonials = [
    {
      name: 'James R.',
      car: 'Lamborghini Huracán',
      review:
        'The finish was unreal. Every inch of the paint looked brand new and the interior smelled fresh without being overpowering.',
      rotate: 12,
      x: -1,
      y: -1,
    },
    {
      name: 'Michael T.',
      car: 'Rolls-Royce Ghost',
      review:
        'Professional from start to finish. My Ghost looked better than the day I collected it from the dealership.',
      rotate: -12,
      x: 1,
      y: 1,
    },
    {
      name: 'Sarah M.',
      car: 'BMW M4',
      review:
        'Attention to detail was incredible. The ceramic coating gave the paint an amazing depth and shine.',
      rotate: 8,
      x: -1,
      y: -1,
    },
    {
      name: 'David K.',
      car: 'Mercedes-AMG GT',
      review:
        'I have tried several detailing shops and none came close to this level of quality. Highly recommended.',
      rotate: -8,
      x: 1,
      y: -1,
    },
    {
      name: 'Chris A.',
      car: 'Porsche 911 Turbo S',
      review:
        'Exceptional service. The wheels, leather, paint, and glass were all spotless. Worth every penny.',
      rotate: 0,
      x: -1,
      y: 1,
    },
  ]

  const text01X = useSpring(
    useTransform(scrollYProgress, [.3, .85], [`${-dimension.width}px`, '0px']),
    { stiffness: 120, damping: 30, mass: .1 }
  )

  const text02X = useSpring(
    useTransform(scrollYProgress, [.3, .85], [`${dimension.width}px`, '0px']),
    { stiffness: 120, damping: 30, mass: .1 }
  )

  const viewRef = useRef(null)
  const inView = useInView(viewRef)

  return (
    <div ref={scrollTracker} className='bg-black h-[500vh]'>
      <div className="h-screen sticky top-0 overflow-hidden">

        <div
          ref={viewRef}
          className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        >
          <h2 className='leading-[1] max-w-[9 text-center'>
            <TextLanding preLoaderOut={inView}/>
          </h2>
        </div>

        {testimonials.map(({ name, car, review, rotate, x, y }, i) => {

          const totalWords = testimonials.length
          const In_END = .6

          const inStart = (i / totalWords) * 1;
          const inEnd = inStart + In_END / totalWords;

          const cardX = useSpring(
            useTransform(
              scrollYProgress,
              [inStart, inEnd],
              [`${x * dimension.width * .9}px`, '0px']
            ),
            { stiffness: 120, damping: 20, mass: .1 }
          )

          const cardY = useSpring(
            useTransform(
              scrollYProgress,
              [inStart, inEnd],
              [`${y * dimension.height / 2}px`, '0px']
            ),
            { stiffness: 120, damping: 20, mass: .1 }
          )

          return (
            <div
              key={i}
              className='absolute flex items-center justify-center h-full w-full'
            >
              <motion.div
                style={{
                  rotate,
                  x: cardX,
                  y: cardY
                }}
                className='
                  w-[82vw]
                  max-w-[520px]
                  rounded-[32px]
                  border-2 border-brand-white/85
                  bg-black/95
                  backdrop-blur-xl
                  p-8
                  lg:p-10
                  shadow-[0_20px_80px_rgba(0,0,0,.35)]
                '
              >
                <div className="flex items-center gap-1 text-[#D4AF37] text-xl mb-6">
                  ★★★★★
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  "{review}"
                </p>

                <div className="border-t border-white/10 pt-5">
                  <h4 className="text-white font-semibold text-xl">
                    {name}
                  </h4>

                  <p className="text-white/50 mt-1">
                    {car}
                  </p>
                </div>
              </motion.div>
            </div>
          )
        })}

        <div className='absolute z-10 top-0 h-full w-full'>
          <Section className='h-full'>
            <GridColumn className='h-full w-full'>

              <div className="relative col-span-5 lg:col-span-4 col-start-1">
                <div className='mix-blend-difference flex items-center lg:items-start h-full w-full'>
                  <motion.h2
                    style={{ x: text01X }}
                    className='text-heading1 font-custom uppercase text-white'
                  >
                    Trusted
                  </motion.h2>
                </div>
              </div>

              <div className="relative col-span-full lg:col-span-4 col-start-3 lg:col-start-9 h-full">
                <div className='mix-blend-difference flex items-center lg:items-end h-full w-full'>
                  <motion.h2
                    style={{ x: text02X }}
                    className='text-heading1 font-custom uppercase text-white'
                  >
                    Reviews
                  </motion.h2>
                </div>
              </div>

            </GridColumn>
          </Section>
        </div>

      </div>
    </div>
  )
}

export default Stack