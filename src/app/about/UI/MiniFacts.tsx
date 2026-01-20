"use client";

import React from "react";
import { motion } from "framer-motion";

const MiniFacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-5"
    >
      <span className="sm:text-5xl text-4xl pt-5 sm:pt-0 font-bold text-center sm:text-left">
        Mini <span className="text-purple-700">Facts </span>
      </span>
      <ul className=" flex flex-col gap-3 text-center sm:text-left text-[#d9d9d9]">
        <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
          Built 8–10 real projects, all step by step
        </li>
        <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
          Prefer clean output over messy shortcuts
        </li>
        <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
          Enjoy solving problems and designing attractive UIs
        </li>
        <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
          Learn best through project-based work
        </li>
        <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
          Plan my projects in detail before coding
        </li>
        <li className="bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent ">
          Care most that the work runs well and looks clean
        </li>
      </ul>
    </motion.div>
  );
};

export default MiniFacts;
