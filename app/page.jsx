"use client";

import Movie from "./components/movie/Movie";
import Navbar from "./components/navbar/page.jsx";
import SecondNavbar from "./components/navbar-secondary/page.jsx";
import { useState } from "react";
import Image from "next/image";

export default function Home(props) {
  const [movieData, setMovieData] = useState([]);
  const [isUserLoggedIn, setIsUserLogin] = useState(false);

  const logInOut = () => {
    setIsUserLogin((prevState) => setIsUserLogin(!prevState));
  };

  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.customKey}`
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
    <section>
      {isUserLoggedIn ? (
        <>
          <Navbar receive={receiveData} logout={logInOut} />
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
        </>
      ) : (
        <>
          <SecondNavbar login={logInOut} />
          <div className="flex justify-center items-center"></div>
          <Image
            style={{
              width: "2700px",
            }}
            src="/lastest-movies.jpg"
            width={1500}
            height={1500}
            alt="Latest movies"
          />
        </>
      )}
    </section>
  );
}
