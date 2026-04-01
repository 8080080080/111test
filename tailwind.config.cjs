/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#EEF2F8",
        shell: "#f5f4ff",
        sand: "#e7e4ff",
        bronze: "#2f2482",
        sage: "#2f24ac",
        ink: "#1a1917",
        mist: "#ffffff"
      },
      fontFamily: {
        sans: ["Noto Sans Georgian", "Noto Sans", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Noto Sans Georgian", "Noto Sans", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 40px -22px rgba(26, 25, 23, 0.18)",
        card: "0 18px 30px -18px rgba(26, 25, 23, 0.12)",
        "card-hover": "0 24px 40px -16px rgba(26, 25, 23, 0.14)",
        deep: "0 28px 80px -12px rgba(26, 25, 23, 0.22)",
        subtle: "0 18px 55px -20px rgba(26, 25, 23, 0.06)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top left, rgba(47, 36, 130, 0.12), transparent 44%), radial-gradient(circle at 80% 18%, rgba(47, 36, 172, 0.1), transparent 32%)"
      }
    }
  },
  plugins: []
};
