import React from "react";
import { Link } from "react-router-dom";
import { myprojects } from "../../module/project";

function projects() {
  function livelink(item) {
    if (item !== undefined) {
      return (
        <Link
          to={item}
          target="_blank"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Live
        </Link>
      );
    }
  }
  return (
    <>
      <div className="project-container lg:min-h-screen mt-3">
        <div className="projects flex flex-col p-14" id="project">
          <h1 className="text-center text-3xl">
            <b>Projects</b>
          </h1>
          <ul className="project-list flex md:flex-row md:justify-center flex-wrap gap-8 pt-8 md:p-3 lg:p-8 mb-2 text-white">
            {myprojects.map((item) => (
              <li
                className="card flex flex-col relative rounded-md overflow-hidden w-[120%] md:w-[300px] h-[280px] hover:scale-110 hover:shadow-xl hover:shadow-[rgba(255,0,0,0.7)] dark:hover:shadow-[rgba(0,255,255,0.7)] transition-all duration-105"
                key={item.id}
              >
                <img
                  src={item.img}
                  className="project-img object-cover rounded-md w-full h-full"
                  alt={item.name}
                />
                <div className="project-desc absolute z-10 w-full h-[128%] pt-[240px] hover:pt-[15%] hover:bg-black hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer">
                  <h1 className="ti pt-2">
                    <b>{item.name}</b>
                  </h1>
                  <p className="text-center text-sm px-2">{item.desc}</p>
                  <i className=" text-xs md:text-base">{item.technologies}</i>
                  <div className="project-btn flex flex-row gap-3">
                    <Link
                      to={item.Gitlink}
                      target="_blank"
                      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      GitHub
                    </Link>
                    {livelink(item.Livelink)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default projects;
