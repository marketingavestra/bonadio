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
          blue:    '#8B5CF6',   // purple — accent principal
          accent:  '#A78BFA',   // purple-bright
          gold:    '#8B5CF6',   // alias para compatibilidade
        },
        purple: {
          deep:    '#2a1359',
          mid:     '#4B21A6',
          DEFAULT: '#8B5CF6',
          bright:  '#A78BFA',
          dim:     'rgba(139,92,246,0.12)',
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
          DEFAULT: '#8B5CF6',
          light:   '#8B5CF6',
        },
        cream: {
          DEFAULT: '#E8E6E1',
          light:   '#E8E6E1',
        },
        muted: 'rgba(232,230,225,0.55)',
      },
      boxShadow: {
        'glow-gold':   '0 4px 40px rgba(139,92,246,0.35)',
        'glow-blue':   '0 4px 40px rgba(139,92,246,0.35)',
        'glow-purple': '0 4px 40px rgba(139,92,246,0.40)',
        'glow-green':  '0 0 40px rgba(39,174,96,0.30)',
        'card':        '0 4px 32px rgba(0,0,0,0.50)',
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
          '0%, 100%': { boxShadow: '0 4px 30px rgba(139,92,246,0.30)' },
          '50%':       { boxShadow: '0 4px 44px rgba(139,92,246,0.55)' },
        },
      },
    },
  },
  plugins: [],
}
