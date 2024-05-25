import React from "react";

const Project2 = ({ image, name, desc, tags, deployedUrl, githubUrl }) => {
  return (
    <div className="my-20 text-right flex md:flex-col-reverse gap-10 md:gap-6 w-[100%] md:my-10">
      <div className="flex flex-col place-content-center w-[40%] tracking-wider md:w-full">
        <h3 className="text-2xl font-bold mb-3 text-gray-600 md:text-xl">
          {name}
        </h3>
        <h1 className="text-3xl font-semibold md:text-2xl">{desc}</h1>
        <p className="mt-6 font-medium text-gray-500 md:text-sm md:mt-3">
          {tags}
        </p>
        <div className="mt-6 text-left text-2xl text-gray-800 md:mt-3 md:text-xl">
          <a
            className="mr-6 duration-300 hover:text-gray-600"
            href={githubUrl}
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            className="mr-6 duration-300 hover:text-gray-600"
            href={deployedUrl}
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="w-[60%] rounded-xl project overflow-hidden md:w-full">
        <img
          className="rounded-xl project-img"
          src={image}
          alt="NoteHib Link"
        />
      </div>
    </div>
  );
};

export default Project2;
