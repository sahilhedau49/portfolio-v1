import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.desc}</div>
    </div>
  );
};

export default ProjectCard;
