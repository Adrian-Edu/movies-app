"use client";

import React, { useState } from "react";

export default function Navbar(props) {
  const searchInput = (e) => {
    e.preventDefault();
    props.receive(e.target.value);
  };

  return (
    <div className="flex flex-row bg-black mb-6 py-5 sticky top-0 ...">
      <div className="w-1/5">
        <a className="btn px-0 md:pl-3 md:ml-0 btn-ghost normal-case text-xl">
          <h1 className="text-xs s:mx-2 leading-6 md:text-lg md:mx-0 2xl:text-2xl  font-bold text-center  text-yellow-400  ">
            LATEST MOVIES
          </h1>
        </a>
      </div>
      <div className=" flex justify-center w-3/5   ">
        <div className="form-control ">
          <div className="input-group ">
            <input
              onChange={searchInput}
              type="text"
              className="md:pr-70 md:ml-0 md:text-2xl pl-2 md:pl-4 lg:pr-80 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Search movie ...."
            />
            <button className="btn px-0 h-6 w-12 md:btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 md:h-6 w-4 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/5 flex justify-end mr-2 ">
        <button className="btn px-1 btn-warning text-xs m:mr-1 l:mr-2 md:text-lg md:px-3 md:ml-20 md:mr-9 lg:mx-2">
          Sing In
        </button>
      </div>
    </div>
  );
}
