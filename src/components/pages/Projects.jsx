import React from "react";
import ProjectCard from "../ProjectCard";

// Props variables

let title = "Project 1"
let title1 = "Project 2"
let title2 = "Project 3"

let pill = "TailwindCSS"
let pill1 = "JavaScript"
let pill2 = "CSS"

let projectSub = "Testimonials Grid Section"
let projectSub1 = "Bootstrap Portfolio"
let projectSub2 = "Coding Quiz"

let description = "This was a tutorial project I learnt from TraversyMedia"
let description1 = "This was a tutorial project I learnt from TraversyMedia"
let description2 = "This was a tutorial project I learnt from TraversyMedia"

function Projects() {
  return (
    <div className="m-5">
      <h5></h5>
      <section id="buttons" className="flex flex-col justify-center text-center pt-2">
        <h1 className="mb-4">My Projects</h1>
        <h2 className="title-font sm:text-3xl text-2xl mb-5 mx-10 md:mx-0 font-normal text-black">
          Check out my current & past projects below!
          <br className="hidden lg:inline-block" />Click on the Github links to learn more.
        </h2>
      </section>

    {/* Project Cards */}
      <div className="flex flex-wrap items-center rounded-2xl justify-center p-5 bg-slate-100">
      <ProjectCard pill={pill} projectSub={projectSub} description={description} title={title}/>
      <ProjectCard pill={pill1} projectSub={projectSub1} description={description1} title={title1}/>
      <ProjectCard pill={pill2} projectSub={projectSub2} description={description2} title={title2}/>
      </div>
    </div>
  );
}

export default Projects;
