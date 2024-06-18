import React from "react";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import github from "../assets/github.png";
import cf from "../assets/code-forces.svg";
import cc from "../assets/cc.png";
import Reveal from "./Reveal";

const CodingProfiles = () => {
  return (
    <div
      id="profiles"
      className="w-[60%] mx-auto text-center md:w-[95%] my-10 pt-10 md:pt-0"
    >
      <div className="mb-4">
        <Reveal>
          <h1 className="text-3xl font-bold uppercase tracking-wide md:text-2xl">
            Coding Profiles
          </h1>
        </Reveal>
      </div>
      <div>
        <div className="flex mt-20 w-fit mx-auto gap-32 text-lg md:mt-10 md:gap-6">
          <Reveal>
            <a href="https://leetcode.com/sahilhedau49/" target="_blank">
              <img
                className="w-[8rem] p-[1.4rem] md:w-[6rem] profiles duration-300 hover:-translate-y-3"
                src={leetcode}
                alt="Leetcode Link"
              />
            </a>
          </Reveal>

          <Reveal>
            <a href="https://github.com/sahilhedau49" target="_blank">
              <img
                className="w-[8rem] p-[1.2rem] md:w-[6rem] profiles duration-300 hover:-translate-y-3"
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
                className="w-[8rem] p-[1.2rem] md:w-[6rem] profiles duration-300 hover:-translate-y-3"
                src={gfg}
                alt="GFG Link"
              />
            </a>
          </Reveal>
        </div>
        <div className="flex w-fit mt-10 mx-auto gap-32 text-lg md:mt-6 md:gap-6">
          <Reveal>
            <a
              href="https://codeforces.com/profile/sahilhedau49"
              target="_blank"
            >
              <img
                className="w-[8rem] p-[1rem] md:w-[6rem] profiles duration-300 hover:-translate-y-3"
                src={cf}
                alt="Codeforces Link"
              />
            </a>
          </Reveal>

          <Reveal>
            <a
              href="https://www.codechef.com/users/sahil_hedau"
              target="_blank"
            >
              <img
                className="w-[8rem] p-[1.4rem] md:w-[6rem] profiles duration-300 hover:-translate-y-3"
                src={cc}
                alt="Codechef link"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
