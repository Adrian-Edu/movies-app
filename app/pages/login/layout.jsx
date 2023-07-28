import Navbar from "../../components/navbar-login/page";

export default function Login({ children }) {
  return (
    <main className="h-screen">
      <Navbar />
      {children}
    </main>
  );
}
