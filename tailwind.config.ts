module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
        'fadeOut': 'fadeOut 0.5s ease-in-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primaryShadcn: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
};