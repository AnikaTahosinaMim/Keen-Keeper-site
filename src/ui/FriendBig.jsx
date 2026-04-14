import React from "react";
import { CiVideoOn } from "react-icons/ci";
import { LuHistory, LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";

const FriendBig = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2>Quick Check-In</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 rounded-lg text-center py-6 px-8 border border-gray-400">
            <span>
              <LuPhoneCall className="mx-auto"></LuPhoneCall>
            </span>
            <p>call</p>
          </div>
          <div className="bg-gray-200 rounded-lg text-center py-6 px-8 border border-gray-400">
            <span>
              {" "}
              <LuMessageSquareMore className="mx-auto"></LuMessageSquareMore>{" "}
            </span>
            <p>text</p>
          </div>
          <div className="bg-gray-200 rounded-lg text-center py-6 px-8 border border-gray-400">
            <p>
              {" "}
              <CiVideoOn className="mx-auto"></CiVideoOn>{" "}
            </p>
            <h2>video</h2>
          </div>
        </div>
      </div>
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
