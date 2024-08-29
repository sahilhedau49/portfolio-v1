import React from "react";
import Project from "./Project";
import Project2 from "./Project2";
import notehub from "../assets/notehub.png";
import adidas from "../assets/adidas.png";
import homeo from "../assets/homeo.png";
import bloggerrr from "../assets/bloggerrr.png";
import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="projects" className="flex my-20 pt-10 md:pt-0">
        <div className="w-[70%] m-auto md:w-[90%]">
          <div className="text-center mb-10">
            <Reveal>
              <h1 className="text-3xl font-bold uppercase tracking-wide md:text-2xl">
                Projects
              </h1>
            </Reveal>
          </div>
          <Reveal>
            <Project
              image={notehub}
              name={"NoteHub"}
              desc={
                "A variety of documents sharing, storing, and managing application."
              }
              tags={"ReactJS, MySQL, Express, NodeJS, Firebase, TailwindCSS"}
              deployedUrl={"https://notehub49.netlify.app/"}
              githubUrl={"https://github.com/sahilhedau49/NoteHub"}
            />
          </Reveal>
          <Reveal>
            <Project2
              image={adidas}
              name={"Adidas Clone"}
              desc={
                "An e-commerce website with admin dashboard and Payment Integration."
              }
              tags={
                "ReactJS, MongoDB, Express, NodeJS, Stripe Payments, Firebase, TailwindCSS"
              }
              deployedUrl={"https://adidas-clone-sahilhedau49.netlify.app/"}
              githubUrl={"https://github.com/sahilhedau49/adidas-clone"}
            />
          </Reveal>
          <Reveal>
            <Project
              image={bloggerrr}
              name={"Blogger"}
              desc={"A social media web app for blogs."}
              tags={"ReactJS, MySQL, Express, NodeJS, Auth0, TailwindCSS"}
              deployedUrl={"https://bloggerrrr.netlify.app/"}
              githubUrl={"https://github.com/sahilhedau49/Blog-API"}
            />
          </Reveal>
          <Reveal>
            <Project2
              image={homeo}
              name={"Homeo"}
              desc={"A Care and Home Services website made for StartUp."}
              tags={"ReactJS, TailwindCSS, Firebase"}
              deployedUrl={"https://homeo-react.netlify.app/"}
              githubUrl={"https://github.com/sahilhedau49/homeo-react"}
            />
          </Reveal>
          <Reveal>
            <button
              onClick={() => navigate("/projects")}
              className="block mx-auto text-center px-8 md:px-6 py-3 md:py-2 rounded-full text-slate-50 border-2 border-slate-950 duration-300 bg-slate-950 hover:text-slate-950 hover:bg-slate-50 hover:-translate-y-1"
            >
              View More
            </button>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
