import React from "react";
import Reveal from "./Reveal";

const Skills = () => {
  return (
    <>
      <div className="w-[60%] mx-auto md:w-[90%]">
        <div className="text-center">
          <Reveal>
            <h1 className="text-3xl font-bold uppercase tracking-wide md:text-2xl">
              Skills
            </h1>
          </Reveal>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-4 gap-1 mt-8">
          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-javascript-plain"></i>
              <p className="name">JavaScript</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-firebase-plain"></i>
              <p className="name">Firebase</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-react-original"></i>
              <p className="name">React</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-mongodb-plain"></i>
              <p className="name">MongoDB</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-nodejs-plain"></i>
              <p className="name">NodeJS</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-express-original"></i>
              <p className="name">Express</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-tailwindcss-plain"></i>
              <p className="name">TailwindCSS</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-git-plain"></i>
              <p className="name">Git</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-redux-original"></i>
              <p className="name">Redux</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-html5-plain"></i>
              <p className="name">HTML5</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-css3-plain"></i>
              <p className="name">CSS3</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-cplusplus-plain"></i>
              <p className="name">C++</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-c-plain"></i>
              <p className="name">C</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-java-plain"></i>
              <p className="name">Java</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-python-plain"></i>
              <p className="name">Python</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-nextjs-original"></i>
              <p className="name">NextJS</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-bootstrap-plain"></i>
              <p className="name">Bootstrap</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-between icons">
              <i class="devicon-mysql-plain"></i>
              <p className="name">MySQL</p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Skills;
