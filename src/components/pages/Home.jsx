import React from "react";
// import myLogo from "../../assets/user-mjn.jpg";
// import myLogo1 from "../../assets/profile_image.jpg";
import newLogo from "../../assets/new_logo3.png";
// import blob from "../../assets/blob.png";
import { Link } from "react-router-dom";
// import GitWidget from "../GitWidget";

function Home() {
  return (
    <section id="about">
      {/* Animated blob effect */}
      <div className="m-10 relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-80 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mx-10 md:mx-0 font-medium text-black">
            Hi, I'm Marc.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps with React.
          </h1>
          <p className="mb-8 leading-relaxed mx-10 md:mx-0">
            Please join me on my journey into the world of Front End Development
            and check out my portfolio.
          </p>

          <div className="flex justify-center">
            <Link className="no-underline" to="./Projects">
              <button className="no-underline inline-flex transition-colors-shadow duration-700 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded hover:shadow-md text-lg">
                My Projects
              </button>
            </Link>

            <Link className="no-underline" to="./About">
              <button className="no-underline ml-4 inline-flex transition-colors-shadow duration-700 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded hover:shadow-md text-lg">
                About Me
              </button>
            </Link>
          </div>

        </div>

        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 flex justify-center">
          <img
            className="object-cover w-80 object-center bg-none rounded-full shadow-xl transition-colors-shadow duration-700 hover:shadow-indigo-500/70 hover:opacity-60"
            alt="hero"
            src={newLogo}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
