/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig }
 **/
const tailwindConfig = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = tailwindConfig
