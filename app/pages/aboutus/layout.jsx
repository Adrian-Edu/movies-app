import Navbar from "../../components/navbar-secondary/page";

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
