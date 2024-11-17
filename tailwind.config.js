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
        background: "var(--background)",
        blackPrimary: "var(--black-primary)",
        blackSecondary: "var(--black-secondary)",

        redPrimary: "var(--red-primary)",
        redSecondary: "var(--red-secondary)",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero.png')",
        "banner-1": "url('/images/banner-1.png')",
        "banner-2": "url('/images/banner-2.png')",
        support: "url('/images/support.png')",
      },
    },
  },
  plugins: [],
};
