import React from "react";
import myLogo from "../../assets/user-mjn.jpg";

function Home() {
  return (
    <section id="about">
      
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mx-10 md:mx-0 font-medium text-black">
            Hi, I'm Marc.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps with React.
          </h1>
          <p className="mb-8 leading-relaxed mx-10 md:mx-0">
            Please join me on my journey into the world of Front End Development
            and check out my current and past projects below.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="no-underline inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded hover:shadow-md text-lg"
            >
              My Projects
            </a>
            <a
              href="#projects"
              className="no-underline ml-4 inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded hover:shadow-md text-lg"
            >
              About Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-3xl shadow-xl hover:opacity-50"
            alt="hero"
            src={myLogo}
          />
        </div>
      </div>

      
    </section>

    
  );
}

export default Home;
