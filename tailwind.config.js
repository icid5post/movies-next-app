/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const primary = '#ce080f';


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      yelow: {
        700: "#F5C521"
      },
      gray: {
        300: "#999AA5",
        500: "#999AA5",
        600: "#66676E",
        700: "#39393f",
        800: "#242529",
        900: "#191B1F",
        950: "#101215",
      }
    },
    extend: {
      spacing: {
        0.5: "0.12rem",
        layout: "2.75rem",
      },
      fontSize: {
        '2lg': '1.38rem'
      },
      borderRadius: {
        'image': '0.5rem',
        'layout': '0.8rem'
      },
      transactionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      keyframes: {
        fade: {
          from: {opacity: 0},
          to: {opacity: 1}
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        fade: 'fade .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
      }
    },

  },

  plugins: [
      plugin(({addComponents, theme, addUtilities}) => {
          addComponents({
            '.btn-primary': {
              backgroundColor: primary,
              color: '#fff',
              borderRadius: '0.65rem',
              transition: 'background-color .3s ease-in-out',
              '&:hover': {
                backgroundColor: '#ff0009'
              }
            }
          })
          addComponents({
            '.text-shadow': {
              textShadow: '1px 1px rgba(0,0,0,0.4)'
            },
            '.border-r-transparent': {
              borderColor: 'transparent'
            }
          })
      })
  ],
}
