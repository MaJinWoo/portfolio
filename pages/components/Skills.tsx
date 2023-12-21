import React, { useEffect, useState } from "react";
import { Skill } from "@/types/skillType";

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/skills")
      .then((response) => response.json())
      .then((json) => setSkills(json));
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-32">
      <h1 className="text-3xl">My Skills</h1>
      <div className="grid grid-cols-3 gap-52">
        {skills.map((element) => {
          return (
            <div className="flex flex-col items-center justify-center gap-20">
              <img src={element.icon} />
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
