import gif from "../assets/mouse-scroll.gif";
import Navbar from "./Navbar";
import "../Global.css";

const Hero = () => {
  return (
    <>
      <div className="md:hidden absolute right-0 top-[50%] -translate-y-1/2 socials bg-[#c5c5c59d] rounded-lg">
        <ul className="flex flex-col text-3xl px-1 py-2 gap-4">
          <li className="px-3 text-center py-2 hover:bg-[#aaaaaa] rounded-md duration-300">
            <a href="https://github.com/sahilhedau49" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="px-3 text-center py-2 hover:bg-[#aaaaaa] rounded-md duration-300">
            <a
              href="https://www.linkedin.com/in/sahil-hedau-2a6729228/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="px-3 text-center py-2 hover:bg-[#aaaaaa] rounded-md duration-300">
            <a href="https://www.instagram.com/sahil.hedau/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="px-3 text-center py-2 hover:bg-[#aaaaaa] rounded-md duration-300">
            <a href="https://twitter.com/sahil_hedau" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="background"></div>
      <div className="flex flex-col min-h-[100vh] pb-10 text-[#111]">
        <Navbar />
        <div className="w-[60%] text-center block mx-auto my-auto md:w-[80%]">
          <h1 className="text-[4rem] tracking-wide font-extrabold md:text-[2.4rem]">
            HEY, I'M SAHIL HEDAU
          </h1>
          <p className="mt-4 text-2xl md:text-xl">
            Full Stack Developer and Competitive Programmer
          </p>
          <p className="mt-4 text-gray-700 md:text-base">
            I have a solid foundation in full stack technologies, with a passion
            for creating engaging and user web experiences. Along with this, I
            also practice Competitive Programming and DSA.
          </p>
          <a href={import.meta.env.VITE_RESUME_URL} target="_blank">
            <button className="btn text-gray-200 mt-10 md:mt-6 duration-300 hover:-translate-y-1 px-10 md:px-6 py-3 md:py-2 rounded-lg text-xl md:text-base font-semibold bg-[#212223]">
              <i class="fa-solid fa-download"></i>
              {` `} RESUME
            </button>
          </a>
        </div>{" "}
        <div className="block">
          <img className="w-10 mx-auto" src={gif} />
        </div>
      </div>
    </>
  );
};

export default Hero;
