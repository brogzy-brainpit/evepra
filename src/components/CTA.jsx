"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

const parentVariants = {
  hidden: {},
  inView: {},
  hover: {},
};

const pathVariants1 = {
  hidden: {
    pathLength: 0,
    pathOffset: 0,
  },
  inView: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  hover: {
    pathOffset: [0, 1, 1, 0],
    pathLength: [1, 1, 0, 1],
    transition: {
      times: [0, 0.4, 0.41, 1],
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const pathVariants2 = {
  hidden: {
    pathLength: 0,
    pathOffset: 0,
  },
  inView: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
      ease: "easeOut",
    },
  },
  hover: {
    pathOffset: [0, 1, 1, 0],
    pathLength: [1, 1, 0, 1],
    transition: {
      times: [0, 0.4, 0.41, 1],
      duration: 0.8,
      delay: 0.15,
      ease: "easeInOut",
    },
  },
};

export default function CTA({
  href,
  children,
  className = "",
}) {
  return (
    <Link href={href} className="inline-block">
      <motion.span
        variants={parentVariants}
        initial="hidden"
        whileInView="inView"
        whileHover="hover"
        viewport={{
          once: false,
          amount: 0.5,
        }}
        className={clsx(
          "relative inline-block font-custom2 font-normal italic text-heading1 mr-[0.3em] cursor-pointer",
          className
        )}
      >
        {children}

        <span className="absolute left-0 top-full w-full translate-y-[5%] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
    </Link>
  );
}