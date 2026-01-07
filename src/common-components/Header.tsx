"use client";

import { useActiveHeader } from "@/Store/HeaderState";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mouseOneHome, setmouseonHome] = useState(false);
  const [mouseOneProjet, setmouseonProjet] = useState(false);
  const [mouseOneTool, setmouseonTool] = useState(false);
  const [mouseOneAboutMe, setmouseOneAboutMe] = useState(false);
  const [mouseOneContant, setmouseOneContant] = useState(false);

  const { activeHeader, setActiveHeader } = useActiveHeader();

  return (
    <div className="pt-8 justify-center flex pb-18">
      <section className="flex gap-3 px-4 p-1 bg-[#0c0c0c] noise-gray  rounded-xl">
        <Link href="/">
          <div
            onClick={() => {
              setActiveHeader("Home");
            }}
            onMouseEnter={() => {
              setmouseonHome(true);
            }}
            onMouseLeave={() => {
              setmouseonHome(false);
            }}
            className="flex items-center justify-center relative  cursor-pointer p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(255, 255, 255)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="z-10"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <div
              className={clsx(
                "bg-purple-700 noise w-9 h-9 rounded-md absolute z-1",
                activeHeader === "Home"
                  ? "bg-purple-700"
                  : {
                      "visible anime": mouseOneHome === true,
                      "invisible ": mouseOneHome === false,
                    }
              )}
            ></div>
            <div
              className={clsx(
                "absolute text-white text-[12px] font-semibold bg-[#28292A] rounded-sm px-2",
                {
                  "visible animeName": mouseOneHome === true,
                  "invisible ": mouseOneHome === false,
                }
              )}
            >
              <span>Home</span>
            </div>
          </div>
        </Link>
        <div
          onClick={() => {
            setActiveHeader("Projects");
          }}
          onMouseEnter={() => {
            setmouseonProjet(true);
          }}
          onMouseLeave={() => {
            setmouseonProjet(false);
          }}
          className="flex items-center justify-center relative  cursor-pointer p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(255, 255, 255)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="z-10"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div
            className={clsx(
              "bg-purple-700 noise w-9 h-9 rounded-md absolute z-1",
              activeHeader === "Projects"
                ? "bg-purple-700"
                : {
                    "visible anime": mouseOneProjet === true,
                    "invisible ": mouseOneProjet === false,
                  }
            )}
          ></div>
          <div
            className={clsx(
              "absolute text-white text-[12px] font-semibold bg-[#28292A] rounded-sm px-2",
              {
                "visible animeName": mouseOneProjet === true,
                "invisible ": mouseOneProjet === false,
              }
            )}
          >
            <span>Projects</span>
          </div>
        </div>
        <div
          onClick={() => {
            setActiveHeader("Tools");
          }}
          onMouseEnter={() => {
            setmouseonTool(true);
          }}
          onMouseLeave={() => {
            setmouseonTool(false);
          }}
          className="flex items-center justify-center relative  cursor-pointer p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(255, 255, 255)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="z-10"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
          <div
            className={clsx(
              "bg-purple-700 noise w-9 h-9 rounded-md absolute z-1",
              activeHeader === "Tools"
                ? "bg-purple-700"
                : {
                    "visible anime": mouseOneTool === true,
                    "invisible ": mouseOneTool === false,
                  }
            )}
          ></div>
          <div
            className={clsx(
              "absolute text-white text-[12px] font-semibold bg-[#28292A] rounded-sm px-2",
              {
                "visible animeName": mouseOneTool === true,
                "invisible ": mouseOneTool === false,
              }
            )}
          >
            <span>Tools</span>
          </div>
        </div>
        <Link href="about">
          <div
            onClick={() => {
              setActiveHeader("About");
            }}
            onMouseEnter={() => {
              setmouseOneAboutMe(true);
            }}
            onMouseLeave={() => {
              setmouseOneAboutMe(false);
            }}
            className="flex items-center justify-center relative  cursor-pointer p-2 rounded-md"
          >
            <svg
              className="z-10 fill-white"
              fill="#000000"
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />

              <g id="about">
                <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />

                <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
              </g>
            </svg>
            <div
              className={clsx(
                "bg-purple-700 noise w-9 h-9 rounded-md absolute z-1",
                activeHeader === "About"
                  ? "bg-purple-700"
                  : {
                      "visible anime": mouseOneAboutMe === true,
                      "invisible ": mouseOneAboutMe === false,
                    }
              )}
            ></div>
            <div
              className={clsx(
                "absolute text-white text-[12px] font-semibold bg-[#28292A] rounded-sm px-2",
                {
                  "visible animeName": mouseOneAboutMe === true,
                  "invisible ": mouseOneAboutMe === false,
                }
              )}
            >
              <span>About</span>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Header;
