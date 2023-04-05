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
      <body
        className={` ${roboto.variable}  mx-4 max-md:flex justify-center ...  md:mx-6 my-12  `}
      >
        {children}
      </body>
    </html>
  );
}
