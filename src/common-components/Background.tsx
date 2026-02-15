import React from "react";

const Background = () => {
  return (
    <div className="h-full w-full fixed">
      <div className="sm:size-60 size-36 sm:bg-purple-900 bg-purple-800 absolute rounded-full blur-3xl sm:left-30 left-30 -top-10"></div>
      <div className="sm:size-60 bg-purple-900 absolute rounded-full blur-3xl lg:left-220 top-18"></div>
    </div>
  );
};

export default Background;
