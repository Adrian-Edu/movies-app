"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "../../../api/store";

export default function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [res, setRes] = useState("");
  const logIn = useStore((state) => state.logIn);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.customKey}`
      );

      const res = await data.json();
      return setRes(res);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Link href="/">
        <button onClick={logIn} className="btn bg-red-700 ml-2 mb-2 text-xl">
          Go home
        </button>
      </Link>
      <div className="s:px-2 pl-6 px-6 h-full ">
        <div className="text-xl">
          <h2 className="text-2xl  font-bold ">{res.title}</h2>
          <h1>{res.release_date}</h1>
          <h2>Runtime: {res.runtime} minutes</h2>
          <h2 className="bg-green-600 inline-block my-2 py-2 px-4">
            {res.status}
          </h2>
          <Image
            loading="lazy"
            className="my-6 mx-0"
            src={imagePath + res.backdrop_path}
            width={500}
            height={500}
            alt={res.title}
            
          />
          <p className="mb-5">{res.overview}</p>
        </div>
      </div>
    </>
  );
}
