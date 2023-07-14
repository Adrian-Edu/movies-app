import "./styles/globals.css";
import { Roboto } from "next/font/google";
import Footer from "./components/footer/page.jsx";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={` ${roboto.variable}  md: pb-12 bg-cyan-300 h-fit`}>
        <main className="h-96 l:h-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
