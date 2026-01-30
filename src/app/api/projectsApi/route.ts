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
    description:
      "A Next.js e-commerce project with dynamic routing and API integration including a shopping cart and user authentication with login and registration while the main challenges were handling dynamic routes and building a reliable cart system",
    image: "/img/projOne.jpg",
    githubUrl: "https://github.com/aria390/Go-Green.git",
    demoUrl: "",
  },
  {
    id: "2",
    title: "Resume Builder",
    category: "React",
    description:
      "A React project with API integration featuring login and registration pages and a user dashboard where users can build their own resume which was the main challenge of the project since input data is collected and dynamically displayed on a live preview page while the website is not fully completed but most of the core and required features have been implemented",
    image: "/img/projTwo.png",
    githubUrl: "https://github.com/aria390/Resume-Builder.git",
    demoUrl: "",
  },
  {
    id: "3",
    title: "Car Rental",
    category: "React",
    description:
      "A React project with smooth and visually appealing animations which was my first complete React project featuring a fully responsive layout along with a sidebar component and API integration",
    image: "/img/projThree.jpg",
    githubUrl: "https://github.com/aria390/Car-Rental-react.git",
    demoUrl: "",
  },
  {
    id: "4",
    title: "Catch The Insect",
    category: "js",
    description:
      "A JavaScript-based website featuring a simple game where users choose an insect and then earn points by eliminating appearing insects on the screen while a game timer starts from the beginning with this project being particularly challenging and technically demanding to implement",
    image: "/img/projFour.jpg",
    githubUrl: "https://github.com/aria390/catch-me-2-tamrin.git",
    demoUrl: "",
  },
  {
    id: "5",
    title: "Hamrah man",
    category: "React",
    description:
      "A React website recreating the Hamrah Man platform built without API integration using multiple libraries such as ApexCharts and Swiper for charts and sliders along with i18next for multilingual support while currently implemented only in Persian and designed with a mobile-first approach",
    image: "/img/proj-5.png",
    githubUrl: "https://github.com/aria390/hamrah-man.git",
    demoUrl: "",
  },
  {
    id: "6",
    title: "Go Green",
    category: "ts",
    description:
      "A TypeScript-based website that involved many challenges featuring a slider a skill section with an on-scroll animation that triggers when it enters the viewport and a section with filtering functionality",
    image: "/img/proj-6.jpg",
    githubUrl: "https://github.com/aria390/Go-Green.git",
    demoUrl: "",
  },
  {
    id: "7",
    title: "kanban",
    category: "ts",
    description:
      "A very simple TypeScript-based Kanban application with a single-page layout where tasks and to-do items are created through a model and stored persistently using local storage featuring both dark and light mode",
    image: "/img/proj-7.jpg",
    githubUrl: "https://github.com/aria390/kanban-type-script.git",
    demoUrl: "",
  },
  {
    id: "8",
    title: "Homyz",
    category: "js",
    description:
      "A JavaScript website with simple and visually appealing animations fully responsive and this was my final JavaScript project before moving on to TypeScript",
    image: "/img/proj-8.jpg",
    githubUrl: "https://github.com/aria390/java-script-final-project.git",
    demoUrl: "",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
