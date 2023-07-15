import Navbar from "../../components/navbar-secondary/page";
import Footer from "../../components/footer/page";

export default function MovieLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
