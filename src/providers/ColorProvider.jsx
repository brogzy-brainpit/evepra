"use client";
import { createContext, useContext, useState } from "react";

const HeaderColorContext = createContext();

export function ColorProvider({ children }) {
  const [activeSection, setActiveSection] = useState("default");
  return (
    <HeaderColorContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </HeaderColorContext.Provider>
  );
}

export function useHeaderColor() {
  return useContext(HeaderColorContext);
}
