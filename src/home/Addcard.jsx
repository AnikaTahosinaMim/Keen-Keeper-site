import React from "react";
import { FaPlus } from "react-icons/fa";

const Addcard = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center justify-center items-center space-y-4 my-10">
        <h2 className="text-4xl font-bold">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <div className="text-center justify-center items-center">
          <button className="btn bg-[#244D3F] text-white">
            <FaPlus></FaPlus> Add to Friend
          </button>
        </div>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="py-10 px-4  rounded-md shadow-lg text-center justify-center items-center">
          <h2 className="font-bold text-3xl text-[#244D3F]">10</h2>
          <h3 className="text-[#64748B] text-xl">Total Friend</h3>
        </div>
        <div className="py-10 px-4  rounded-md shadow-lg text-center justify-center items-center">
          <h2 className="font-bold text-3xl text-[#244D3F]">3</h2>
          <h3 className="text-[#64748B] text-xl">On Track</h3>
        </div>
        <div className="py-10 px-4  rounded-md shadow-lg text-center justify-center items-center">
          <h2 className="font-bold text-3xl text-[#244D3F]">6</h2>
          <h3 className="text-[#64748B] text-xl">Need Attention</h3>
        </div>
        <div className="py-10 px-4  rounded-md shadow-lg text-center justify-center items-center">
          <h2 className="font-bold text-3xl text-[#244D3F]">12</h2>
          <h3 className="text-[#64748B] text-xl">Interactions This Month</h3>
        </div>
      </div>
    </div>
  );
};

export default Addcard;
