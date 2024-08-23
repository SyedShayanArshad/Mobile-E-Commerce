/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'system-ui', 'sans-serif'], // Default sans-serif
        sfpro: ['"SF Pro Display"', 'sans-serif'], // Custom SF Pro font class
        figtree: ['Figtree', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
