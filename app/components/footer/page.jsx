import Link from "next/link";

export default function Footer() {
  return (
    <section className="text-center text-base md:text-xl  lg:text-2xl  bg-black text-yellow-400 py-5 relative ">
      <div className="grid leading-10">
        <Link className="link link-hover" href="/">
          Home Page
        </Link>
        <Link className="link link-hover" href="/pages/aboutus">
          About us
        </Link>
        <Link className="link link-hover" href="/pages/contact">
          Contact
        </Link>
        <h1 className="leading-10" href="/">
          Copyright © 2023 - All right reserved by <br /> LATEST MOVIES
        </h1>
      </div>
    </section>
  );
}
