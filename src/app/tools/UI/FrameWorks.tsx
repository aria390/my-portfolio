"use client";

import ToolsCardSample from "@/common-components/ToolsCardSample";
import nextImg from "@/img/next-icon-2.png";
import reactImg from "@/img/react-icon.webp";
import { motion } from "framer-motion";

const FrameWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="text-white flex flex-col items-center sm:items-baseline gap-8"
    >
      <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent pb-2">
        FrameWorks
      </span>
      <div className="grid sm:grid-cols-2 gap-5  grid-cols-1 ">
        <ToolsCardSample
          image={reactImg.src}
          TName="React"
          ToolDo="FrameWork"
        />
        <ToolsCardSample image={nextImg.src} TName="Next" ToolDo="FrameWork" />
      </div>
    </motion.div>
  );
};

export default FrameWorks;
