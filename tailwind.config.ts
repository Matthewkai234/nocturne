import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '13': '3.25rem',  
        '14': '3.5rem', 
        '15': '3.75rem',  
        '16': '4rem',     
        '17': '4.25rem',  
        '18': '4.5rem',
        '19': '4.75rem',  
        '20': '5rem', 
      },
    },
  },
  plugins: [],
} satisfies Config;
