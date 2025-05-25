// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        hind: ['"Hind"', 'sans-serif'],
        sofia: ['"Sofia"','cursive'],
        sevillana: ['"Sevillana"','cursive'],
        lobster: ['"Lobster Two"','sans-serif'],
        sail: ['"Sail"','system-ui'],
      },
    },
  },
  plugins: [],
}
