import React, { useEffect, useState } from "react";

const ProjectCard = ({ data }) => {
  // const [image, setImage] = useState();

  // useEffect(() => {
  //   const loadImage = async () => {
  //     const { default: image } = await import(`${data.image}`);
  //     setImage(image);
  //   };

  //   loadImage();
  // }, []);

  return (
    <div className="box-shadow p-4 duration-200 rounded-xl hover:-translate-y-2">
      <div>
        <img src={data.image} alt={data.name} />
      </div>
      <div className="w-[100%] flex justify-between mt-4">
        <div className="w-[70%]">
          <div className="text-2xl">{data.name}</div>
          <div className="text-lg">{data.desc}</div>
        </div>
        <div className="w-[30%] text-xs">{data.tags}</div>
      </div>
      <div className="mt-6 text-right text-2xl text-gray-800">
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
  );
};

export default ProjectCard;
