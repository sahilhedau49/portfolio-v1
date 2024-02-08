import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectSection from "./ProjectSection";
import CodingProfiles from "./CodingProfiles";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <>
      <Hero />
      <div className="mt-10">
        <About />
      </div>
      <CodingProfiles />
      <ProjectSection />
      <div className="my-10">
        <Skills />
      </div>
      <div className="mt-20">
        <Contact />
      </div>
    </>
  );
};

export default MainPage;
