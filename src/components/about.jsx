import React from "react";
import Boy from "../../public/assets/boy.png";
import SkillButtons from "./skillsbutton";
function about() {
  return (
    <>
      <div className="about-container lg:min-h-screen felx mt-3">
        <div className="abouts md:flex md:flex-col p-2 md:p-16" id="about">
          <h1 className="text-center text-3xl">
            <b>About</b>
          </h1>
          <div className="about-info flex justify-center items-center md:gap-8 pt-4">
            <img
              src={Boy}
              alt="protrait"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
            />
            <p className="w-80 h-80 font-semibold text-center md:text-left">
              Hello, <br /> I'm Aditya Gavandi – a passionate
              software developer with a knack for turning complex ideas into
              practical, high-quality web applications. With expertise in
              Python, Django, ReactJS, and JavaScript, I specialize in building
              scalable, efficient, and user-focused solutions that make an
              impact.
            </p>
          </div>
          <h1 className="text-center text-3xl pt-10">
            <b>My Technical Skills</b>
          </h1>
          <div className="info flex justify-center flex-wrap gap-8 pt-10 lg:px-80">
            <SkillButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
