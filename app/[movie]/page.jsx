import Image from "next/image";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Link from "next/link";

export async function generatStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  return (
    <section>
      <Navbar />
      <Link href="/">
        <button className="btn bg-red-700 ml-2 mb-2 text-xl">Go back</button>
      </Link>
      <div className="s:px-2 pl-6 px-6 h-full ">
        <div className="text-2xl">
          <h2 className="text-4xl  font-bold ">{res.title}</h2>
          <h1>{res.release_date}</h1>
          <h2>Runtime: {res.runtime} minutes</h2>
          <h2 className="bg-green-600 inline-block my-2 py-2 px-4">
            {res.status}
          </h2>
          <Image
            className="my-8 mx-0"
            src={imagePath + res.backdrop_path}
            width={1000}
            height={1000}
            alt={res.title}
            priority
          />
          <p>{res.overview}</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
