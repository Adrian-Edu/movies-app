export default async function fetchMovieData(movie) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.customKey}`,
    { next: { revalidate: 30 } }
  );

  return data.json();
}
