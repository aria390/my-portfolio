"use client";

import ToolsCardSample from "@/common-components/ToolsCardSample";
import reactImg from "@/img/react-icon.webp";
import zustandImg from "@/img/zustand-icon.png";
import i18nextImg from "@/img/i18next-icon.png";
import clsxImg from "@/img/clsx-icon.png";
import swiperImg from "@/img/swiper-icon.png";
import apexChartImg from "@/img/apexchart-icon.png";
import pwaImg from "@/img/pwa-icon.png";
import axiosImg from "@/img/axios.png";



import { motion } from "framer-motion";

const Library = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, paddingTop: 15 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        whileInView={{ opacity: 1, paddingTop: 0 }}
        viewport={{ once: true }}
        className="text-white flex flex-col items-center sm:items-baseline gap-8"
      >
        <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center bg-linear-to-r from-[#d9d9d9] from-10% via-purple-300 via-30% to-purple-800 to-90% bg-clip-text text-transparent pb-2">
          Libraries
        </span>
        <div className="grid sm:grid-cols-2 gap-5  grid-cols-1">
          <ToolsCardSample
            image={reactImg.src}
            TName="React-Query"
            ToolDo="Library"
          />
          <ToolsCardSample
            image={reactImg.src}
            TName="React-router"
            ToolDo="Library"
          />
          <ToolsCardSample
            image={reactImg.src}
            TName="React-hook-form"
            ToolDo="Library"
          />
          <ToolsCardSample
            image={zustandImg.src}
            TName="Zustand"
            ToolDo="Library"
          />
          <ToolsCardSample
            image={i18nextImg.src}
            TName="i18Next"
            ToolDo="Library"
          />
          <ToolsCardSample image={clsxImg.src} TName="clsx" ToolDo="Library" />
          <ToolsCardSample
            image={swiperImg.src}
            TName="swiper"
            ToolDo="Library"
          />
          <ToolsCardSample
            image={apexChartImg.src}
            TName="ApexChart"
            ToolDo="Library"
          />
          <ToolsCardSample
            image={pwaImg.src}
            TName="PWA"
            ToolDo="Library"
          />
          <ToolsCardSample
            image={axiosImg.src}
            TName="Axios"
            ToolDo="Library"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Library;
