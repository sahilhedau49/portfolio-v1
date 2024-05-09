import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-[#eee] px-40 py-20">
      <div>
        <div className="flex justify-between">
          <div className="w-[40%] place-content-center">
            <h1 className="uppercase text-2xl font-medium">Sahil Hedau</h1>
            <p className="mt-4 text-sm">
              Full Stack Developer and Competitive Programmer.
            </p>
          </div>
          <div className="w-[20%]">
            <h1 className="uppercase text-xl font-medium">Socials</h1>
            <div className="flex text-3xl gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/sahil-hedau-2a6729228/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/sahilhedau49" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://twitter.com/sahil_hedau" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/sahil.hedau/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
