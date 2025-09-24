/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b0b0f',   // deep near-black
        // softer magenta -> indigo gradient tokens
  secondary: '#8b5cf6', // single soft purple
        light: '#ffffff',     // Blanc
        accent: '#6ee7b7',    // soft green accent
        muted: '#9ca3af'
      },
      fontFamily: {
        poppins: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 10px 30px rgba(168,85,247,0.12)',
        'card': '0 6px 20px rgba(2,6,23,0.6)'
      }
    },
  },
  plugins: [],
}