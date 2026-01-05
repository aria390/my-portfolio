"use client";
import myImgP4 from "@/img/projFour.jpg";

interface IToolsSample {
  image: string;
  TName: string;
  ToolDo: string;
}

const ToolsCardSample = ({ image, TName, ToolDo }: IToolsSample) => {
  return (
    <div className="group">
      <div className="flex gap-3 bg-[#0c0c0c] noise-gray p-3 rounded-xl w-80 cursor-pointer group-hover:bg-purple-700 duration-400">
        <img className="size-16 rounded-2xl" src={image} alt="" />
        <div className="flex flex-col gap-1 justify-center">
          <span className="text-2xl">{TName}</span>
          <span className="text-[#d9d9d9]">{ToolDo}</span>
        </div>
      </div>
    </div>
  );
};

export default ToolsCardSample;
