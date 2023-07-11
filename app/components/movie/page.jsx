import Link from "next/link";
import Image from "next/image";

function MoviePage({ title, release_date, poster_path, id }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <section>
      <h2 className="font-bold truncate ... sm:text-2xl ">{title}</h2>
      <h3 className="mb-2 md:text-xl">{release_date}</h3>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={360}
          height={300}
          alt={title}
          priority
        />
      </Link>
    </section>
  );
}

export default MoviePage;
