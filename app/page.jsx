import Movie from "./Movie";
import Navbar from "./navbar/page.jsx";
import Footer from "../footer/page.jsx";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main>
      <Navbar />

      <div className="grid grid-cols-fluid gap-14 align-items:center justify-content: flex-start  md:ms-6 mb-8 ... ">
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
