import React from "react";
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json"

// Props variables

let pill = "TailwindCSS"
// let pill1 = "JavaScript"
// let pill2 = "CSS"

function Projects() {
  return (
    <div className="m-5">
      <section id="buttons" className="flex flex-col justify-center text-center pt-2">
        <h1 className="mb-4">My Projects</h1>
        <h2 className="sm:text-2xl text-xl mb-4 mx-10 md:mx-0 font-normal text-black">
          Check out my current & past projects below!
          <br className="hidden lg:inline-block" />Click on the Github links to learn more.
        </h2>
        <p className="italic text-gray-400">Many of these projects were part of a recent bootcamp, some are still WIP.</p>
      </section>

    {/* Project Cards */}
      <div className="flex flex-wrap items-center rounded-2xl justify-center p-2 mb-5 bg-slate-100">
      <ProjectCard pill={pill} tech={projects[0].tech} description={projects[0].description} image={projects[0].image} name={projects[0].name} github={projects[0].github} live={projects[0].live}/>
      <ProjectCard pill={pill} tech={projects[1].tech} description={projects[1].description} image={projects[1].image} name={projects[1].name} github={projects[1].github} live={projects[1].live}/>
      <ProjectCard pill={pill} tech={projects[2].tech} description={projects[2].description} image={projects[2].image} name={projects[2].name} github={projects[2].github} live={projects[2].live}/>
      <ProjectCard pill={pill} tech={projects[3].tech} description={projects[3].description} image={projects[3].image} name={projects[3].name} github={projects[3].github} live={projects[3].live}/>
      <ProjectCard pill={pill} tech={projects[4].tech} description={projects[4].description} image={projects[4].image} name={projects[4].name} github={projects[4].github} live={projects[4].live}/>
      <ProjectCard pill={pill} tech={projects[5].tech} description={projects[5].description} image={projects[5].image} name={projects[5].name} github={projects[5].github} live={projects[5].live}/>
      
      
      </div>
    </div>
  );
}

export default Projects;
