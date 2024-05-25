import React from "react";

const Footer = () => {
  return (
    <div className="footer w-full bg-black text-[#eee] px-40 py-20 md:px-14 md:py-10">
      <div>
        <div className="flex md:flex-col justify-between md:text-center">
          <div className="w-[40%] place-content-center md:w-full">
            <h1 className="uppercase text-2xl font-medium">Sahil Hedau</h1>
            <p className="mt-4 text-base">
              Full Stack Developer and Competitive Programmer.
            </p>
          </div>
          <div className="w-[20%] md:w-full md:mt-10">
            <h1 className="uppercase text-xl font-medium">Socials</h1>
            <div className="flex text-3xl gap-4 mt-4 md:place-content-center">
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
