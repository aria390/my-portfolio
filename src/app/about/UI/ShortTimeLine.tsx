"use client";

import React from "react";
import { motion } from "framer-motion";

const ShortTimeLine = () => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="flex flex-col sm:gap-20 gap-10"
    >
      <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
        Short <span className="text-purple-700">Timeline</span>
      </span>
      <div className="flex">
        <div className="relative w-full text-[#d9d9d9] lg:pl-0 pl-6 ">
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
    </motion.div>
  );
};

export default ShortTimeLine;
