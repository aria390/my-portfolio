import React from "react";
import FrameWorks from "./UI/FrameWorks";
import Language from "./UI/Language";
import StyleAndAnimation from "./UI/StyleAndAnimation";
import Library from "./UI/Library";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <FrameWorks />
      <Language />
      <StyleAndAnimation />
      <Library />
    </div>
  );
};

export default page;
