import Navbar from "../../components/navbar-secondary/page";

export default function ContactLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
