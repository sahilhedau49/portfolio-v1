import React from "react";
import Reveal from "./Reveal";

const ProjectCard = ({ data }) => {
  return (
    <Reveal>
      <div className="box-shadow p-4 duration-200 rounded-xl md:rounded-lg hover:-translate-y-2">
        <div className="h-72 md:h-36">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="w-[100%] flex justify-between mt-10">
          <div className="px-4 md:px-2">
            <div className="text-2xl md:text-xl">{data.name}</div>
            <div className="text-lg md:text-base mt-3 min-h-10 md:min-h-0">
              {data.desc}
            </div>
          </div>
        </div>
        <div className="mt-6 px-4 md:px-2 flex justify-between text-2xl text-gray-800 md:text-xl">
          <div className="w-[80%] md:w-[70%]">
            <div className="text-sm w-fit bg-gray-100 place-content-center p-2 md:py-1 rounded-md">
              {data.tags}
            </div>
          </div>
          <div className="place-content-center">
            <a
              className="mr-6 duration-300 hover:text-gray-600"
              href={data.deployedUrl}
              target="_blank"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a
              className="duration-300 hover:text-gray-600"
              href={data.githubUrl}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
