"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Column({ direction = "up", className = "", items }) {
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  const [itemHeight, setItemHeight] = useState(0);
  const refs = useRef([]);

  // measure rendered element height
  useEffect(() => {
    if (refs.current[0]) {
      setItemHeight(refs.current[0].offsetHeight + 16); // include gap
    }
  }, []);

  const loopHeight = items.length * itemHeight;

  // set initial offset for downward columns
  useEffect(() => {
    if (direction === "down" && itemHeight) {
      y.set(-loopHeight);
    }
  }, [direction, loopHeight, y, itemHeight]);

  const speed =
    direction === "up" ? (hovered ? -10 : -40) : hovered ? 10 : 40;

  useAnimationFrame((_, delta) => {
    if (!itemHeight) return;
    const deltaInSeconds = delta / 1000;
    let newY = y.get() + speed * deltaInSeconds;

    if (direction === "up") {
      if (newY <= -loopHeight) newY += loopHeight;
    } else {
      if (newY >= 0) newY -= loopHeight;
    }

    y.set(newY);
  });

  return (
    <div
      className={`overflow-hidden h-full flex flex-col gap-2 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="flex flex-col gap-4 h-full justify-center items-center bg-green-400"
        style={{ y }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="h-[280px]  max-w-[95%]"
          >
              <Image
                src={item.src}
                alt=""
                width={500}
                height={500}
                className="rounded-lg  w-full object-cover object-top"
              />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeGrid() {

  const items1 = [
    { type: "image", src: "/images/service01.png" },
    { type: "image", src: "/images/service05.png" },
    { type: "image", src: "/images/service04.png" },
  ];
   const items2 = [
    { type: "image", src: "/images/service05.png" },
    { type: "image", src: "/images/service02.png" },
    { type: "image", src: "/images/service03.png" },
  ];

  const items3 = [
    { type: "image", src: "/images/4.jpg"  },
    { type: "image", src: "/videos/vid4.mp4" },
    { type: "image", src: "/images/1.jpeg"  },
  ];

  const items4 = [
    { type: "image", src: "/images/5.jpg" },
     { type: "video", src: "/videos/vid3.mp4" },
    { type: "image", src: "/images/7.jpeg" },
  ];

  return (
    <div className="grid overflow-hidden h-full grid-cols-2 md:grid-cols-2 gap-[2px] px-[4px] md:gap-[8px]">
      <Column items={items1} direction="up" />
      <Column items={items2} direction="down" />
      {/* hidden on mobile, visible from md up */}
      {/* <Column items={items3} direction="up" className="hidden md:flex" />
      <Column items={items4} direction="down" className="hidden md:flex" /> */}
    </div>
  );
}
