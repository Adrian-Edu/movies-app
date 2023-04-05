import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={` ${roboto.variable} mx-12 my-12`}>{children}</body>
    </html>
  );
}

// probleme proiect - vercel
// probleme cu next.config.js - Image from next.js - home page + link page
