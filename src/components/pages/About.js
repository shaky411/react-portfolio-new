import React from "react";
import myLogo from "../../assets/user-mjn.jpg";
import Button from "./style-components/button";

function About() {
  return (
    <section id="about">
      <section id="buttons" className="flex justify-center text-center pt-10">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 mx-10 md:mx-0 font-medium text-black">
          Find out more about my journey!
          <br className="hidden lg:inline-block" />What I'm learning and where I plan to go next.
        </h1>
      </section>

      <div className="flex flex-col justify-center items-center pt-20 md:flex-row">
        <div className="mx-4 mb-4 h-auto w-96 rounded-lg border-b-4 border-slate-400 bg-gradient-to-tl from-slate-100 to-slate-400/60 p-6">
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
              <button className="rounded text-white bg-indigo-500 px-4 py-3 font-semibold shadow">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="mx-4 mb-4 h-auto w-96 rounded-lg border-b-4 border-slate-400 bg-gradient-to-tl from-slate-100 to-slate-400/60 p-6">
          <div className="flex h-full shrink-0 flex-wrap flex-col justify-between">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900">Future Plans</h1>
            <p className="leading-relaxed text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores cupiditate facilis nemo ratione, nulla temporibus ea
              earum maiores odit! Nobis quos architecto nemo ab mollitia?
            </p>
            <div className="flex">
              <button className="rounded text-white bg-indigo-500 px-4 py-3 font-semibold shadow">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="mx-4 mb-4 h-auto w-96 rounded-lg border-b-4 border-slate-400 bg-gradient-to-tl from-slate-100 to-slate-400/60 p-6">
          <div className="flex h-full shrink flex-col justify-between">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900">What Next?</h1>
            <p className="leading-relaxed text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores cupiditate facilis nemo ratione, nulla temporibus ea
              earum maiores odit! Nobis quos architecto nemo ab mollitia?
            </p>
            <div className="flex">
              <button className="rounded text-white bg-indigo-500 px-4 py-3 font-semibold shadow">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="overflow-hidden text-neutral-700"></section>
    </section>
  );
}

export default About;

{
  /* Test Buttons */
}
//  <Button classNameName="bg-red-500">Button</Button>
//  <Button classNameName="bg-pink-500">Button</Button>
//  <Button classNameName="bg-purple-500">Button</Button>
//  <Button classNameName="bg-cyan-600">Button</Button>
//  <Button classNameName="bg-slate-600">Button</Button>
//  <Button classNameName="bg-yellow-400">Button</Button>
