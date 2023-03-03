import React from "react";
import myLogo from "/Users/marc/repos/react-portfolio-new/src/assets/user-mjn.jpg"

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Marc.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps with React.
          </h1>
          <p className="mb-8 leading-relaxed">
            Please join me on my journey into the world of Front End Development and check out my current and past projects below.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded hover:shadow-md text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded hover:shadow-md text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl shadow-xl"
            alt="hero"
            src={myLogo}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
