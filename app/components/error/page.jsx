"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function NotFound() {
  const [time, setTime] = useState(5);

  React.useEffect(() => {
    time > 0 && setInterval(() => setTime(time - 1), 1000);
  });

  function RedirectExample() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        window.location.replace("https://movies-app-theta-smoky.vercel.app/");
      }, 5000);
      return () => clearTimeout(timeout);
    }, []);
  }

  RedirectExample();

  return (
    <section className="page-height-notfount">
      <p className="error-p-first">Page not found!</p>
      <Image
        className="error404pic"
        style={{
          width: "2700px",
        }}
        src="/Error404.gif"
        width={1500}
        height={1500}
        alt="error404svg-Internet illustrations by Storyset"
      />
      <p className="error-p">
        The page will automatically redirect in {time} seconds.
      </p>
      <a className="author" href="https://storyset.com/internet">
        Internet illustrations by Storyset
      </a>
    </section>
  );
}

export default NotFound;
