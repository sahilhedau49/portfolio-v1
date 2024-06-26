import React from "react";
import Reveal from "./Reveal";

const Experience = () => {
  return (
    <div id="experience" className="flex py-10 md:py-6">
      <div className="w-[60%] m-auto text-center md:w-[90%]">
        <Reveal>
          <div className="mb-4">
            <h1 className="text-3xl font-bold uppercase tracking-wide md:text-2xl">
              Experience
            </h1>
          </div>
        </Reveal>

        <div className="w-[80%] mx-auto text-lg font-medium text-gray-600 text-justify mt-10 md:w-[90%]">
          <Reveal>
            <div className="flex justify-between place-items-center mb-3">
              <p className="text-3xl text-gray-900 md:text-2xl">Homeo</p>
              <p className="md:text-sm">Full Stack Web Developer</p>
            </div>
          </Reveal>

          <Reveal>
            <p className="md:text-base">
              My role was to collaborate with design team and create a robust
              website based on their design. I used ReactJS and TailwindCSS to
              work on frontend of website and also utilize the power of Firebase
              to integrate realtime database for registration page. And lastly,
              for deployment I used netlify.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex gap-4">
              <a href={import.meta.env.VITE_HOMEO_URL} target="_blank">
                <button className="btn text-gray-200 mt-4 duration-300 hover:-translate-y-1 px-6 py-2 md:px-4 rounded-lg text-sm md:text-xs bg-[#212223e0]">
                  Internship Certificate
                </button>
              </a>
              {/* <a href={import.meta.env.VITE_React_App_RESUME_URL} target="_blank">
              <button className="btn text-gray-200 mt-4 duration-300 hover:-translate-y-1 px-6 py-2 rounded-lg text-sm bg-[#212223e0]">
                LOR
              </button>
            </a> */}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Experience;
