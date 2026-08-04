"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const cards = [
  {
    id: 1,
    type: "video",
    src: "/videos/mclarenvideo.mp4",
    playbackRate: 1.4,
    title: "McLaren Artura",
    age: 2026,
    label: "Paint enhancement | Ceramic coating",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/bentleyvideo.mp4",
    playbackRate: 1.6,
    title: "Lamborghini Huracán",
    age: 2026,
    label: "Interior detail | Exterior detail",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/ferrarivideo.mp4",
    playbackRate: 1.4,
    title: "Ferrari 488 GTB",
    age: 2026,
    label: "Paint correction | Gloss enhancement",
  },
  {
    id: 4,
    type: "image",
    src: "/detailing/lambourus.jpg",
    title: "Lamborghini Urus",
    age: 2026,
    label: "Ceramic coating | Wheel detailing",
  },
  {
    id: 5,
    type: "video",
    src: "/videos/fordvideo.mp4",
    title: "Ford Bronco",
    age: 2026,
    label: "Engine bay detail | Interior valet",
  },
]

export function SwipeableCards() {
  const [current, setCurrent] = useState(0)
  const [scaleFactor, setScaleFactor] = useState(1)
  const [swipeThreshold, setSwipeThreshold] = useState(120)

  // Store refs to videos
  const videoRefs = useRef({})

  // Responsive updates
  useEffect(() => {
    const updateScale = () => {
      setScaleFactor(Math.min(window.innerWidth / 430, 1))
      setSwipeThreshold(window.innerWidth < 640 ? 60 : 120)
    }

    updateScale()

    window.addEventListener("resize", updateScale)

    return () => window.removeEventListener("resize", updateScale)
  }, [])

  // Play only the visible video's card
  useEffect(() => {
  cards.forEach((card, index) => {
    if (card.type !== "video") return

    const video = videoRefs.current[card.id]

    if (!video) return

    // Set this video's playback speed
    video.playbackRate = card.playbackRate ?? 1

    const offset = (index - current + cards.length) % cards.length

    if (offset === 0) {
      video.play().catch(() => {})
    } else {
      video.pause()
      video.currentTime = 0
    }
  })
}, [current])

  const handleSwipe = (direction) => {
    if (direction === "right") {
      setCurrent((prev) => (prev + 1) % cards.length)
    } else if (direction === "left") {
      setCurrent((prev) => (prev - 1 + cards.length) % cards.length)
    }
  }

  return (
    <div className="py-10 flex items-center justify-center w-full overflow-hidden">
      <div className="relative w-[65vw] sm:max-w-[14em] md:max-w-[20em] lg:max-w-[25em] aspect-[3/4] select-none">
        {cards.map((card, index) => {
          const offset = (index - current + cards.length) % cards.length

          let scale = 1 - Math.abs(offset) * 0.06
          let y = offset * 40 * scaleFactor
          let rotate = offset * 4
          let x = offset * 50 * scaleFactor

          if (offset === 4 || offset === 3) {
            rotate = offset === 4 ? 14 : 20
            scale = offset === 4 ? 0.88 : 0.8
            x = offset === 4 ? 50 * scaleFactor : 100 * scaleFactor
            y = 0
          }

          if (offset === 1 || offset === 2) {
            rotate = offset === 1 ? -14 : -20
            scale = offset === 1 ? 0.88 : 0.8
            x = offset === 2 ? -100 * scaleFactor : -50 * scaleFactor
            y = 0
          }

          return (
            <motion.div
              key={card.id}
              className=" cursor-[url('https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68384fb014875f192dfcef4b_cursor-drag.svg'),_grab] absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border-4 border-white"
              style={{
                zIndex: (() => {
                  let z = cards.length - offset
                  if (offset === 3) z = 1
                  if (offset === 4) z = 2
                  return z
                })(),
                transformOrigin: "center",
              }}
              animate={{
                scale,
                y,
                x,
                rotate,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 24,
              }}
              drag={offset === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > swipeThreshold) handleSwipe("right")
                if (info.offset.x < -swipeThreshold) handleSwipe("left")
              }}
            >
              {card.type === "image" ? (
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  draggable={false}
                  className="absolute h-full w-full object-cover pointer-events-none select-none"
                />
              ) : (
               <video
    ref={(el) => {
        if (el) videoRefs.current[card.id] = el
    }}
    src={card.src}
    muted
    loop
    playsInline
    preload="metadata"
    // preload={offset <= 1 || offset === 5 ? "metadata" : "none"}
    className="absolute h-full w-full object-cover pointer-events-none l select-none"
/>
              )}

              <div className="absolute flex  flex-col gap-2 bottom-0 left-0 right-0 px-2 py-10 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-white font-custom text-heading3 leading-[1] font-semibold">
                   {card.title}
                </h2>

                <span className="bg-white/20 max-w-max font-body text-white text-para leading-[1] px-[4px] py-[2px] rounded-md">
                  {card.label} 
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}