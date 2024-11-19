/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#E0E0E0",
        accent: {
          teal: "#1DE9B6",
          gold: "#FFB300",
        },
        navbar: "#1F1F1F",
        section: "#212121",
        border: "#333333",
        link: "#64FFDA",
        button: "#FFD740",
        error: "#FF5252",
        text: {
          primary: "#FFFFFF",
          secondary: "#B0BEC5",
        },
      },
    },
  },
  plugins: [],
}