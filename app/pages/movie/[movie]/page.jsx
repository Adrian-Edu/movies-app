import Image from "next/image";
import Link from "next/link";

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

I apologize for the confusion. The use of params as a function argument in your code is correct in this context.

In Next.js, when you define a dynamic route, the dynamic parameter values are typically passed as props to the component that corresponds to that route. The props object containing the dynamic parameter values is usually named params, as you have done in your code.

The params object is destructured in the function signature of the MovieDetail component: ({ params }). This allows you to access the movie parameter value from the params object using destructuring: const { movie } = params;.

The rest of your code appears to be using the movie parameter value to construct an API URL, fetch data, and render the movie details in the component.

In summary, the use of params as a function argument and the subsequent destructuring of the movie parameter is correct in the given context. This allows you to access the dynamic route parameter value within the MovieDetail component.

If you have any further questions or need clarification, please let me know!

*/
