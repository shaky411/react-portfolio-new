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
      <h1 className="mb-3">My Projects</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        iure dolores at esse dignissimos suscipit saepe dolore illo similique
        non distinctio quis natus consequatur atque tenetur accusamus dolor. Sed
        exercitationem delectus, totam repudiandae eveniet possimus enim
        doloremque nisi cum? Repudiandae earum voluptatum ratione sunt
        architecto maiores accusantium ad quod rem.
      </p>

    {/* Project Cards */}
      <div className="flex flex-wrap items-center rounded-2xl justify-center min-h-screen bg-slate-100">
      <ProjectCard pill={pill} projectSub={projectSub} description={description} title={title}/>
      <ProjectCard pill={pill1} projectSub={projectSub1} description={description1} title={title1}/>
      <ProjectCard pill={pill2} projectSub={projectSub2} description={description2} title={title2}/>
      </div>

      
    </div>
  );
}

export default Projects;
