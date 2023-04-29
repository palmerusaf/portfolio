const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        hippie: ['hippie'],
        friends: ['friends'],
        galaxy: ['galaxy'],
        astrospace: ['astrospace'],
        glitch: ['glitch'],
        pixel: ['pixel'],
        thunder: ['thunder'],
      },
      dropShadow: {
        green: '1px 1px 2px #22c55e',
        purple: '1px 1px 2px #a855f7',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function({ addVariant }) {
      // here is your CSS selector - could be anything
      // in this case it is `.theme` element
      // with `.theme--red` class (both present)
      addVariant('hacker', 'body.hacker &');
    }),
  ],
};
