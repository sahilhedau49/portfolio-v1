import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import "../Global.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex navbar place-items-center justify-between px-20 py-7 text-[#111] md:px-10 md:filter-none">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold uppercase tracking-wide md:text-xl">
          &lt;SH49/&gt;
        </h1>{" "}
      </Link>
      <div
        className={`flex place-items-center gap-14 text-lg font-semibold text-gray-700 uppercase tracking-wide duration-300 md:backdrop-blur-3xl md:gap-10 md:flex-col md:absolute md:top-0 md:py-20 md:left-0 md:w-[100vw] md:h-fit ${
          openMenu ? "md:translate-x-0" : "md:hidden"
        }`}
      >
        <div
          className="hover:-translate-y-1 cursor-pointer duration-300 hover:text-gray-900"
          onClick={() => setOpenMenu(false)}
        >
          <a href="#experience">Experience</a>
        </div>
        <div
          className="hover:-translate-y-1 cursor-pointer duration-300 hover:text-gray-900"
          onClick={() => setOpenMenu(false)}
        >
          <a href="#profiles">Profiles</a>
        </div>
        <div
          className="hover:-translate-y-1 cursor-pointer duration-300 hover:text-gray-900"
          onClick={() => setOpenMenu(false)}
        >
          <a href="#projects">Projects</a>
        </div>
        <div
          className="hover:-translate-y-1 cursor-pointer duration-300 hover:text-gray-900"
          onClick={() => setOpenMenu(false)}
        >
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className={`hidden md:flex md:z-20 text-2xl text-slate-950`}>
        <CgMenu
          name="menu-outline"
          className={`${openMenu ? "md:hidden" : "md:inline-block"}`}
          onClick={() => setOpenMenu(true)}
        />
        <CgClose
          name="close-outline"
          className={`${openMenu ? "md:inline-block" : "md:hidden"}`}
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </div>
  );
};

export default Navbar;
