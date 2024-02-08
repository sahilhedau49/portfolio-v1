import React from "react";

const About = () => {
  return (
    <div id="about" className="flex min-h-[30vh] py-10">
      <div className="w-[60%] m-auto text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            About me
          </h1>
        </div>
        <div className="w-[80%] mx-auto text-lg font-medium text-gray-600 text-justify mt-10">
          <p className="text-center text-xl mb-4">
            MERN Stack Web Developer | Proficient in DSA | 3rd Year UG Student
          </p>
          <p>
            Motivated and dedicated 3rd year UG student pursuing a bachelor's
            degree in Computer Science and Engineering. I have a solid
            foundation in front-end technologies, with a passion for creating
            engaging and user web experiences. Skilled in HTML, CSS, JavaScript,
            and proficient in various frameworks such as React JS and Tailwind
            CSS. Currently I am working to ace my back-end development skills.
            Along with this, I also use to practice Competitive Programming,
            programming language using is C++.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
