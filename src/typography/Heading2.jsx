import React from "react";
import clsx from "clsx";

function Heading2({ children, className }) {
  return (
    <h2
      className={clsx(
        "text-white break-word text-heading2 leading-[0.95] tracking-[-0.03em] lowercase text-center justify-center font-custom font-black flex flex-wrap",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default Heading2;
