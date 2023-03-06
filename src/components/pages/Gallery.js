import React from "react";
import GalleryItem from "./GalleryItem";
import projects from "../../projects.json"

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

            <GalleryItem image={projects[0].image}/>
            <GalleryItem image={projects[1].image}/>
            <GalleryItem image={projects[2].image}/>
            <GalleryItem image={projects[3].image}/>
            <GalleryItem image={projects[4].image}/>
            <GalleryItem image={projects[5].image}/>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
