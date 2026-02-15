"use client";

import ToolsCardSample from "@/common-components/ToolsCardSample";
import React from "react";
import reactImg from "@/img/react-icon.webp";
import nextImg from "@/img/next-icon-2.png";
import jsImg from "@/img/js-icon.png";
import tsImg from "@/img/ts-icon-2.png";
import tailwindImg from "@/img/tailwind-icon-2.png";
import githubImg from "@/img/github-icon.png";
import { motion } from "framer-motion";

const Tools = () => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="text-white flex flex-col items-center md:items-start lg:items-start gap-8"
    >
      <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center sm:pr-105">
        Top-Tier
        <span className="text-purple-700"> Tools</span>
      </span>
      <div className="grid sm:grid-cols-2  gap-5 sm:pr-20 grid-cols-1">
        <ToolsCardSample
          image={reactImg.src}
          TName="React"
          ToolDo="FrameWork"
        />
        <ToolsCardSample image={nextImg.src} TName="Next" ToolDo="FrameWork" />
        <ToolsCardSample
          image={jsImg.src}
          TName="javascript"
          ToolDo="Language"
        />
        <ToolsCardSample
          image={tsImg.src}
          TName="typescript"
          ToolDo="Language"
        />
        <ToolsCardSample
          image={tailwindImg.src}
          TName="tailwind"
          ToolDo="Style & animation"
        />
        <ToolsCardSample
          image={githubImg.src}
          TName="Git & Github"
          ToolDo="DevOps"
        />
      </div>
    </motion.div>
  );
};

export default Tools;
