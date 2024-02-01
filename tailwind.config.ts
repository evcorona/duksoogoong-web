import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D0DF00',
      },
      keyframes: {
        enterFromBelow: {
          '0%': {
            transform: 'translate3d(0px, 40px, 0px)',
            opacity: '0',
          },
          '100%': {
            transform: 'none',
            opacity: '1',
          },
        },
        appear: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        enterFromBelow: 'enterFromBelow 900ms 0ms 1 both',
        appear: 'appear 900ms 0ms 1 both',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

export default config;
