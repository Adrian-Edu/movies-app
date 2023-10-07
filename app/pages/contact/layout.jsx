import Navbar from "../../components/navbar-login/page";
import Footer from "../../components/footer/page"

export default function ContactLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}
      <Footer /></main>
    </>
  );
}
