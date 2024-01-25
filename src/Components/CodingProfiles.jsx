import React from "react";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import github from "../assets/github.png";

const CodingProfiles = () => {
  return (
    <div>
      <div className="w-[60%] mx-auto mt-32 text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            Coding Profiles
          </h1>
        </div>
        <div className="flex mt-20 w-fit mx-auto gap-32 text-lg">
          <a href="https://leetcode.com/sahilhedau49/" target="_blank">
            <img
              className="w-[8rem] profiles duration-300 hover:-translate-y-3"
              src={leetcode}
              alt="Leetcode Link"
            />
          </a>
          <a href="https://github.com/sahilhedau49" target="_blank">
            <img
              className="w-[8rem] profiles duration-300 hover:-translate-y-3"
              src={github}
              alt="Github link"
            />
          </a>
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
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
