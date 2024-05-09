import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="flex min-h-[30vh] py-10">
      <div className="w-[60%] m-auto text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            Experience
          </h1>
        </div>
        <div className="w-[80%] mx-auto text-lg font-medium text-gray-600 text-justify mt-10">
          <div className="flex justify-between">
            <p className="text-3xl mb-4 text-gray-900">Homeo</p>
            <p>Full Stack Web Developer</p>
          </div>
          <p>
            My role was to collaborate with design team and create a robust
            website based on their design. I used ReactJS and TailwindCSS to
            work on frontend of website and also utilize the power of Firebase
            to integrate realtime database for registration page. And lastly,
            for deployment I used netlify.
          </p>
          <div className="flex gap-4">
            <a href={import.meta.env.VITE_React_App_Homeo_URL} target="_blank">
              <button className="btn text-gray-200 mt-4 duration-300 hover:-translate-y-1 px-6 py-2 rounded-lg text-sm bg-[#212223e0]">
                Internship Certificate
              </button>
            </a>
            {/* <a href={import.meta.env.VITE_React_App_RESUME_URL} target="_blank">
              <button className="btn text-gray-200 mt-4 duration-300 hover:-translate-y-1 px-6 py-2 rounded-lg text-sm bg-[#212223e0]">
                LOR
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
