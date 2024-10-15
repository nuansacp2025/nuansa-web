import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-a': '#1F4C4A',
        'green-b': '#1A7F7D',
        'orange-a': '#ECBF7F',
      },
      fontFamily: {
        'myriad': ['Myriad Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(500%)' },
          '100%': { transform: 'translateY(0)' },
        },
    },
    animation: {
      'slide-up': 'slide-up 1s ease-out',
    },
    },
  },
  plugins: [],
};
export default config;
