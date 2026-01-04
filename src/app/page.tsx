import LandingSite from "./UI-mainPage/LandingSite";
import MySelf from "./UI-mainPage/MySelf";
import Projects from "./UI-mainPage/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <LandingSite />
      <Projects/>
    </div>
  );
}
