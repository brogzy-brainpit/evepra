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
        // 'regular': 'clamp(24px, 3vw, 32px)',
        'sm': 'clamp(0.8rem, 0.9vw + 0.3rem, 0.9rem)',
        'base': 'clamp(1rem, 1vw + 0.5rem, 1.125rem)',
        'lg': 'clamp(1.125rem, 1.2vw + 0.5rem, 1.25rem)',
        'xl': 'clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)',
        '2xl': 'clamp(1.5rem, 1.8vw + 0.6rem, 2rem)',
        '3xl': 'clamp(2rem, 2.4vw + 0.6rem, 2.5rem)',
        'button': 'clamp(14px, 3.5vw, 18px)',
        'para': 'clamp(1.2em, 1vw + 0.5em, 2em)',
        'heading1': 'clamp(3em, 6.5vw + 0.5em, 9em)',
        'heading2': 'clamp(2.5em, 5.5vw + 0.5em, 7em)',
        'heading3': 'clamp(2em, 3.5vw + 0.5em, 5em)',
        'display': 'clamp(130px, 33vw, 490px)',
        'footer': 'clamp(40px, 9vw, 80px)',
      },
      margin:{
        'giant': '14rem',
        'para': '24px',
        
      },
       zIndex:{
        'preloader': '9999',
        'header': '999',
        
      },
      lineHeight:{
         'regular': 'clamp(24px, 3vw, 32px)',
         'display': 'clamp(70px, 30vw, 400px)',
        'button': 'clamp(14px, 3.5vw, 18px)',
        'heading': 'clamp(60px, 10vw, 90px)',
        'footer': 'clamp(38px, 9vw, 80px)',
        'heading2': 'clamp(48px, 8vw, 84px)',
        'para': 'clamp(18px, 1vw, 24px)',
      },
      colors:{
        'brand-text':"#1c2218",
        'brand-text-dark':"#f7f0bc",
        'brand-accent':"#EAEDF4", //accent for links, hover state 
        'brand-secondaryx':"#FDEB87", //orange best
        'brand-secondaryy':"#10B981", //emerald best
        'brand-secondary':"#FF0033", //blue best
        'brand-background':"#f7fbe2",
        'brand-backgroundz':"#CFCFCF",
        'brand-background-dark':"#1c2218",
      },
      fontFamily:{
        'body': ["var(--font-dm-sans)", "sans-serif"],
        'custom': ["var(--font-epilogue)", "serif"],
        'custom2': ["var(--font-lora)", "sans-serif"],
        'univers': ['"Univers LT Std"', 'sans-serif'],
        'custom-condensed':['NewSpiritCondensed','Helvetica_Neue', 'Helvetica'],
        // 'body':['Helvetica_Neue, Helvetica'],
        // 'custom':['bebas','Helvetica_Neue', 'Helvetica'],
      }
    },
  },
  plugins: [],
};
