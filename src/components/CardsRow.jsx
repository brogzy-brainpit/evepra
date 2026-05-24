"use client"

import { motion, useAnimation } from "framer-motion"
import { useRef, useState } from "react"

function Card({ index }) {
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

    // Velocity of mouse entry
    const velocityX = (e.clientX - lastPos.x) / dt
    const velocityY = (e.clientY - lastPos.y) / dt

    // Direction of mouse relative to card center
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy

    // 💨 Boosted movement and rotation multipliers
    const moveScale = 280
    const rotateScale = 45

    // Move based on velocity + direction
    const moveX = velocityX * moveScale
    const moveY = velocityY * moveScale

    // Rotation based on entry direction
    const rotateX = velocityY * -rotateScale // tilt opposite Y entry
    const rotateY = velocityX * rotateScale  // tilt opposite X entry

    controls.start({
      x: moveX,
      y: moveY,
      rotateX,
      rotateY,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    })

    // Smooth return
    setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        transition: { type: "spring", stiffness: 150, damping: 20 },
      })
    }, 400)
  }

  const handleMouseLeave = () => {
    controls.start({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    })
  }

  return (
    <motion.div
      ref={cardRef}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-96 rounded-3xl border border-white/10 shadow-xl cursor-pointer overflow-hidden bg-[#121212]"
      style={{
        marginLeft: index === 0 ? 0 : -80,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#222] to-[#0f0f0f]" />

      {/* Image layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?auto=format&fit=crop&w=800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translateZ(-30px)",
        }}
      />

      {/* Content layer */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center"
        style={{ transform: "translateZ(40px)" }}
      >
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Card {index + 1}
        </h2>
        <p className="text-white/70 text-sm max-w-[80%]">
          Directional tilt & boosted velocity
        </p>
      </motion.div>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-3xl border border-white/10" />
    </motion.div>
  )
}

export function CardsRow() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#000000] to-[#1a1a1a]">
      {[...Array(3)].map((_, i) => (
        <Card key={i} index={i} />
      ))}
    </div>
  )
}
