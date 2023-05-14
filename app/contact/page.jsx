import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function About() {
  return (
    <>
      <Navbar />
      <h1 className="text-6xl flex justify-center font-bold mt-10">Contact</h1>
      <div className="h-5/6 flex justify-center text-4xl mt-10">
        <div className="max-w-screen-2xl text-justify mb-10">
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
      <Footer />
    </>
  );
}
