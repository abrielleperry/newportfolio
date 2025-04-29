// app/fonts.ts
import localFont from "next/font/local";

export const aileron = localFont({
  src: [
    {
      path: "./fonts/Aileron-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Aileron-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Aileron-Bold.ttf", // Optional backup
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-aileron",
});

export const cursive = localFont({
  src: "./fonts/cursive.woff2",
  display: "swap",
  variable: "--font-cursive", // This creates a CSS variable we can use
});
