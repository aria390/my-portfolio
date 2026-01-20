"use client";

import ToolsCardSample from "@/common-components/ToolsCardSample";
import tailwindImg from "@/img/tailwind-icon-2.png";
import frameMotionImg from "@/img/framemotion-icon.png";

import { motion } from "framer-motion";

const StyleAndAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      className="text-white flex flex-col items-center sm:items-baseline gap-8"
    >
      <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent pb-2">
        Style & animation
      </span>
      <div className="grid sm:grid-cols-2 gap-5  grid-cols-1">
        <ToolsCardSample
          image={tailwindImg.src}
          TName="tailwind"
          ToolDo="Style & animation"
        />
        <ToolsCardSample
          image={frameMotionImg.src}
          TName="framer-motion"
          ToolDo="Style & animation"
        />
      </div>
    </motion.div>
  );
};

export default StyleAndAnimation;
