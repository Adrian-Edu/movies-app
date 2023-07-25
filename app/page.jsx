"use client";

import Movie from "./pages/movie/page.jsx";
import Navbar from "./components/navbar/page.jsx";
import SecondNavbar from "./components/navbar-secondary/page.jsx";
import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./components/footer/page.jsx";
import { useStore } from "../app/api/store.jsx";

export default function Home(props) {
  const [movieData, setMovieData] = useState([]);
  const [dataFromChild, setDataFromChild] = useState("");
  const isLogOut = useStore((state) => state.isLogOut);
  const logIn = useStore((state) => state.logIn);
  const logOut = useStore((state) => state.logOut);

  const receiveData = (data) => {
    setDataFromChild(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.customKey}`
      );
      const res = await data.json();
      setMovieData(res.results);
    };
    fetchData();
  }, []);

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
      {isLogOut ? (
        <>
          <SecondNavbar login={logIn} />
          <div className="mt-14"></div>
          <Image
            style={{
              width: "2000px",
            }}
            src="/lastest-movies.jpg"
            width={1500}
            height={1500}
            alt="Latest movies"
          />
          <Footer />
        </>
      ) : (
        <>
          <Navbar receive={receiveData} logout={logOut} />
          <div className="grid grid-cols-fluid gap-8 justify-center items-center mx-5 h-auto">
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
          <Footer />
        </>
      )}
    </section>
  );
}
