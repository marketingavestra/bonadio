/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        v4: {
          black:   '#000000',
          dark:    '#0A0A0A',
          card:    '#111111',
          border:  'rgba(255,255,255,0.08)',
          blue:    '#0070FF',
          accent:  '#00A3FF',
          gold:    '#F5A623',
          green:   '#27AE60',
        },
        navy: {
          darkest: '#050505',
          dark:    '#0A0A0A',
          DEFAULT: '#0D0D0D',
          mid:     '#111111',
          medium:  '#161616',
          light:   '#1A1A1A',
          lighter: '#222222',
        },
        success: {
          DEFAULT: '#27AE60',
          hover:   '#2ECC71',
          glow:    'rgba(39,174,96,0.50)',
        },
        sky: {
          DEFAULT: '#333333',
          light:   '#444444',
        },
        cream: {
          DEFAULT: '#FFFFFF',
          light:   '#F0F0F0',
        },
        muted: 'rgba(255,255,255,0.6)',
        gold:  '#F5A623',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(0,112,255,0.20)',
        'glow-green': '0 0 40px rgba(39,174,96,0.30)',
        'card': '0 4px 32px rgba(0,0,0,0.50)',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '880px',
      },
      animation: {
        'pulse-cta': 'pulse-cta 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-cta': {
          '0%, 100%': { boxShadow: '0 6px 28px rgba(224,224,208,0.22)' },
          '50%':       { boxShadow: '0 8px 44px rgba(224,224,208,0.44)' },
        },
      },
    },
  },
  plugins: [],
}
