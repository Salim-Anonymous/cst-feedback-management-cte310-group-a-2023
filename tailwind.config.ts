import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class", "[data-theme=dark]"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindAnimate
  ],
} satisfies Config;
