import Link from "next/link";
import Image from "next/image";

export default function Movie(props : {id : string, title: string | number, poster_path: string | number, release_date: number }) {

  const imagePath = "https://image.tmdb.org/t/p/original";
  
  return (
    <section>
      <h2 className="font-bold truncate sm:text-2xl ">{props.title}</h2>
      <h3 className="mb-2 md:text-xl">{props.release_date}</h3>
      <Link href={`/pages/movie/${props.id}`}>
        <Image
          loading="lazy"
          src={imagePath + props.poster_path}
          width={360}
          height={300}
          alt={props.id}
        />
      </Link>
    </section>
  );
}

