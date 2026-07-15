/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D2846',
        panel: '#123253',
        paper: '#EDEAE0',
        faint: '#8FA7C4',
        wire: '#24466B',
        stamp: '#F2A93C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #EDEAE010 1px, transparent 1px), linear-gradient(to bottom, #EDEAE010 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-cell': '40px 40px',
      },
    },
  },
  plugins: [],
}
