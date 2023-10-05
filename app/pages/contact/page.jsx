import Link from "next/link";

export default function About() {
  return (
    <>
      <Link href="/">
        <button className="btn bg-red-700 ml-2 mb-2 text-sm md:text-xl ">Go home</button>
      </Link>
      <h1 className="text-4xl md:text-6xl flex justify-center font-bold mb-6">Contact</h1>
      <div className="h-4/6 flex justify-center text-4xl ">
        <div className="max-w-screen-2xl mb-10 mx-10 text-2xl text-center md:mx-20 md:text-4xl md:text-justify ">
          <p>
            Welcome to our contact page! We're thrilled to hear from you and we
            appreciate your interest in our company. Whether you have a question
            about our products, services, or just want to say hello, we're here
            to help. Here are some ways to get in touch with us:
          </p>
          <p className="mt-4">Email: latest-movies@</p>
          <p className="mt-4">Phone: none</p>
          <p className="mt-4">
            Social Media: https://www.facebook.com/latest-movies
          </p>
          <p className="mt-4">
            We value your feedback and suggestions, so please don't hesitate to
            reach out to us. Thank you for your interest in our company, and we
            look forward to hearing from you!
          </p>
        </div>
      </div>
    </>
  );
}
