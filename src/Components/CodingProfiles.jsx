import React from "react";
import lc from "../assets/lc.jpg";
import gfg from "../assets/gfg.jpg";
import cc from "../assets/cc.jpg";

const CodingProfiles = () => {
  return (
    <div className="flex min-h-[30vh]">
      <div className="w-[60%]  m-auto text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            Coding Profiles
          </h1>
        </div>
        <div className="flex gap-3 text-lg">
          <img className="bg-blend-normal" src={lc} alt="" />
          <img className="bg-blend-normal" src={gfg} alt="" />
          <img className="bg-blend-normal" src={cc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
