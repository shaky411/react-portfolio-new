import React from "react";
import pLogo1 from "../../src/assets/Project_1.png";



export default function ProjectCard(props) {
    return (
        
        <div class="flex flex-col p-4 m-3 w-1/1 md:w-1/4 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          <div class="flex flex-col md:flex-row space-y-6">
            <div class="flex justify-center items-center flex-col mb-4 space-y-3 text-center md:text-left">
              <img src={pLogo1} alt="test" className="w-1/1 shadow-md rounded-m"/>
              <div>
                <div class="inline-block px-3 mt-2 py-1 text-sm text-black font-bold bg-yellow-500 rounded-full shadow-md">
                  {props.pill}
                </div>
              </div>
              

              <div class="max-w-sm text-2xl font-medium">
                {props.projectSub}
              </div>

              <div class="flex-col mb-4 spacy-y-3 text-center md:text-left">
                <p class="text-5xl font-bold">{props.title}</p>
                <p class="text-sm font-light text-gray-400">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}