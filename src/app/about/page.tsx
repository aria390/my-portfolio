import React from "react";

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-18 text-white">
      <div className=" flex flex-col gap-5">
        <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
          About <span className="text-purple-700">Me</span>
        </span>
        <p className="text-center sm:text-left text-[#d9d9d9] sm:pr-25">
          I’m a Junior Frontend Developer who enjoys building clean, responsive,
          and well-structured web interfaces. I focus on writing maintainable
          code, understanding concepts deeply, and improving step by step rather
          than rushing results. I’ve worked with modern frontend tools like
          React and Next.js, and I care about how users interact with what I
          build — from performance to small details and interactions. I’m always
          learning, experimenting, and pushing myself to become a more
          thoughtful and skilled developer.
        </p>
      </div>
      <div className=" flex flex-col gap-5">
        <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
          What I <span className="text-purple-700">Focus </span>on
        </span>
        <p className="text-center sm:text-left text-[#d9d9d9] sm:pr-25">
          I focus on building clean and visually appealing interfaces. Most of
          my projects are done solo, so I make sure my code is readable and
          organized, even if I don’t always add comments. I enjoy solving
          problems and designing UI that feels interactive and engaging.
          Learning by working on projects is my favorite approach, and I dive
          deeper when something is really challenging.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
          Mini <span className="text-purple-700">Facts </span>
        </span>
        <ul className=" flex flex-col gap-3 text-center sm:text-left text-[#d9d9d9]">
          <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
            Built 8–10 real projects, all step by step
          </li>
          <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
            Prefer clean output over messy shortcuts
          </li>
          <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
            Enjoy solving problems and designing attractive UIs
          </li>
          <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
            Learn best through project-based work
          </li>
          <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
            Plan my projects in detail before coding
          </li>
          <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
            Care most that the work runs well and looks clean
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:gap-18 gap-10">
        <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
          Short <span className="text-purple-700">Timeline</span>
        </span>
        <div className="relative text-[#d9d9d9] sm:pl-0 pl-6">
          <div className="bg-purple-800 noise rounded-full size-5 absolute -top-2 left-4 sm:left-0 z-1"></div>
          <div className="bg-purple-800 noise rounded-full size-5 absolute sm:-top-2 top-25 left-4 sm:left-30 z-1"></div>
          <div className="bg-purple-800 noise rounded-full size-5 absolute sm:-top-2 top-50 left-4 sm:left-60 z-1"></div>
          <div className="bg-purple-800 noise rounded-full size-5 absolute sm:-top-2 top-75 left-4 sm:left-90 z-1 "></div>
          <span className="text-sm  absolute sm:-top-12 top-25 left-14 sm:left-10">
            Learned HTML, CSS, JS & TS
          </span>
          <span className="text-sm  absolute sm:-top-12 top-75 left-14 sm:left-62">
            Focused on code quality & smooth UX
          </span>
          <div className="bg-[#0c0c0c] noise-gray sm:w-130 sm:h-1 w-1 h-100"></div>
          <span className="text-sm relative sm:top-2 sm:-left-1 left-8 -top-102.5">
            Start
          </span>
          <span className="text-sm  absolute sm:top-7 top-50 sm:left-36">
            Built projects with React & Next.js
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
