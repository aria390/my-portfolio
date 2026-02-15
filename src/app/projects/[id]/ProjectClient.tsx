"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/app/api/projectsApi/route";
import CommonButton from "@/common-components/CommonButton";

type Props = {
  project: Project;
};

const ProjectClient = ({ project }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="text-white flex  z-10"
    >
      <div className="bg-[#0c0c0c] noise rounded-2xl sm:w-[650px] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover"
        />

        <div className="p-4 flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <span className="text-purple-600 font-semibold">
              {project.category}
            </span>
          </div>

          <p className="text-[#d9d9d9]">{project.description}</p>

          <div className="flex gap-4 pt-2 items-center">
            <Link href={project.githubUrl}>
              <CommonButton>GitHub</CommonButton>
            </Link>

            <Link href="/projects">
              <div className="cursor-pointer flex gap-1 group hover:gap-2 duration-200">
                <span>Back</span>
                <svg
                  fill="#000000"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  id="right-arrow"
                  data-name="Flat Color"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white group-hover:fill-purple-700 duration-200"
                >
                  <path
                    id="primary"
                    d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectClient;
