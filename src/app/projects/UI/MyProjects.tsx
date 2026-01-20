"use client";
import myImgP1 from "@/img/projOne.jpg";
import myImgP2 from "@/img/projTwo.png";
import myImgP3 from "@/img/projThree.jpg";
import myImgP4 from "@/img/projFour.jpg";

import ProjectsCardSample from "@/common-components/ProjectsCardSample";
import { motion } from "framer-motion";
import { useActiveProject } from "@/Store/ProjectSelect";
import clsx from "clsx";
import { useEffect, useState } from "react";

export type ProjectsValue = "All" | "ReactAndNext" | "TsAndJs";
export const VALID_PROJECT: ProjectsValue[] = [
  "All",
  "ReactAndNext",
  "TsAndJs",
];

const MyProjects = () => {
  const { activeProject, SetactiveProject } = useActiveProject();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("activeProject");
    if (saved && VALID_PROJECT.includes(saved as ProjectsValue)) {
      SetactiveProject(saved as ProjectsValue);
    }
  }, [SetactiveProject]);

  const handleClick = (value: ProjectsValue) => {
    SetactiveProject(value);
    sessionStorage.setItem("activeProject", value);
  };

  if (!mounted) return null; // تا mount نشدن، چیزی render نشه → hydration-safe

  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="text-white flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-5 sm:pr-20">
        <span className="sm:text-5xl text-4xl font-bold text-center px-10">
          My
          <span className="text-purple-700"> Projects</span>
        </span>
        <div className="bg-[#0c0c0c] noise-gray rounded-xl flex gap-2 justify-around p-2  *:hover:text-purple-600 *:duration-300">
          <button
            onClick={() => {
              handleClick("All");
            }}
            className={clsx(
              "sm:w-full cursor-pointer",
              activeProject === "All" ? "text-purple-600" : "text-white"
            )}
          >
            All
          </button>
          <div className="bg-white h-8 sm:w-1 w-0.5 mr-1"></div>
          <button
            onClick={() => {
              handleClick("ReactAndNext");
            }}
            className={clsx(
              "sm:w-full cursor-pointer",
              activeProject === "ReactAndNext"
                ? "text-purple-600"
                : "text-white"
            )}
          >
            React & Next
          </button>
          <div className="bg-white h-8 sm:w-1 w-0.5 ml-1"></div>
          <button
            onClick={() => {
              handleClick("TsAndJs");
            }}
            className={clsx(
              "sm:w-full cursor-pointer",
              activeProject === "TsAndJs" ? "text-purple-600" : "text-white"
            )}
          >
            Ts & Js
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 sm:pr-20 grid-cols-1">
        <a href="https://github.com/aria390/greencart_next.git">
          <ProjectsCardSample
            PName="GreenCart"
            InformationOfProject="A store site with next.js"
            image={myImgP1.src}
          />
        </a>
        <a href="https://github.com/aria390/Resume-Builder.git">
          <ProjectsCardSample
            PName="Resume Builder"
            InformationOfProject="A resume building site with a dashboard"
            image={myImgP2.src}
          />
        </a>
        <a href="https://github.com/aria390/Car-Rental-react.git">
          <ProjectsCardSample
            PName="Car Rental"
            InformationOfProject="A car rental site with animation"
            image={myImgP3.src}
          />
        </a>
        <a href="https://github.com/aria390/catch-me.git">
          <ProjectsCardSample
            PName="Catch The Insect"
            InformationOfProject="A simple game written in js"
            image={myImgP4.src}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default MyProjects;
