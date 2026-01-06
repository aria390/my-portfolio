import LandingSite from "./UI-mainPage/LandingSite";
import MySelf from "./UI-mainPage/MySelf";
import Projects from "./UI-mainPage/Projects";
import SoftSkillAnime from "./UI-mainPage/SoftSkillAnime";
import Tools from "./UI-mainPage/Tools";

export default function Home() {
  return (
    <div className="flex flex-col gap-18">
      <LandingSite />
      <SoftSkillAnime />
      <Projects />
      <Tools />
    </div>
  );
}
