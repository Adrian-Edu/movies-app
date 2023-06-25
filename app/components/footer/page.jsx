import Link from "next/link";

export default function Footer() {
  return (
    <section className="text-center text-lg  md:text-3xl  bg-black text-yellow-400 py-5 relative bottom-[-50px] ">
      <div className="grid leading-10">
        <Link className="link link-hover" href="/">
          Home Page
        </Link>
        <Link className="link link-hover" href="/components/aboutus">
          About us
        </Link>
        <Link className="link link-hover" href="/components/contact">
          Contact
        </Link>
        <h1 className="leading-10" href="/">
          Copyright © 2023 - All right reserved by <br /> LATEST MOVIES
        </h1>
      </div>
    </section>
  );
}
