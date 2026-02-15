"use client";

import CommonButton from "@/common-components/CommonButton";
import { useActiveHeader } from "@/Store/HeaderState";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const LandingSite = () => {
  const { setActiveHeader } = useActiveHeader();

  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="text-white flex flex-col gap-5"
    >
      <div className="flex flex-col gap-3">
        <span className="sm:text-6xl text-5xl  sm:text-left font-bold text-center">
          Transforming Your <br /> Ideas into
          <span className="text-purple-700"> Reality</span>
        </span>
        <span className="text-[#d9d9d9] sm:text-left sm:pr-70 text-center">
          Front-end developer focused on building clean, responsive, and
          user-friendly web interfaces with modern technologies.
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex sm:gap-16 gap-10">
          <div className="flex flex-col gap-2">
            <span className="sm:text-6xl text-5xl font-bold">+6</span>
            <span className="text-[#d9d9d9]">
              Month OF <br /> EXPERIENCE
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-6xl text-5xl font-bold">+28</span>
            <span className="text-[#d9d9d9]">
              PROJECTS <br /> COMPLETED
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="sm:text-6xl text-5xl font-bold">+1</span>
            <span className="text-[#d9d9d9]">
              WORLDWIDE <br /> CLIENTS
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center sm:justify-start">
          <Link href="about">
            <CommonButton>About Me</CommonButton>
          </Link>
          <Link href="projects">
            <div className="cursor-pointer flex gap-1 group hover:gap-2 duration-200">
              <span>My Work</span>
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
    </motion.div>
  );
};

export default LandingSite;
