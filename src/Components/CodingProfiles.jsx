import React from "react";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import github from "../assets/github.png";
import Reveal from "./Reveal";

const CodingProfiles = () => {
  return (
    <div id="profiles">
      <div className="w-[60%] mx-auto pt-10 text-center">
        <div className="mb-4">
          <Reveal>
            <h1 className="text-3xl font-bold uppercase tracking-wide">
              Coding Profiles
            </h1>
          </Reveal>
        </div>
        <div className="flex mt-20 w-fit mx-auto gap-32 text-lg">
          <Reveal>
            <a href="https://leetcode.com/sahilhedau49/" target="_blank">
              <img
                className="w-[8rem] profiles duration-300 hover:-translate-y-3"
                src={leetcode}
                alt="Leetcode Link"
              />
            </a>
          </Reveal>

          <Reveal>
            <a href="https://github.com/sahilhedau49" target="_blank">
              <img
                className="w-[8rem] profiles duration-300 hover:-translate-y-3"
                src={github}
                alt="Github link"
              />
            </a>
          </Reveal>

          <Reveal>
            <a
              href="https://auth.geeksforgeeks.org/user/hedausahil49"
              target="_blank"
            >
              <img
                className="w-[8rem] profiles duration-300 hover:-translate-y-3"
                src={gfg}
                alt="GFG Link"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
