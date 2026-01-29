"use client";
import { motion } from "framer-motion";

type Tbutton = {
  children: React.ReactNode;
};

const CommonButton = ({ children }: Tbutton) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.7)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-purple-700 noise px-12 py-2 rounded-md  cursor-pointer text-white font-semibold"
    >
      {children}
    </motion.button>
  );
};
export default CommonButton;
