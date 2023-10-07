import Link from "next/link";

export default function Navbar(props) {
  return (
    <nav className="flex flex-row bg-black mb-6 py-5 sticky top-0 ...">
      <div className="w-1/5">
        <Link
          href="/"
          className="btn px-0 md:pl-3 md:ml-0 btn-ghost normal-case text-xl"
        >
          <h1 className="text-xs s:mx-2 leading-6 md:text-lg md:mx-0 2xl:text-2xl  font-bold text-center  text-yellow-400  ">
            LATEST MOVIES
          </h1>
        </Link>
      </div>
      <div className=" flex justify-center w-3/5 "></div>
      <div className="w-1/5 flex justify-end mr-2 ">
        <Link href="/pages/login">
          <button
            type="button"
            className="btn px-1 btn-warning text-xs m:mr-1 l:mr-2  md:px-3 md:ml-20 md:mr-9 lg:text-lg lg:mx-2"
          >
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
}
