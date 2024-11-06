import React from "react";
import {myskill} from "../../module/skills.js"

function skills() {
  const skill = myskill
  return (
    <>
    <div className="skills-container flex flex-row flex-nowrap h-20 overflow-hidden">   
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
        {skill.map((item) => (
          <li className="skill-card" key={item.id}>
            <img src={item.img} alt={item.name} className="skills-img h-20 mix-blend-multiply" />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default skills;
