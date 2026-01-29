"use client";

import { motion } from "framer-motion";
import React from "react";

const SoftSkillAnime = () => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-2 text-white pb-4"
    >
      <span className="text-[#d9d9d9] sm:text-left text-center">
        Skills That Make Me Effective
      </span>
      <div className=" sm:w-150 overflow-hidden relative">
        <div className="absolute left-0 top-0  h-full w-20 z-10 pointer-events-none bg-linear-to-r from-[#101112] to-transparent"></div>
        <div className=" sm:w-150 ">
          <div className="animeSoftSkill flex gap-13 *:text-4xl *:font-semibold items-center pb-5 pt-3">
            <div>Teamwork</div>
            <div>Communication</div>
            <div>ProblemSolving</div>
            <div>Adaptability</div>
            <div>Creativity</div>
            <div>TimeManagement</div>
            <div>Teamwork</div>
            <div>Communication</div>
            <div>ProblemSolving</div>
            <div>Adaptability</div>
            <div>Creativity</div>
            <div>TimeManagement</div>
          </div>
        </div>
        <div className="absolute sm:right-0 top-0 -right-1 h-full w-20 z-10 pointer-events-none bg-linear-to-l from-[#101112] to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default SoftSkillAnime;
