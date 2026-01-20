"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMySelf = () => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className=" flex flex-col gap-5 "
    >
      <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
        About <span className="text-purple-700">Me</span>
      </span>
      <p className="text-center sm:text-left text-[#d9d9d9] sm:pr-25">
        I’m a Junior Frontend Developer who enjoys building clean, responsive,
        and well-structured web interfaces. I focus on writing maintainable
        code, understanding concepts deeply, and improving step by step rather
        than rushing results. I’ve worked with modern frontend tools like React
        and Next.js, and I care about how users interact with what I build —
        from performance to small details and interactions. I’m always learning,
        experimenting, and pushing myself to become a more thoughtful and
        skilled developer.
      </p>
    </motion.div>
  );
};

export default AboutMySelf;
