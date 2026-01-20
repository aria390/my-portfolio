"use client";
import myImgP1 from "@/img/projOne.jpg";
import myImgP2 from "@/img/projTwo.png";
import myImgP3 from "@/img/projThree.jpg";
import myImgP4 from "@/img/projFour.jpg";

import ProjectsCardSample from "../../common-components/ProjectsCardSample";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0,paddingTop:15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1 ,paddingTop:0}}
      viewport={{ once: true }}
      className="text-white flex flex-col items-center gap-8 "
    >
      <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center sm:pr-80">
        Recent Projects and
        <span className="text-purple-700"> Achievements</span>
      </span>
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

export default Projects;
