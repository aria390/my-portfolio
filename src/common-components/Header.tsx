"use client";

import { useActiveHeader } from "@/Store/HeaderState";
import clsx from "clsx";
import { useState } from "react";

const Header = () => {
  const [mouseOneHome, setmouseonHome] = useState(false);
  const [mouseOneProjet, setmouseonProjet] = useState(false);
  const [mouseOneTool, setmouseonTool] = useState(false);
  const [mouseOneExperimens, setmouseOneExperimens] = useState(false);
  const [mouseOneContant, setmouseOneContant] = useState(false);

  const { activeHeader, setActiveHeader } = useActiveHeader();

  return (
    <div className="pt-8 justify-center flex pb-18">
      <section className="flex gap-3 px-4 p-1 bg-[#0c0c0c] noise-gray  rounded-xl">
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
        <div
          onClick={() => {
            setActiveHeader("Experience");
          }}
          onMouseEnter={() => {
            setmouseOneExperimens(true);
          }}
          onMouseLeave={() => {
            setmouseOneExperimens(false);
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
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <div
            className={clsx(
              "bg-purple-700 noise w-9 h-9 rounded-md absolute z-1",
              activeHeader === "Experience"
                ? "bg-purple-700"
                : {
                    "visible anime": mouseOneExperimens === true,
                    "invisible ": mouseOneExperimens === false,
                  }
            )}
          ></div>
          <div
            className={clsx(
              "absolute text-white text-[12px] font-semibold bg-[#28292A] rounded-sm px-2",
              {
                "visible animeName": mouseOneExperimens === true,
                "invisible ": mouseOneExperimens === false,
              }
            )}
          >
            <span>Experience</span>
          </div>
        </div>

        <div
          onClick={() => {
            setActiveHeader("Contact");
          }}
          onMouseEnter={() => {
            setmouseOneContant(true);
          }}
          onMouseLeave={() => {
            setmouseOneContant(false);
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
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <div
            className={clsx(
              "bg-purple-700 noise w-9 h-9 rounded-md absolute z-1",
              activeHeader === "Contact"
                ? "bg-purple-700"
                : {
                    "visible anime": mouseOneContant === true,
                    "invisible ": mouseOneContant === false,
                  }
            )}
          ></div>
          <div
            className={clsx(
              "absolute text-white text-[12px] font-semibold bg-[#28292A] rounded-sm px-2",
              {
                "visible animeName": mouseOneContant === true,
                "invisible ": mouseOneContant === false,
              }
            )}
          >
            <span>Contact</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
