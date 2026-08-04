"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import clsx from "clsx"

// Shared animation configurations
const pathVariants1 = {
  // 1. Draws automatically from left to right when it enters the viewport
  inView: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
  // 2. The multi-step keyframe loop executed on hover:
  // Wipes away completely to the right, resets to 0 instantly, then draws back in from the left
  hover: {
    pathOffset: [0, 1, 1, 0],
    pathLength: [1, 1, 0, 1],
    transition: {
      times: [0, 0.4, 0.41, 1], // Precise timing offsets for sequential execution
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

const pathVariants2 = {
  // Staggered initial load for the second path
  inView: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0.7, delay: 0.25, ease: "easeOut" }
  },
  // Slightly staggered hover cycle for path 2
  hover: {
    pathOffset: [0, 1, 1, 0],
    pathLength: [1, 1, 0, 1],
    transition: {
      times: [0, 0.4, 0.41, 1],
      duration: 0.8,
      delay: 0.15, // Sequential separation delay
      ease: "easeInOut"
    }
  }
}

export default function CTA({
  href,
  children,
  className = "",
  external = false,
}) {
  const content = (
    <motion.span
      initial={{ pathLength: 0, pathOffset: 0 }}
      whileInView="inView"
      whileHover="hover"
      viewport={{ once: false }} // Allows re-triggering if scrolled back into view
      className={clsx(
        "relative inline-block font-custom2 font-normal italic text-heading1 mr-[0.3em] cursor-pointer",
        className
      )}
    >
      {children}

      <span className="absolute left-0 top-full w-full translate-y-[5%] pointer-events-none">
        <svg
          xmlns="http://w3.org"
          width="100%"
          viewBox="0 0 169 10"
          fill="none"
        >
          <motion.path
            variants={pathVariants1}
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1 6.5661C56.3941 3.06082 112.187 1.20095 168 0.999878"
          />

          <motion.path
            variants={pathVariants2}
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M32.1313 8.63371C68.2147 6.92799 104.462 6.13378 140.695 6.25107"
          />
        </svg>
      </span>
    </motion.span>
  )

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  )
}
