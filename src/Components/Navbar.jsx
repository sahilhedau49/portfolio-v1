import React from "react";
import "../Global.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex navbar justify-between px-20 py-7 text-gray-200 bg-zinc-900">
        <div>
          <h1 className="text-xl font-semibold uppercase tracking-wide">
            Sahil Hedau
          </h1>
        </div>
        <div className="flex place-items-center">
          <ul className="flex gap-14 text-sm font-semibold uppercase tracking-wide">
            <li className="cursor-pointer">
              <a>Home</a>
            </li>
            <li className="cursor-pointer">
              <a>About</a>
            </li>
            <li className="cursor-pointer">
              <a>Projects</a>
            </li>
            <li className="cursor-pointer">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
