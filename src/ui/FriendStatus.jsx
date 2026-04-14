import React from "react";

const FriendStatus = ({ expetedFriend }) => {
  console.log(expetedFriend);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="py-10 rounded-lg shadow-lg text-center">
        <h1 className="text-[#244D3F] font-bold text-2xl">60</h1>
        <p>Days Since Contact</p>
      </div>
      <div className="py-10 px-[70px] rounded-lg shadow-lg text-center">
        <h2 className="text-[#244D3F] font-bold text-2xl">30</h2>
        <p>Goal (Days)</p>
      </div>
      <div className="py-10 rounded-lg shadow-lg text-center">
        <h2 className="text-[#244D3F] font-bold text-2xl">30-10-2034</h2>
        <p>Next due</p>
      </div>
    </div>
  );
};

export default FriendStatus;
