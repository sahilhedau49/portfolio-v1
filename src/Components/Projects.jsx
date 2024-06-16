import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsNavbar from "./ProjectsNavbar";
import Reveal from "./Reveal";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Reveal>
            <h1 className="text-3xl font-bold uppercase tracking-wide md:text-2xl">
              Projects
            </h1>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-20 md:gap-10 mx-20 mt-20 md:mx-6 md:mt-10">
          {data?.map((project) => {
            return <ProjectCard key={project.id} data={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
