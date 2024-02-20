import React from "react";
import Project from "./Project";
import Project2 from "./Project2";
import notehub from "../assets/notehub.png";
import adidas from "../assets/adidas.png";
import homeo from "../assets/homeo.png";
import crypto from "../assets/crypto.png";
import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="projects" className="flex min-h-[30vh] my-20 py-10">
        <div className="w-[70%] m-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold uppercase tracking-wide">
              Projects
            </h1>
          </div>
          <Project
            image={adidas}
            name={"Adidas Clone"}
            desc={"An e-commerce website with admin dashboard."}
            tags={"ReactJS, MongoDB, Express, NodeJS, Firebase, TailwindCSS"}
            deployedUrl={"https://adidas-clone-sahilhedau49.netlify.app/"}
            githubUrl={"https://github.com/sahilhedau49/adidas-clone"}
          />
          <Project2
            image={notehub}
            name={"NoteHub"}
            desc={"A documents sharing and storing web application."}
            tags={"ReactJS, Firebase, TailwindCSS, Firestore"}
            deployedUrl={"https://notehub-sahilhedau49.netlify.app/"}
            githubUrl={"https://github.com/sahilhedau49/NoteHub"}
          />
          <Project
            image={homeo}
            name={"Homeo"}
            desc={"A Care and Home Services website made for StartUp."}
            tags={"ReactJS, TailwindCSS, Firebase"}
            deployedUrl={"https://homeo-react.netlify.app/"}
            githubUrl={"https://github.com/sahilhedau49/homeo-react"}
          />
          <Project2
            image={crypto}
            name={"Crypto-Currency Tracker"}
            desc={"A protal to find various crypto currencies."}
            tags={"ReactJS, Firebase, TailwindCSS, API"}
            deployedUrl={
              "https://crypto-currency-tracker-sahilhedau49.netlify.app/"
            }
            githubUrl={"https://github.com/sahilhedau49/cryptocurrency-tracker"}
          />

          <button
            onClick={() => navigate("/projects")}
            className="block mx-auto text-center px-8 py-3 rounded-full text-slate-50 border-2 border-slate-950 duration-300 bg-slate-950 hover:text-slate-950 hover:bg-slate-50 hover:-translate-y-1"
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
