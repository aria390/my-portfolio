"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

async function getProjects(): Promise<Project[]> {
  const res = await fetch("https://ariabz.netlify.app/api/projectsApi", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-white  py-30 text-center font-bold text-3xl">
        Loading...
      </p>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="text-white flex flex-col  md:items-start  lg:items-start items-center gap-8 "
    >
      <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center">
        Recent Projects and
        <span className="text-purple-700"> Achievements</span>
      </span>
      <div className="grid sm:grid-cols-2  gap-5 sm:pr-20 grid-cols-1">
        {projects.slice(0, 4).map((project) => (
          <div key={project.id} className="group">
            <Link href={`/projects/${project.id}`}>
              <div className="bg-[#0c0c0c] group-hover:scale-105 duration-300 noise-gray flex flex-col rounded-2xl w-80 cursor-pointer">
                <img
                  className="w-80 h-50 rounded-t-2xl"
                  src={project.image}
                  alt=""
                />
                <div className="p-3 flex flex-col gap-2">
                  <span className="text-3xl group-hover:text-purple-700 duration-300 font-semibold">
                    {project.title}
                  </span>
                  <span className="text-[#d9d9d9] pb-2">
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
