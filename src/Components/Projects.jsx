import React, { useEffect, useState } from "react";
import projectsData from "../assets/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(projectsData);
    setData(Object.values(projectsData));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wide">Projects</h1>
      </div>
      <div className="grid grid-cols-2 gap-20 mx-20 mt-20">
        {data.map((project) => {
          return <ProjectCard key={project.id} data={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
