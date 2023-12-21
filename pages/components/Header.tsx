import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 px-10 flex flex-low items-center justify-between select-none">
      <button>Home</button>
      <div className="flex flex-low gap-3 select-none	">
        <button>About</button>
        <button>Skills</button>
        <button>Projects</button>
      </div>
    </div>
  );
};

export default Header;
