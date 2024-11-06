import React from "react";
import { contact } from "../../module/contact";

function footer() {
  const contacts = contact;
  return (
    <>
      <footer
        className="flex flex-col md:flex-row items-center justify-between p-8 md:px-16 bg-white mt-6 shadow-md  pb-11 dark:bg-[#121212]"
        id="footer"
      >
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-[#F5F7F8]">
            Let's work together
          </h2>
          <p className="text-gray-600 dark:text-[#fefaf6c6]">
          Feel free to reach out using the following links:
          </p>
          <div className="flex space-x-4 mt-4 gap-2 items-center">
            {contacts.map((item) => (
              <a href={item.link} className="text-gray-700 text-2xl dark:invert" target="_blank" key={item.id}>
                <img src={item.img} alt={item.name} className="inline-block w-8"/>
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 justify-evenly flex gap-3">
        </div>
      </footer>
    </>
  );
}

export default footer;
