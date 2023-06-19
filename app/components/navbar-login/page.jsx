import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Navbar(props) {
  return (
    <nav className="flex bg-black mb-6 py-5 sticky top-0 ...">
      <div className="w-2/6">
        <Link
          href="/"
          className="btn px-0 md:pl-3 md:ml-0 btn-ghost normal-case text-xl"
        >
          <button className="m-2 text-yellow-400 text-base font-bold ">
            <IoIosArrowBack />
          </button>
          <h1 className="hidden text-sm leading-6 l:block  md:text-lg md:mx-0  2xl:text-xl font-bold text-center  text-yellow-400 hover:text-white ">
            Go back
          </h1>
        </Link>
      </div>
      <div className="w-2/6 flex justify-center">
        <Link
          href="/"
          className="btn px-0 md:pl-3 md:ml-0 btn-ghost normal-case text-xl"
        >
          <h1 className="text-base s:mx-2 leading-6 md:text-lg md:mx-0 2xl:text-2xl  font-bold text-center  text-yellow-400 ">
            LATEST MOVIES
          </h1>
        </Link>
      </div>
      <div className="w-2/6"></div>
    </nav>
  );
}
