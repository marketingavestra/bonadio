/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        v4: {
          black:   '#08080A',
          dark:    '#0F1014',
          card:    '#16171C',
          border:  'rgba(255,255,255,0.06)',
          blue:    '#C9A84C',   // gold — replaces blue throughout
          accent:  '#E8C95A',   // gold-bright
          gold:    '#C9A84C',
        },
        gold: {
          DEFAULT: '#C9A84C',
          bright:  '#E8C95A',
          dim:     'rgba(201,168,76,0.15)',
        },
        navy: {
          darkest: '#06060A',
          dark:    '#08080A',
          DEFAULT: '#0F1014',
          mid:     '#16171C',
          medium:  '#1C1D23',
          light:   '#222330',
          lighter: '#2A2B35',
        },
        success: {
          DEFAULT: '#27AE60',
          hover:   '#2ECC71',
          glow:    'rgba(39,174,96,0.50)',
        },
        sky: {
          DEFAULT: '#C9A84C',
          light:   '#C9A84C',
        },
        cream: {
          DEFAULT: '#E8E6E1',
          light:   '#E8E6E1',
        },
        muted: 'rgba(232,230,225,0.55)',
      },
      boxShadow: {
        'glow-gold':  '0 4px 40px rgba(201,168,76,0.35)',
        'glow-blue':  '0 4px 40px rgba(201,168,76,0.35)',
        'glow-green': '0 0 40px rgba(39,174,96,0.30)',
        'card':       '0 4px 32px rgba(0,0,0,0.50)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Montserrat', 'serif'],
        body:    ['"DM Sans"', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '880px',
      },
      animation: {
        'pulse-cta': 'pulse-cta 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-cta': {
          '0%, 100%': { boxShadow: '0 4px 30px rgba(201,168,76,0.25)' },
          '50%':       { boxShadow: '0 4px 44px rgba(201,168,76,0.50)' },
        },
      },
    },
  },
  plugins: [],
}
