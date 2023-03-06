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
let comment = "Born & raised in Bristol UK and the place I still call home today."
let comment1 = "These are the technologies I am currently learning"

let link = "https://github.com/shaky411"


function About() {
  return (
    <section id="about">
      <h5></h5>
      <section id="buttons" className="flex flex-col justify-center text-center pt-2 m-5">
        <h1 className="mb-4">About Me!</h1>
        <h2 className="title-font sm:text-3xl text-2xl mb-5 mx-10 md:mx-0 font-normal text-black">
          Find out more about my journey!
          <br className="hidden lg:inline-block" />What I'm learning and where I plan to go next.
        </h2>
      </section>

      <div className="flex flex-col justify-center items-center md:flex-row">

        {/* Put about cards here */}
        <div className="flex flex-wrap items-center rounded-2xl justify-center p-5 bg-slate-100">
        <AboutCard subTitle={subTitle} title={title} link={link} comment={comment} />
        <AboutCard subTitle={subTitle1} title={title1} comment={comment1} />
        <AboutCard subTitle={subTitle2} title={title2} />
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
