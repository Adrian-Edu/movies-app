import Navbar from "../../components/navbar-secondary/page";
import Footer from "../../components/footer/page"

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}
      <Footer />
      </main>
    </>
  );
}
