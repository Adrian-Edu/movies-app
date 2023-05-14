import Link from "next/link";

export default function Footer() {
  return (
    <section className="text-center text-lg  md:text-3xl  bg-black text-yellow-400 py-5 relative bottom-[-50px] ">
      <div className="grid leading-10">
        <Link className="link link-hover" href="/">
          Home Page
        </Link>
        <Link className="link link-hover" href="/aboutus">
          About us
        </Link>
        <Link className="link link-hover" href="/contact">
          Contact
        </Link>
      </div>
      <div>
        <p className="leading-10">
          Copyright © 2023 - All right reserved by <br /> LATEST MOVIES
        </p>
      </div>
    </section>
  );
}
