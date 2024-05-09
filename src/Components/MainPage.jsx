import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import ProjectSection from "./ProjectSection";
import CodingProfiles from "./CodingProfiles";
import Contact from "./Contact";
import Experience from "./Experience";
import "../Global.css";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Hero />
      <div className="mt-10">
        <Experience />
      </div>
      <CodingProfiles />
      <ProjectSection />
      <div className="my-10">
        <Skills />
      </div>
      <div className="mt-20">
        <Contact />
      </div>
      {loading && (
        <div className="select-none loading-page min-h-screen min-w-full bg-gray-900 absolute top-0 left-0 flex justify-center">
          <p className="fill text-gray-800 font-extrabold text-[16rem] place-content-center">
            &lt; SH49 /&gt;
          </p>
          <p className="absolute top-36 right-24 text-gray-800 font-extrabold text-[16rem] place-content-center">
            &lt; SH49 /&gt;
          </p>
        </div>
      )}
    </>
  );
};

export default MainPage;
