import React from "react";
import "../Global.css";
import { Link, useNavigate } from "react-router-dom";

const ProjectsNavbar = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex navbar justify-between px-20 py-7 text-gray-900 md:px-10">
        {/* bg-[#25282a] */}
        <Link to={"/"}>
          <h1 className="text-2xl font-bold uppercase tracking-wide">
            &lt;SH49/&gt;
          </h1>
        </Link>
        <div className="flex place-items-center">
          <ul className="flex gap-14 text-lg font-semibold text-gray-700 uppercase tracking-wide">
            <li className="cursor-pointer duration-300 hover:text-gray-900">
              <button onClick={() => goback()}>Back</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectsNavbar;
