/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig }
 **/
const tailwindConfig = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = tailwindConfig
