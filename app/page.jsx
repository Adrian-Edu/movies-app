"use client";

import Movie from "./Movie";
import Navbar from "./navbar/page.jsx";
import Footer from "./footer/page.jsx";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=6e4710cc48cf4a172ec811cb0202c758`
      );
      const res = await data.json();
      setMovieData(res.results);
    };
    fetchData();
  }, []);

  const [dataFromChild, setDataFromChild] = useState(null);

  const receiveData = (data) => {
    setDataFromChild(data);
  };

  return (
    <main>
      <Navbar receive={receiveData} />
      <div className="grid grid-cols-fluid gap-8 xl:gap-14 align-items:center justify-content:flex-start s:ml-2.5 m:ml-10 l:ml-16 md:ml-12 lg:ml-4 xl:ml-3 2xl:ml-8 3xl:ml-2">
        {Array.isArray(movieData) &&
          movieData.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
      </div>
      <Footer />
    </main>
  );
}

/*import Movie from "./Movie";
import Navbar from "./navbar/page.jsx";
import Footer from "./footer/page.jsx";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);

  const recieveData = (date) => {
    console.log(date);
  };

  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-fluid gap-8 xl:gap-14 align-items:center justify-content:flex-start s:ml-2.5 m:ml-10 l:ml-16 md:ml-12 lg:ml-4 xl:ml-3 2xl:ml-8 3xl:ml-2">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
*/
