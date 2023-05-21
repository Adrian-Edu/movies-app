"use client";

import Link from "next/link";

export default function Navbar(props) {
  return (
    <div className="flex flex-row bg-black mb-6 py-5 sticky top-0 ...">
      <div className="w-1/5">
        <a className="btn px-0 md:pl-3 md:ml-0 btn-ghost normal-case text-xl">
          <Link href="/">
            <h1 className="text-xs s:mx-2 leading-6 md:text-lg md:mx-0 2xl:text-2xl  font-bold text-center  text-yellow-400  ">
              LATEST MOVIES
            </h1>
          </Link>
        </a>
      </div>
      <div className=" flex justify-center w-3/5   "></div>
      <div className="w-1/5 flex justify-end mr-2 ">
        <button className="btn px-1 btn-warning text-xs m:mr-1 l:mr-2 md:text-lg md:px-3 md:ml-20 md:mr-9 lg:mx-2">
          Sing In
        </button>
      </div>
    </div>
  );
}
