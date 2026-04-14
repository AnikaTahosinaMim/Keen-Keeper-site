import React from "react";
import { CiVideoOn } from "react-icons/ci";
import { LuHistory, LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";

const FriendBig = () => {
  return (
    <div>
     
      <div className="p-4 shadow-lg bg-white my-8">
        <div className="flex justify-between items-center">
          <h2>Recent Interactions</h2>
          <button className="flex gap-2">
            <LuHistory></LuHistory> Full History
          </button>
        </div>
        <div className="flex justify-between items-center my-5 px-4">
          <div className="flex gap-2 items-center">
            <div>
              <LuPhoneCall></LuPhoneCall>
            </div>
            <div>
              <p>Call</p>
              <p>Asked for career advice</p>
            </div>
          </div>
          <p>April 17 2026</p>
        </div>
        <hr className="text-gray-400" />

        <div className="flex justify-between items-center my-5 px-4">
          <div className="flex gap-2 items-center">
            <div>
              <LuMessageSquareMore></LuMessageSquareMore>
            </div>
            <div>
              <p>Text</p>
              <p>Asked for career advice</p>
            </div>
          </div>
          <p>April 17 2026</p>
        </div>
        <hr className="text-gray-400" />

        <div className="flex justify-between items-center my-5 px-4">
          <div className="flex gap-2 items-center">
            <div>
              <CiVideoOn></CiVideoOn>{" "}
            </div>
            <div>
              <p>Video</p>
              <p>Asked for career advice</p>
            </div>
          </div>
          <p>April 17 2026</p>
        </div>
        <hr className="text-gray-400" />

        <div className="flex justify-between items-center my-5 px-4">
          <div className="flex gap-2 items-center">
            <div>
              <LuPhoneCall></LuPhoneCall>
            </div>
            <div>
              <p>Meetup</p>
              <p>Industry conference meetup</p>
            </div>
          </div>
          <p>April 17 2026</p>
        </div>
        <hr className="text-gray-400" />
      </div>
    </div>
  );
};

export default FriendBig;
