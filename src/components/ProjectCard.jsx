import React from "react";
import pLogo1 from "../../src/assets/Project_1.png";

// function showBrowserWidth() {
//   const width =
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth

//   document.querySelector('h5').innerHTML = `Width: ${width}`
// }
// window.onload = showBrowserWidth
// window.onresize = showBrowserWidth

export default function ProjectCard(props) {
  return (
    <div className="flex flex-col p-4 m-3 w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
      <div className="flex flex-col md:flex-col lg:flex-col space-y-6">
        <div className="flex justify-center items-center flex-col space-y-3 text-center md:text-left">
          <img src={props.image} alt="test" className="w-1/1 shadow rounded" />

          <div className="max-w-sm mt-4 text-xl font-medium">
            {props.tech}
          </div>

          <div className="flex-col mb-4 spacy-y-3 text-center md:text-left">
            <p className="text-3xl font-bold">{props.name}</p>
            <p className="text-sm font-light text-gray-400">{props.description}</p>
            <div>
              <div>
                  <a
                    href={props.github}
                    target="_blank"
                    className="text-black"
                  ><i className="fa-brands fa-square-github text-2xl mt-2 hover:text-indigo-500"></i></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
