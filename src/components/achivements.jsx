import React from "react";
import { myachivements } from "../../module/achivements";
import { mycertificates } from "../../module/achivements";
import { Link } from "react-router-dom";

function achivements() {
  return (
    <>
      <div
        className="achivements-container mt-3 pt-3 md:p-16  md:flex justify-center"
        id="achivements"
      >
        <div className="achivements md:w-[49%]">
          <h1 className="text-center text-3xl mb-3">
            <b>Achivements</b>
          </h1>
          <div className="card-section flex flex-row flex-wrap justify-center">
            {myachivements.map((item) => (
              <div
                className="achivement-list bg-[#dbf0fa] dark:bg-gray-900 shadow-md outline-2 flex flex-col gap-4  m-4 p-3 w-[300px] rounded-md hover:scale-110 hover:shadow-xl hover:shadow-[rgba(255,0,0,0.7)] dark:hover:shadow-[rgba(0,255,255,0.7)] transition-all duration-105"
                key={item.id}
              >
                <div className="img">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="achivements-img rounded-md h-[210px] object-cover"
                  />
                </div>
                <div className="achivements-text flex flex-col gap-2">
                  <h2 className="achivements-title">{item.name}</h2>
                  <p className="achivements-description dark:text-white">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    class="text-white text-center text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="achivements md:w-[49%] mt-10 md:mt-0">
          <h1 className="text-center text-3xl mb-3">
            <b>Certificates</b>
          </h1>
          <div className="card-section flex flex-row flex-wrap justify-center">
            {mycertificates.map((item) => (
              <div
                className="achivement-list bg-[#dbf0fa] dark:bg-gray-900 shadow-md outline-2 flex flex-col gap-4  m-4 p-3 w-[300px] rounded-md hover:scale-110 hover:shadow-xl hover:shadow-[rgba(255,0,0,0.7)] dark:hover:shadow-[rgba(0,255,255,0.7)] transition-all duration-105"
                key={item.id}
              >
                <div className="img">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="achivements-img rounded-md h-[210px] object-cover"
                  />
                </div>
                <div className="achivements-text flex flex-col gap-2">
                  <h2 className="achivements-title">{item.name}</h2>
                  <p className="achivements-description dark:text-white">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    class="text-white text-center text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default achivements;
