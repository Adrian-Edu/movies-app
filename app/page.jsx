"use client";

import { useState } from "react";
import Movie from "./Movie";
import Navbar from "./navbar/page.jsx";

export default function Home(props) {
  const [movieData, setMovieData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6e4710cc48cf4a172ec811cb0202c758`
    );
    const res = await data.json();
    setMovieData(res.results);
  };
  fetchData();

  const [dataFromChild, setDataFromChild] = useState("");

  const receiveData = (data) => {
    setDataFromChild(data);
  };

  const filteredMovieData = movieData.filter((movie) =>
    movie.title
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(dataFromChild.toLowerCase().replace(/\s+/g, ""))
  );

  if (movieData.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Navbar receive={receiveData} />
      <div className="grid grid-cols-fluid gap-8 justify-center items-center mx-5">
        {Array.isArray(movieData) &&
          filteredMovieData.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
      </div>
    </main>
  );
}
