import React from "react";

function Projects() {
  return (
    <div className="m-5">
      <h1 className="mb-3">My Projects</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        iure dolores at esse dignissimos suscipit saepe dolore illo similique
        non distinctio quis natus consequatur atque tenetur accusamus dolor. Sed
        exercitationem delectus, totam repudiandae eveniet possimus enim
        doloremque nisi cum? Repudiandae earum voluptatum ratione sunt
        architecto maiores accusantium ad quod rem.
      </p>

      {/* Global Container */}
      <div class="flex items-center rounded-2xl justify-center min-h-screen bg-slate-100">
        <div class="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          <div class="flex flex-col space-y-6">
            <div class="flex justify-center items-center flex-col mb-4 space-y-3 text-center md:text-left">
              <div>
                <div class="inline-block px-3 py-1 text-sm text-black font-bold bg-yellow-500 rounded-full shadow-md">
                  JavaScript
                </div>
              </div>

              <div class="max-w-sm text-2xl font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
                in?
              </div>

              <div class="flex-col mb-4 spacy-y-3 text-center md:text-left">
                <p class="text-5xl font-bold">Project 1</p>
                <p class="text-sm font-light text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque, similique!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
