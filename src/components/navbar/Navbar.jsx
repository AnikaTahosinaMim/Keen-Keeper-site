import React from "react";
import { CiHome } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import Mynavbar from "./Mynavbar";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1 container mx-auto items-center">
          <h2 className="text-sm md:text-2xl font-bold">
            Keen <span className="text-[#244D3F]"> Keeper </span>{" "}
          </h2>
        </div>
        <div className="flex-none">
          <ul className="flex  gap-4 font-semibold px-2 text-sm md:text-[16px]">
            <li>
              <Mynavbar className="flex gap-1 items-center" to={"/"}>
                <CiHome></CiHome> Home
              </Mynavbar>
            </li>
            <li>
              <Mynavbar className="flex gap-1 items-center" to={"/timeline"}>
                <IoMdTime></IoMdTime> Timeline{" "}
              </Mynavbar>
            </li>
            <li>
              <Mynavbar className="flex gap-1 items-center" to={"/status"}>
                <GoGraph></GoGraph> Status{" "}
              </Mynavbar>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
