"use client";

import React from "react";
import { motion } from "framer-motion";
import ScaleUpContent from "@/effects/ScaleUpContent";
import Magnetic from "@/common/Magnetic";

function AnimatedText({
  preLoaderOut = true,
  text = "mainstream",
  delayChildren = 0.2,
  staggerChildren= 0.03,
}) {
  const parent = {
    initial: {},
    animate: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
    exit: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const child = {
    initial: {
      scale: 0,
      x: 130,
      y: 80,
    },
    exit: {
      scale: 0,
      x: 130,
      y: 80,
    },
    animate: {
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        type: "spring",
        stiffness: 100,
        damping: 13,
      },
    },
  };

  return (
    <div className=" relative h-full w-full  z-[5] bgslate-500">
      <motion.h2
        className="break-word"
        initial="initial"
        exit="exit"
        animate={preLoaderOut ? "animate" : "initial"}
        variants={parent}
        
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
}

export default AnimatedText;