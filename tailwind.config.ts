module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 8px rgba(255, 100, 100, 0.85)',
      },
      keyframes: {
        fadeIn : {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut : {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
        'fadeOut': 'fadeOut 0.5s ease-in-out',
      },
      animationDelay: {
        'delay-1': '1s',
        'delay-2': '2s',
        'delay-3': '3s',
        'delay-4': '4s',
      },
      fontFamily: {
        rosarivo: ['Rosarivo', 'normal'],
        'dm-serif': ['DM Serif Display', 'serif'],
      },
      colors: {
        'primary': "#e9eef1",
        'text': 'neutral-950',
        'green': '#1B9F5D',
        'redText': '#ee271f',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      screens: {
        'navbar': '707px',
        'greet': '500px',
      },
      margin : {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },
      fontSize: {
        'xxs': '0.5rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '7xl': '7rem',
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem',
        '15xl': '15rem',
    },
  },
},
  plugins: [],
};