"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import clsx from "clsx"

export default function CTA({
  href,
  children,
  className = "",
  external = false,
}) {
  const content = (
    <span
      className={clsx(
        "relative inline-block font-custom2 font-normal italic text-heading1 mr-[0.3em]",
        className
      )}
    >
      {children}

      <span className="absolute left-0 top-full w-full translate-y-5%] pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 169 10"
          fill="none"
        >
          <path
            d="M1 6.5661C56.3941 3.06082 112.187 1.20095 168 0.999878"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            d="M32.1313 8.63371C68.2147 6.92799 104.462 6.13378 140.695 6.25107"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  )
}