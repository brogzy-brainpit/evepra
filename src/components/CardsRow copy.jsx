"use client"

import { motion, useAnimation } from "framer-motion"
import { useRef, useState } from "react"

const Card = ({ index }) => {
  const controls = useAnimation()
  const cardRef = useRef(null)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
  const [lastTime, setLastTime] = useState(0)

  const handleMouseMove = (e) => {
    setLastPos({ x: e.clientX, y: e.clientY })
    setLastTime(performance.now())
  }

  const handleMouseEnter = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const now = performance.now()
    const dt = Math.max(now - lastTime, 16)

    const velocityX = (e.clientX - lastPos.x) / dt
    const velocityY = (e.clientY - lastPos.y) / dt

    // Relative position to center of card
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy

    const moveScale = 80
    const rotateScale = 20

    const moveX = velocityX * moveScale + (dx / rect.width) * 40
    const moveY = velocityY * moveScale + (dy / rect.height) * 40

    // Animate with depth tilt
    controls.start({
      x: moveX,
      y: moveY,
      rotateX: (-dy / rect.height) * rotateScale,
      rotateY: (dx / rect.width) * rotateScale,
      boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
      transition: { type: "spring", stiffness: 150, damping: 12 },
    })

    // Bring back smoothly
    setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
        transition: { type: "spring", stiffness: 150, damping: 20 },
      })
    }, 250)
  }

  const handleMouseLeave = () => {
    controls.start({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 150, damping: 20 },
    })
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative w-64 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 shadow-lg cursor-pointer overflow-hidden"
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        marginLeft: index === 0 ? 0 : -60, // overlap
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* light reflection layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold tracking-wide">
        Card {index + 1}
      </div>
    </motion.div>
  )
}

export function CardsRow() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c]">
      {[...Array(4)].map((_, i) => (
        <Card key={i} index={i} />
      ))}
    </div>
  )
}
