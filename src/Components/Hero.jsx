import React from "react";
import gif from "../assets/mouse-scroll.gif";

const Hero = () => {
  return (
    <>
      <div className="absolute top-[50%] -translate-y-1/2 socials bg-[#d8fff1] rounded-lg">
        <ul className="flex flex-col text-3xl px-1 py-2 gap-4">
          <li className="px-3 py-2 hover:bg-[#ccecdf] rounded-md duration-300">
            <a href="https://github.com/sahilhedau49" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="px-3 py-2 hover:bg-[#ccecdf] rounded-md duration-300">
            <a
              href="https://www.linkedin.com/in/sahil-hedau-2a6729228/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="px-3 py-2 hover:bg-[#ccecdf] rounded-md duration-300">
            <a href="https://www.instagram.com/sahil.hedau/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="px-3 py-2 hover:bg-[#ccecdf] rounded-md duration-300">
            <a href="https://twitter.com/sahil_hedau" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="hero flex flex-col min-h-[80vh]">
        <div className="w-[50%] text-center block mx-auto my-auto ">
          <h1 className="text-[3.4rem] tracking-wide font-extrabold">
            HEY, I'M SAHIL HEDAU
          </h1>
          <p className="mt-8 text-xl">
            A MERN Stack Web Developer building the Frontend and Backend of
            Websites that leads to the success of the overall product.
          </p>
          <button className="btn text-gray-200 mt-10 duration-300 hover:-translate-y-1 px-10 py-3 rounded-lg text-2xl font-semibold bg-[#343434]">
            Projects
          </button>
        </div>
      </div>
      <div className="block">
        <img className="w-10 mx-auto" src={gif} />
      </div>
    </>
  );
};

export default Hero;
