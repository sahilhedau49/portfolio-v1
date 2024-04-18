import React, { useEffect, useState } from "react";
// import projectsData from "../assets/projects.json";
import ProjectCard from "./ProjectCard";
import ProjectsNavbar from "./ProjectsNavbar";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState();
  // useEffect(() => {
  //   setData(Object.values(projectsData));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://portfolio-49-default-rtdb.firebaseio.com/projectsData.json"
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProjectsNavbar />
      <div className="my-10 min-h-screen">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-20 mx-20 mt-20">
          {data?.map((project) => {
            return <ProjectCard key={project.id} data={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
