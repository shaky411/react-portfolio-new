import React from "react";
// import myLogo from "../../assets/user-mjn.jpg";
// import Button from "./style-components/button";
import AboutCard from "../AboutCard";
import about from "../../about.json";
import TechCard from "../TechCard";
import AboutMeCard from "../AboutMeCard";

function About() {
  return (
    <section id="about" className="m-5">
      <section
        className="flex flex-col justify-center items-center text-center mb-4 pt-2"
      >
        <h1 className="mb-4">About Me!</h1>
        <h2 className="sm:text-2xl text-2xl mb-5 mx-10 md:mx-0 font-normal text-black">
          Find out more about my journey!
          <br className="hidden lg:inline-block" />
          What I'm learning and where I plan to go next.
        </h2>
        <p className="mx-10 font-light md:w-1/2">
          As a junior developer, my portfolio represents my technical abilities,
          creativity, and problem-solving skills. I have created a diverse range
          of projects that demonstrate my proficiency in various programming
          languages and frameworks. These projects are not only functional but
          also visually appealing and intuitive for the end-user. My portfolio
          showcases my passion for coding and learning new technologies. I have
          documented my coding journey, including the challenges I faced and the
          solutions I implemented. 
        </p>
        <p className="mx-10 font-light md:w-1/2">I am committed to writing clean, efficient, and
          scalable code. My projects incorporate industry-standard coding
          practices, such as version control and testing, to ensure that my
          applications are reliable and maintainable. Overall, my portfolio
          demonstrates my enthusiasm for software development and my ability to
          learn and apply new skills. I am excited to continue expanding my
          portfolio with new projects and to contribute to the technology
          community.</p>
      </section>

      <div className="flex flex-col justify-center items-center md:flex-row">
        {/* Put about cards here */}
        <div className="flex flex-wrap items-stretch rounded-2xl justify-center mx-5 p-2 mb-4 bg-slate-100">
          <AboutMeCard
            subTitle={about[0].subTitle}
            title={about[0].title}
            description={about[0].description}
          />
          <TechCard
            subTitle={about[1].subTitle}
            title={about[1].title}
            description={about[1].description}
          />
          <AboutCard
            subTitle={about[2].subTitle}
            title={about[2].title}
            description={about[2].description}
          />
          <AboutCard
            subTitle={about[3].subTitle}
            title={about[3].title}
            description={about[3].description}
          />
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
