import { useHeaderColor } from '@/providers/ColorProvider';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

function ColoredComponent({ children, section = null }) {
  const targetRef = useRef(null);
  const { setActiveSection } = useHeaderColor();

  const inView = useInView(targetRef, {
    once: false,
    amount: 0.42, // adjust trigger amount
  });

useEffect(() => {
  console.log(section, inView);

  if (inView && section) {
    setActiveSection(section);
  }
}, [inView, section, setActiveSection]);
  return <div ref={targetRef}>{children}</div>;
}

export default ColoredComponent;