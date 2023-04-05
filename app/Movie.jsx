import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, release_date, poster_path, id }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <h3>{release_date}</h3>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={300}
          height={300}
          alt={title}
          priority
        />
      </Link>
    </div>
  );
}
