import Navbar from "../secondary-navbar/page";

export default function MovieLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
