import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import ProjectSection from "./ProjectSection";
import CodingProfiles from "./CodingProfiles";
import Contact from "./Contact";
import Experience from "./Experience";
import "../Global.css";
import "animate.css";

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
        <div className="font-sans select-none  loading-page min-h-screen min-w-full bg-zinc-900 fixed top-0 left-0 flex justify-center">
          <div className="fixed min-h-screen top-0 left-0 min-w-full place-content-center">
            <p className="animate__animated animate__bounceInLeft fill text-zinc-800 font-extrabold text-[16rem]">
              &lt; SH49 /&gt;
            </p>
          </div>

          <div className="fixed min-h-screen -top-3 left-3 min-w-full text-center place-content-center">
            <p className="animate__animated animate__bounceInRight text-zinc-800 font-extrabold text-[16rem]">
              &lt; SH49 /&gt;
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
