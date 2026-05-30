"use client"

import { motion, useAnimation } from "framer-motion"
import { useRef, useState } from "react"

export default function InteractiveCard({ children, className = "", style = {} }) {
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

    // const moveScale = 280
    const moveScale = 380
    const rotateScale = 45

    const moveX = velocityX * moveScale
    const moveY = velocityY * moveScale
    const rotateX = velocityY * -rotateScale
    const rotateY = velocityX * rotateScale

    controls.start({
      x: moveX,
      y: moveY,
      rotateX,
      rotateY,
      transition: { type: "spring", stiffness: 220, damping: 10 },
    })

    setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        transition: { type: "spring", stiffness: 120, damping: 10 },
      })
    }, 400)
  }

  const handleMouseLeave = () => {
    controls.start({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 120, damping: 9,mass:.3 },
    })
  }

  return (
    <motion.div
      ref={cardRef}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer select-none ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
