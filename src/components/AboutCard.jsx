import React from "react";


function AboutCard() {
return (

    <div>
        <div className="mx-4 mb-4 h-auto w-96 rounded-lg border-b-4 border-slate-400 bg-gradient-to-tl from-slate-100 to-slate-200/60 p-6">
          <div className="flex h-full shrink flex-col justify-between">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900">
              Currently Learning
            </h1>
            <p className="leading-relaxed text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores cupiditate facilis nemo ratione, nulla temporibus ea
              earum maiores odit! Nobis quos architecto nemo ab mollitia?
            </p>
            <div className="flex">
              <button className="rounded text-white bg-indigo-500 hover:bg-indigo-800 px-4 py-3 font-semibold shadow">
                Learn more
              </button>
            </div>
          </div>
        </div>
    </div>

)
}

export default AboutCard;