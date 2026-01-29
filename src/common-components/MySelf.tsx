"use client";
import CommonButton from "@/common-components/CommonButton";
import myImg from "@/img/photo_5956496783854734361_y.jpg";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const mySelf = () => {
  const email = "ariabahmanzangi@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const Instagram = "aria_bz3_0";
  const [copiedInsta, setCopiedInsta] = useState(false);
  const copyInstagram = async () => {
    await navigator.clipboard.writeText(Instagram);
    setCopiedInsta(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, paddingTop: 15 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center sm:w-90 sm:sticky sm:top-10">
        <section className="text-white sm:w-100 flex flex-col items-center py-7 sm:px-12 px-10 gap-18 bg-[#0c0c0c] noise-gray rounded-2xl">
          <div className="flex flex-col gap-1 items-center">
            <div className="pb-4">
              <img className="w-60 h-75 rounded-2xl" src={myImg.src} alt="" />
            </div>
            <span className="text-3xl font-semibold">Aria Bahmanzangi</span>
            <span className="text-[#d9d9d9]">Front-end Developer</span>
            <span className="text-[#d9d9d9]">Iran,Tehran</span>
            <ul className="flex gap-2 pt-2">
              <Link href="https://github.com/aria390?tab=overview&from=2025-12-01&to=2025-12-31">
                <li className="cursor-pointer flex items-center justify-center relative">
                  <svg
                    className="z-1 fill-white hover:scale-110 duration-300"
                    fill="#000000"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                  </svg>
                </li>
              </Link>
              <li
                onClick={copyInstagram}
                className="cursor-pointer flex items-center justify-center relative"
              >
                <svg
                  className="z-1 fill-white hover:scale-110 duration-300"
                  fill="#000000"
                  width="30px"
                  height="30px"
                  viewBox="-2 -2 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                >
                  <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z" />
                  <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z" />
                  <circle cx="15.156" cy="4.858" r="1.237" />
                </svg>
                <div
                  className={clsx(
                    "absolute text-white text-[10px] font-semibold bg-purple-600 rounded-sm px-2",
                    {
                      "visible animeName": copiedInsta,
                      "invisible ": !copiedInsta,
                    },
                  )}
                >
                  <span>Copied</span>
                </div>
              </li>
              <li className="cursor-pointer flex items-center justify-center relative">
                <svg
                  className="z-1 fill-white rounded-full hover:scale-110 duration-300"
                  fill="#000000"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                </svg>
              </li>
              <li
                onClick={copyEmail}
                className="cursor-pointer flex flex-col items-center justify-center relative"
              >
                <svg
                  className="z-1 hover:scale-110 duration-300"
                  fill="white"
                  width="30px"
                  height="30px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z" />
                </svg>

                <div
                  className={clsx(
                    "absolute text-white text-[10px] font-semibold bg-purple-600 rounded-sm px-2",
                    {
                      "visible animeName": copied,
                      "invisible ": !copied,
                    },
                  )}
                >
                  <span>Copied</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <CommonButton>Get Resume</CommonButton>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default mySelf;
