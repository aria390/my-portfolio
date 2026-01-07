"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CardPropsType {
  title: string;
  answer: string;
}

function CardQA({ title, answer }: CardPropsType) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="sm:w-[640px] w-[350px] bg-[#0c0c0c] noise-gray rounded-xl p-4 text-white cursor-pointer flex flex-col"
    >
      <div className="flex justify-between items-center">
        <span className="capitalize font-medium">{title}</span>
        <div>
          <svg
            className={`transition-transform duration-300 ease-in-out
        ${open ? "rotate-180 fill-purple-700" : "rotate-0 fill-white"}`}
            fill="white"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
          >
            <path d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z" />
          </svg>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={clsx({
          "mt-2": open === true,
          "mt-0": open === false,
        })}
      >
        <p className="text-[#d9d9d9] text-sm">{answer}</p>
      </motion.div>
    </div>
  );
}

export default CardQA;
