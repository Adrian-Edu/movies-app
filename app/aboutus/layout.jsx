import Navbar from "../secondary-navbar/page";

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
