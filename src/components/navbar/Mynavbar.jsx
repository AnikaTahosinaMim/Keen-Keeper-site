import React from "react";
import { NavLink } from "react-router";

const Mynavbar = ({ to, children, className }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${className} ${isActive ? "text-white bg-[#244D3F] font-bold px-2 py-1 rounded" : "py-1"} `
        }
      >
        {" "}
        {children}{" "}
      </NavLink>
    </div>
  );
};

export default Mynavbar;
