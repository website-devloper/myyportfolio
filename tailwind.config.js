/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',      // Electric Purple
        secondary: '#2A2D43',    // Dark Tech
        accent: '#00E5FF',        // Neon Blue
        'background-color': '#F7F7FA',
      },
    },
  },
  plugins: [],
};