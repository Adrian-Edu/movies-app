import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.customKey}`
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
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.customKey}`,
    { next: { revalidate: 30 } }
  );

  const res = await data.json();
  return (
    <>
      <Link href="/">
        <button className="btn bg-red-700 ml-2 mb-2 text-xl">Go home</button>
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
            className="my-6 mx-0"
            src={imagePath + res.backdrop_path}
            width={500}
            height={500}
            alt={res.title}
            priority
          />
          <p>{res.overview}</p>
        </div>
      </div>
    </>
  );
}

/*


export async function getStaticPaths() {
  // Fetch the movie IDs from the API or other data source
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.customKey}`
  );
  const res = await data.json();

  const paths = res.results.map((movie) => ({
    params: {
      movie: movie.id.toString()
    }
  }));

  return {
    paths,
    fallback: true // Enable fallback for non-existent paths
  };
}

export async function getStaticProps({ params }) {
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.customKey}`
  );
  const res = await data.json();

  return {
    props: {
      movie: res
    },
    revalidate: 30 // Enable automatic revalidation every 30 seconds
  };
}

export default function MovieDetail({ movie }) {
  if (!movie) {
    // Handle the case when the movie is not found
    return <ErrorPage statusCode={404} />;
  }

  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <Link href="/">
        <button className="btn bg-red-700 ml-2 mb-2 text-xl">Go home</button>
      </Link>
      <div className="s:px-2 pl-6 px-6 h-full ">
        <div className="text-xl">
          <h2 className="text-2xl  font-bold ">{movie.title}</h2>
          <h1>{movie.release_date}</h1>
          <h2>Runtime: {movie.runtime} minutes</h2>
          <h2 className="bg-green-600 inline-block my-2 py-2 px-4">
            {movie.status}
          </h2>
          <Image
            className="my-6 mx-0"
            src={imagePath + movie.backdrop_path}
            width={500}
            height={500}
            alt={movie.title}
            priority
          />
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

*/
