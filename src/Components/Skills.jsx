import React from "react";
import Reveal from "./Reveal";

const Skills = () => {
  return (
    <>
      <div id="skills" className="w-[60%] mx-auto md:w-[90%] pt-10 md:pt-0">
        <div className="text-center mb-10">
          <Reveal>
            <h1 className=" text-3xl md:text-2xl font-bold uppercase tracking-wide">
              Skills
            </h1>
          </Reveal>
        </div>
        <div className="mb-10">
          <div className="text-2xl font-medium text-gray-800 mb-4 md:text-xl">
            <h1>Languages and Frameworks</h1>
          </div>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-2">
            <Reveal>
              <div className="icons flex px-4 py-2 gap-6 place-items-center">
                <i class="devicon-javascript-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm md:text-xs">JavaScript</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-react-original  text-3xl md:text-2xl"></i>
                <p className="text-sm">ReactJS</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-nodejs-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">NodeJS</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-express-original  text-3xl md:text-2xl"></i>
                <p className="text-sm">Express</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-tailwindcss-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">TailwindCSS</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-cplusplus-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">C/C++</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="fa-brands fa-golang  text-3xl md:text-2xl"></i>
                <p className="text-sm">Golang</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-java-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">Java</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-python-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">Python</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-nextjs-original  text-3xl md:text-2xl"></i>
                <p className="text-sm">NextJS</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-redux-original  text-3xl md:text-2xl"></i>
                <p className="text-sm">Redux</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-html5-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">HTML5</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-css3-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">CSS3</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-bootstrap-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">Bootstrap</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mb-10">
          <div className="text-2xl font-medium text-gray-800 mb-4 md:text-xl">
            <h1>Databases</h1>
          </div>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-2">
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-firebase-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">Firebase</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-mysql-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">MySQL</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-mongodb-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">MongoDB</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mb-10">
          <div className="text-2xl font-medium text-gray-800 mb-4 md:text-xl">
            <h1>Others</h1>
          </div>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-2">
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="fa-solid fa-book  text-3xl md:text-2xl"></i>
                <p className="text-sm">DSA</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-git-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">Git/GitHub</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-vscode-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">VS Code</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-docker-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">Docker</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="icons flex px-4 py-2 gap-4 place-items-center">
                <i class="devicon-fedora-plain  text-3xl md:text-2xl"></i>
                <p className="text-sm">Fedora</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
