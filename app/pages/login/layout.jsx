import Navbar from "../../components/navbar-goback/page";

export default function Login({ children }) {
  return (
    <main className="h-screen">
      <Navbar />
      {children}
    </main>
  );
}
