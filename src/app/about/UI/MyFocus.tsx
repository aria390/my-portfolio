"use client";

import React from "react";
import { motion } from "framer-motion";

const MyFocus = () => {
  return (
    <motion.div
      initial={{ opacity: 0,paddingTop:15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1 ,paddingTop:0}}
      viewport={{ once: true }}
      className=" flex flex-col gap-5 pb-2"
    >
      <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
        What I <span className="text-purple-700">Focus </span>on
      </span>
      <p className="text-center sm:text-left text-[#d9d9d9] sm:pr-25">
        I focus on building clean and visually appealing interfaces. Most of my
        projects are done solo, so I make sure my code is readable and
        organized, even if I don’t always add comments. I enjoy solving problems
        and designing UI that feels interactive and engaging. Learning by
        working on projects is my favorite approach, and I dive deeper when
        something is really challenging.
      </p>
    </motion.div>
  );
};

export default MyFocus;
