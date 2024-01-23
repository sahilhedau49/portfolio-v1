import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectSection from "./ProjectSection";
import CodingProfiles from "./CodingProfiles";

const MainPage = () => {
  return (
    <>
      <Hero />
      <div className="mt-10">
        <About />
      </div>
      <div className="my-10">
        <Skills />
      </div>
      <CodingProfiles />
      <ProjectSection />
    </>
  );
};

export default MainPage;
