/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', "sans-serif"], // Montserrat será la fuente predeterminada
      },
      colors: {
        /* 🎨 Variables de color */
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-soft": "var(--color-primary-soft)",
        "primary-accent": "var(--color-primary-accent)",

        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-soft": "var(--color-secondary-soft)",
        "secondary-accent": "var(--color-secondary-accent)",

        /* 📝 Texto y fondos */
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
