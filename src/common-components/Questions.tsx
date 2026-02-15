"use client";

import React, { useState } from "react";
import CardQA from "./CardQA";
import { motion } from "framer-motion";

const Questions = () => {
  const [openCards, setOpenCards] = useState({
    card1: false,
    card2: false,
    card3: false,
  });
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 70 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 60 }}
      className=" flex flex-col h-full gap-8 pt-20 text-white"
    >
      <span className="text-4xl sm:text-5xl font-bold sm:text-left text-center sm:pr-65">
        Frequently Asked <span className="text-purple-700">Questions</span>
      </span>
      <div className="flex flex-col gap-4">
        <CardQA
          answer="I try to understand the problem first instead of rushing to a solution. I debug step by step and prefer fixing the root cause rather than quick hacks."
          title="How do I deal with challenges or bugs in frontend development?"
        ></CardQA>
        <CardQA
          answer="I’m focusing on writing better component structures, improving UI performance, and building interfaces that feel smooth and responsive."
          title="What am I currently trying to improve as a frontend developer?"
        ></CardQA>
        <CardQA
          answer="I prefer simple designs that load fast and feel smooth. If a visual detail hurts performance or usability, I usually avoid it."
          title="How do I balance design and performance?"
        ></CardQA>
        <CardQA
          answer="I’m improving my React patterns, component design, and working more with TypeScript to write safer and cleaner code."
          title="What am I actively learning or improving right now?"
        ></CardQA>
        <CardQA
          answer="I start with structure and clarity. A clear component structure and predictable behavior matter more to me than visual details at the beginning."
          title="What do I usually prioritize when starting a new project?"
        ></CardQA>
      </div>
    </motion.div>
  );
};

export default Questions;
