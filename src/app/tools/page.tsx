import React from "react";
import FrameWorks from "./UI/FrameWorks";
import Language from "./UI/Language";
import StyleAndAnimation from "./UI/StyleAndAnimation";
import Library from "./UI/Library";
import DevOpsTool from "./UI/DevOpsTool";
import Testing from "./UI/Testing";

const page = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <FrameWorks />
      <Language />
      <StyleAndAnimation />
      <Library />
      <Testing />
      <DevOpsTool />
    </div>
  );
};

export default page;
