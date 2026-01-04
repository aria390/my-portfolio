"use client";
import myImg from "@/img/photo_5956496783854734361_y.jpg";
import myImgP1 from "@/img";

import ProjectsCardSample from "./ProjectsCardSample";

const Projects = () => {
  return (
    <div className="text-white flex flex-col items-center gap-8">
      <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center sm:pr-80">
        Recent Projects and
        <span className="text-purple-700"> Achievements</span>
      </span>
      <div className="grid sm:grid-cols-2 gap-5 sm:pr-16 grid-cols-1">
        <a href="https://github.com/aria390/greencart_next.git">
          <ProjectsCardSample
            PName="GreenCart"
            InformationOfProject="A store site with next.js"
            image={myImgP1.src}
          />
        </a>
        <ProjectsCardSample
          PName="Resume"
          InformationOfProject="hello hi"
          image={myImg.src}
        />
        <ProjectsCardSample
          PName="Resume"
          InformationOfProject="hello hi"
          image={myImg.src}
        />
        <ProjectsCardSample
          PName="Resume"
          InformationOfProject="hello hi"
          image={myImg.src}
        />
      </div>
    </div>
  );
};

export default Projects;
