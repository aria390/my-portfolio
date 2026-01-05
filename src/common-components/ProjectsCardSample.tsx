"use client";

interface IProjectSample {
  image: string;
  PName: string;
  InformationOfProject: string;
}

const ProjectsCardSample = ({
  image,
  PName,
  InformationOfProject,
}: IProjectSample) => {
  return (
    <div className="group">
      <div className="bg-[#0c0c0c] group-hover:scale-105 duration-300 noise-gray flex flex-col rounded-2xl w-80 cursor-pointer">
        <img className="w-80 h-50 rounded-t-2xl" src={image} alt="" />
        <div className="p-3 flex flex-col gap-2">
          <span className="text-3xl group-hover:text-purple-700 duration-300 font-semibold">
            {PName}
          </span>
          <span className="text-[#d9d9d9] ">{InformationOfProject}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardSample;
