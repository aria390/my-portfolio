import React from "react";
import AboutMySelf from "./UI/AboutMySelf";
import MyFocus from "./UI/MyFocus";
import MiniFacts from "./UI/MiniFacts";
import ShortTimeLine from "./UI/ShortTimeLine";

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-18 text-white">
      <AboutMySelf />
      <MyFocus />
      <MiniFacts />
      <ShortTimeLine />
    </section>
  );
};

export default AboutMe;
