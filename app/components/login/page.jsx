import Navbar from "../../components/navbar-login/page";

export default function page() {
  return (
    <>
      <Navbar />
      <section className=" flex justify-center content-center">
        <div className="bg-yellow-400 w-3/4 md:w-1/4">
          <h1>Autentificare</h1>
        </div>
      </section>
    </>
  );
}
