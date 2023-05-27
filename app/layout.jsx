import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "./footer/page.jsx";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={` ${roboto.variable}  md: pb-12 bg-cyan-300`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

/*
1. Modific modul in care aduc datele conform metodologiei
2. Inteleg cum pot trimite datele prin fetche datele
*/
