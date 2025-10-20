"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

const cards = [
  {
    id: 1,
    title: "Alex Rivera",
    age: 28,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-portrait-person-casual-ydONC45Ij8txKVZPjnU4EMPL5Q0axz.jpg",
    label: "Adventure seeker | Coffee enthusiast | Dog lover",
  },
  {
    id: 2,
    title: "Jordan Chen",
    age: 26,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/diverse-friends-city-cafe-trjrPcJB5aZ2Bq7SGWf5WUSprmit38.png",
    label: "Artist | Traveler | Foodie",
  },
  {
    id: 3,
    title: "Sam Taylor",
    age: 30,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-workspace-fPRdiX2SVrHOrIFFfk62G3mRUeZYIZ.png",
    label: "Tech enthusiast | Gamer | Music lover",
  },
  {
    id: 4,
    title: "Morgan Lee",
    age: 27,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/red-fabric-material-texture-qImvrJtZs5nziyhdPC0RrSbY5ct2X3.jpg",
    label: "Fitness junkie | Bookworm | Nature lover",
  },
  {
    id: 5,
    title: "Casey Brooks",
    age: 29,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/technology-innovation-eEsIt5OvqzfmU3baUCPoPNvLigQB1o.jpg",
    label: "Photographer | Dancer | Beach bum",
  },
]

export function SwipeableCards() {
  const [current, setCurrent] = useState(0)

  const handleSwipe = (direction) => {
    if (direction === "right") {
      setCurrent((prev) => (prev + 1) % cards.length)
    } else if (direction === "left") {
      setCurrent((prev) => (prev - 1 + cards.length) % cards.length)
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black overflow-hidden">
      <div className="relative w-[330px] h-[520px] select-none">
        {cards.map((card, index) => {
          const offset = (index - current + cards.length) % cards.length // wrap-around
          let scale = 1 - Math.abs(offset) * 0.06
          let y = offset * 40
          let rotate = offset * 4
          let x = offset * 50

          // custom tweak for visibility
          if (offset === 4 || offset ===3) {
            // side cards (2 & 5)
            // rotate =offset===4? offset * 5:offset * 10
            rotate =offset===4? 14:20
              scale=offset===4? 0.88:0.8;
            x = offset === 4 ? 50 : 100
            y = 0
          }
          if (offset === 1 || offset === 2) {
            // middle ones (3 & 4)
          // rotate =offset===1? offset * -10:offset * -20
            rotate =offset===1? -14:-20

          scale=offset===1? 0.88:0.8;
            // x =  -60
            x = offset === 2 ? -100 : -50
            y = 0
          }

          return (
            <motion.div
              key={card.id}
              className="cursor-[url('https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68384fb014875f192dfcef4b_cursor-drag.svg'),_grab] absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border-2 border-white"
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
                opacity: 1, // full opacity for all cards
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 24,
              }}
              drag={offset === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 120) handleSwipe("right")
                if (info.offset.x < -120) handleSwipe("left")
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none select-none"
              />
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
             {offset}
             </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-white text-lg font-semibold">
                  {card.title}, {card.age}
                </h2>
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md">
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
