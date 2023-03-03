import React from "react";
import myLogo from "../../assets/user-mjn.jpg";

function Home() {
  return (
    <section id="about">
      
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Marc.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps with React.
          </h1>
          <p className="mb-8 leading-relaxed">
            Please join me on my journey into the world of Front End Development
            and check out my current and past projects below.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="no-underline inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded hover:shadow-md text-lg"
            >
              My Projects
            </a>
            <a
              href="#projects"
              className="no-underline ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded hover:shadow-md text-lg"
            >
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
      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-12 mb-10 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    
  );
}

export default Home;
