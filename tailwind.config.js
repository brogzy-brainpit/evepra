/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    
    extend: {
      keyframes: {
    'color-fade': {
      '0%': { color: '#000' },
      '50%': { color: '#ff6600' },
      '100%': { color: '#000' },
    },
  },
  animation: {
    'color-fade': 'color-fade 3s ease-in-out infinite',
  },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
         fontSize:{
        'button': 'clamp(14px, 3.5vw, 18px)',
        'para': 'clamp(1em, 1.2vw + 0.2em, 2em)',
        'heading1': 'clamp(3em, 10vw, 12em)',
        'heading2': 'clamp(2.2em, 5vw + 0.5em, 6em)',
        'heading3': 'clamp(2.16em, 2.5vw + 0.5em, 3em)',
        'display': 'clamp(6em, 20vw + 1vw, 40em)',
        'footer': 'clamp(40px, 9vw, 80px)',
      },
       zIndex:{
        'preloader': '9999999',
        'header': '99999',
        
      },
      colors:{
          'brand-text':"#1c2218",
        'brand-white':"#f5fbe7",
        'brand-secondary':"#A80D2C", //blue best
        'brand-accent':"#154138", //accent for links, hover state 
        'brand-black':"#101718",
        'brand-text':"#1c2218",
      },
      fontFamily:{
        'body': ["var(--font-dm-sans)", "sans-serif"],
        'custom': ["var(--font-epilogue)", "serif"],
        'custom2': ["var(--font-lora)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
