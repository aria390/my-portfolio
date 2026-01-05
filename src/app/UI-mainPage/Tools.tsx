import ToolsCardSample from "@/common-components/ToolsCardSample";
import React from "react";
import reactImg from "@/img/react-icon.webp";

const Tools = () => {
  return (
    <div className="text-white flex flex-col items-center gap-8">
      <span className="sm:text-5xl text-4xl sm:text-left font-bold text-center sm:pr-105">
        Top-Tier
        <span className="text-purple-700"> Tools</span>
      </span>
      <div className="grid sm:grid-cols-2 gap-5 sm:pr-20 grid-cols-1">
        <a href="https://github.com/aria390/greencart_next.git">
          <ToolsCardSample
            image={reactImg.src}
            TName="React"
            ToolDo="FrameWork"
          />
        </a>
        <a href="https://github.com/aria390/Resume-Builder.git">
          <ToolsCardSample
            image={reactImg.src}
            TName="React"
            ToolDo="FrameWork"
          />
        </a>
        <a href="https://github.com/aria390/Car-Rental-react.git">
          <ToolsCardSample
            image={reactImg.src}
            TName="React"
            ToolDo="FrameWork"
          />
        </a>
        <a href="https://github.com/aria390/catch-me.git">
          <ToolsCardSample
            image={reactImg.src}
            TName="React"
            ToolDo="FrameWork"
          />
        </a>
      </div>
    </div>
  );
};

export default Tools;
