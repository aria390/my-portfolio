import LandingSite from "./UI-mainPage/LandingSite";
import MySelf from "./UI-mainPage/MySelf";

export default function Home() {
  return (
    <section className="flex flex-col sm:relative sm:flex-row sm:px-55 sm:gap-16 gap-10 px-5">
      <MySelf />
      <div>
        <LandingSite />
      </div>
    </section>
  );
}
