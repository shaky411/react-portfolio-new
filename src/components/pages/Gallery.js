import React from "react";

function Gallery() {
  return (
    <div className="m-5">
      <h1>Projects Gallery</h1>
      <p>
        Gallery displaying some of the projects I have been working on recently.
      </p>

      <section className="overflow-hidden text-neutral-700">
        <div className="container mx-auto mt-5 px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-col md:flex-row flex-wrap md:-m-2 justify-center items-center">
            <div className="flex w-1/1 md:w-1/3 flex-wrap hover:opacity-70">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex w-1/1 md:w-1/3 flex-wrap hover:opacity-70">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
            </div>
            <div className="flex w-1/1 md:w-1/3 flex-wrap hover:opacity-70">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
            </div>
            <div className="flex w-1/1 md:w-1/3 flex-wrap hover:opacity-70">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
            </div>
            <div className="flex w-1/1 md:w-1/3 flex-wrap hover:opacity-70">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                />
              </div>
            </div>
            <div className="flex w-1/1 md:w-1/3 flex-wrap hover:opacity-70">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
