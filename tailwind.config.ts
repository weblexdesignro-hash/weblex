import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        mist: "#6B6B6B",
        cream: "#FAFAF8",
        brand: {
          DEFAULT: "#3D5AFE",
          dark: "#2D3AF0",
        },
        lime: "#B4F461",
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(20,20,20,0.12)",
        card: "0 4px 24px -8px rgba(20,20,20,0.08)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(61,90,254,0.14) 0%, rgba(250,250,248,0) 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  // Stilizeaza automat continutul HTML generat din Lexical (titluri, liste, paragrafe)
  // in articolele de blog — fara acest plugin, clasa "prose" folosita in pagina de
  // blog nu are niciun efect, iar titlurile si listele arata identic cu paragrafele.
  plugins: [typography],
};

export default config;
