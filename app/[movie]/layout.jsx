import Navbar from "../components/navbar-secondary/page";

export default function MovieLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
