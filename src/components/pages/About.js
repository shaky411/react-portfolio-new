import React from "react";
import myLogo from "../../assets/user-mjn.jpg";
import Button from "./style-components/button";
import AboutCard from "../AboutCard";

let subTitle = "Who am I?"
let subTitle1 = "Currently Learning"
let subTitle2 = "What's Next?"

let title = "Marc Norris"
let title1 = "Technologies"
let title2 = "Ambitions"

let link = "https://github.com/shaky411"


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

        {/* Put about cards here */}
        <AboutCard subTitle={subTitle} title={title} link={link} />
        <AboutCard subTitle={subTitle1} title={title1} />
        <AboutCard subTitle={subTitle2} title={title2} />

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
