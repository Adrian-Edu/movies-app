import Navbar from "../../components/navbar-login/page";
import Footer from "../../components/footer/page";

export default function Login({ children }) {
  return (
    <main className="h-screen">
      <Navbar />
      {children}
    </main>
  );
}
