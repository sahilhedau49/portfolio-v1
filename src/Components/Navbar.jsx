import React from "react";
import "../Global.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex navbar justify-between px-20 py-7 text-gray-200 bg-zinc-900">
        <Link to={"/"}>
          <h1 className="text-xl font-semibold uppercase tracking-wide">
            Sahil Hedau
          </h1>
        </Link>
        <div className="flex place-items-center">
          <ul className="flex gap-14 text-sm font-semibold uppercase tracking-wide">
            <li className="cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="#profiles">Profiles</a>
            </li>
            <li className="cursor-pointer">
              <a href="#projects">Projects</a>
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
