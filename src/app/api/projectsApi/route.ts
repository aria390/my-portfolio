import { NextResponse } from "next/server";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "GreenCart",
    category: "Next",
    description: "A store site with next.js ",
    image: "/img/projOne.jpg",
    githubUrl: "https://github.com/aria390/Go-Green.git",
    demoUrl: "",
  },
  {
    id: "2",
    title: "Resume Builder",
    category: "React",
    description: "A resume building site with a dashboard",
    image: "/img/projTwo.png",
    githubUrl: "https://github.com/aria390/Resume-Builder.git",
    demoUrl: "",
  },
  {
    id: "3",
    title: "Car Rental",
    category: "React",
    description: "A car rental site with animation",
    image: "/img/projThree.jpg",
    githubUrl: "https://github.com/aria390/Car-Rental-react.git",
    demoUrl: "",
  },
  {
    id: "4",
    title: "Catch The Insect",
    category: "js",
    description: "A simple game written in js",
    image: "/img/projFour.jpg",
    githubUrl: "https://github.com/aria390/catch-me-2-tamrin.git",
    demoUrl: "",
  },
  {
    id: "5",
    title: "Hamrah man",
    category: "React",
    description: "A react project with 18Next",
    image: "/img/proj-5.png",
    githubUrl: "https://github.com/aria390/hamrah-man.git",
    demoUrl: "",
  },
  {
    id: "6",
    title: "Go Green",
    category: "ts",
    description: "A ts project",
    image: "/img/proj-6.jpg",
    githubUrl: "https://github.com/aria390/Go-Green.git",
    demoUrl: "",
  },
  {
    id: "7",
    title: "kanban",
    category: "ts",
    description: "A simple kanban with dark/light mode",
    image: "/img/proj-7.jpg",
    githubUrl: "https://github.com/aria390/kanban-type-script.git",
    demoUrl: "",
  },
  {
    id: "8",
    title: "Homyz",
    category: "js",
    description: "A js project",
    image: "/img/proj-8.jpg",
    githubUrl: "https://github.com/aria390/java-script-final-project.git",
    demoUrl: "",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
