import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Navbar(props) {
  return (
    <nav className="flex justify-center items-center  bg-black sticky top-0">
      <Link
        href="/"
        className="btn px-0 md:pl-3 md:ml-0 btn-ghost normal-case text-xl"
      >
        <button className="m-1 text-yellow-400 text-base font-bold ">
          <IoIosArrowBack />
        </button>
        <h1 className=" text-xl leading-6 l:block  md:text-lg md:mx-0  2xl:text-xl font-bold text-center  text-yellow-400 hover:text-white ">
          Go back
        </h1>
      </Link>
    </nav>
  );
}
