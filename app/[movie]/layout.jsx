import Navbar from "../components/secondary-navbar/page";

export default function MovieLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
