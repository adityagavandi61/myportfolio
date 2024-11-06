import React from "react";
import About from "../components/about.jsx";
import anime from "../../public/assets/anime.gif";
import Navbar from "../components/navbar.jsx";
import Skills from "../components/skills.jsx";
import Achivements from "../components/achivements.jsx";
import Project from "../components/projects.jsx";
import { Link } from "react-router-dom";
import { resume } from "../../module/contact.js";
import Headerline from "../components/headerline.jsx";

function home() {
  
  return (
    <>
      <Navbar />
      <section className="section-container" id="home">
        <div className="flex flex-col  dark:invert-1 dark:bg-[#121212] md:flex-row items-center justify-between p-8 md:px-16 mt-6">
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600 font-semibold dark:text-[#fefaf6c6]">
              Portfolio | Aditya Gavandi
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            <Headerline/>
            </h1>
            <p className="text-gray-600 dark:text-[#fefaf6c6]">
            Turning ideas into dynamic digital experiences with precision and passion – available for freelance projects.
            </p>
            <Link
              to={resume}
              className="inline-block bg-black text-white py-2 px-6 mt-4 rounded-lg"
            >
              Resume
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <div className="profile-card relative">
              <img
                className="profileimg w-80 h-80 object-cover rounded-full shadow-2xl profilepic p-1 "
                src={anime}
                alt="Protrait"
              />
              <div className="absolute top-0 left-0 w-16 h-16 bg-teal-600 rounded-sm rotateaime shadow-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-500 rounded-sm rotateaime shadow-2xl"></div>
            </div>
          </div>
        </div>
        <div className="middle-line w-full p-5 h-[200px] pt-10">
          <Skills />
        </div>
        <About />
        <Project />
        <Achivements />
      </section>
    </>
  );
}

export default home;
