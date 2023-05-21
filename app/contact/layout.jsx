import Navbar from "../secondary-navbar/page";

export default function ContactLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
