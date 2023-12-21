import { Project } from "@/types/projectType";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((response) => response.json())
      .then((json) => setProjects(json));
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      Projects
      <div className="grid grid-cols-2">
        {projects.map((element) => {
          return (
            <div>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
