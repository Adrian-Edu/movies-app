"use client";

import Movie from "./pages/movie/page.jsx";
import NavbarLogOut from "./components/navbar-auth/page.jsx";
import NavbarLogIn from "./components/navbar-login/page.jsx";
import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./components/footer/page.jsx";
import { useStore } from "./api/store.jsx";

export default function Home() {
  const [movieData, setMovieData] = useState([]);
  const [dataFromChild, setDataFromChild] = useState("");
  const isLogOut = useStore((state) => state.isLogOut);
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
        <main className="h-screen relative">
          <NavbarLogIn />
          <div className="mt-20 l:mt-6"></div>
          <Image
            style={{
              width: "2000px",
            }}
            src="/lastest-movies.jpg"
            width={1500}
            height={1500}
            loading="lazy"
            alt="Latest movies"
          />
          <footer className="position absolute bottom-0 left-0 right-0  md:static">
            <Footer />
          </footer>
        </main>
      ) : (
        <main className="h-min">
          <NavbarLogOut receive={receiveData} logout={logOut} />
          <div className="grid grid-cols-fluid gap-8 justify-center items-center mx-5 min-h-screen">
            {Array.isArray(movieData) &&
              filteredMovieData.map((movie) => (
                <Movie
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                />
              ))}
          </div>
          <footer className="mt-8 m:mt-14">
            <Footer />
          </footer>
        </main>
      )}
    </section>
  );
}
