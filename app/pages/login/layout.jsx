import Navbar from "../../components/navbar-login/page";

export default function Login({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
