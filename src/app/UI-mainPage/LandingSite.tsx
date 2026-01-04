import React from "react";

const LandingSite = () => {
  return (
    <div className="text-white">
      <div>
        <span>
          Transforming Your Ideas into <span>Reality</span>
        </span>
        <span>
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </span>
      </div>
      <div>
        <div>
          <div>
            <span>+6 Month</span>
            <span>YEARS OF EXPERIENCE</span>
          </div>
          <div>
            <span>+28</span>
            <span>PROJECTS COMPLETED</span>
          </div>
          <div>
            <span>+1</span>
            <span>WORLDWIDE CLIENTS</span>
          </div>
        </div>
        <div className="flex">
          <div className="bg-purple-700 noise px-12 py-2 rounded-md cursor-pointer">
            <button className="cursor-pointer">Let's Talk</button>
          </div>
          <div>
            <span>My Work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSite;
