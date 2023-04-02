"use client";
import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image/tmdb.org/t/p/original/";

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <h2>Release date</h2>
      <Link href={`/asa`}>
        <Image src="/logo-alb.jpg" width={400} height={400} alt={title} />
      </Link>
    </div>
  );
}
