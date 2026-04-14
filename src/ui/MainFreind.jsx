import React, { useContext } from "react";
import { CiVideoOn } from "react-icons/ci";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { TimeContext } from "../context/TimeContext";
import UseData from "../hooks/UseData";

const MainFreind = ({ expetedFriend }) => {
  const { friends } = UseData();
  //   console.log(friends,"friends");
  const { time, setTime } = useContext(TimeContext);
  //   console.log(time, "mainFriends");
  //   console.log(expetedFriend);
  const handleAction = (type) => {
    const newCall = {
      type: type,
      name: expetedFriend.name,
      id: expetedFriend.id,
      date: new Date().toLocaleDateString(),
    };

    setTime([...time, newCall]);
    console.log(newCall, "time date name");
  };
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2>Quick Check-In</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => handleAction("call")}
            className="bg-gray-200 rounded-lg text-center py-6 px-8 border border-gray-400"
          >
            <span>
              <LuPhoneCall className="mx-auto"></LuPhoneCall>
            </span>
            <p>call</p>
          </div>
          <div
            onClick={() => handleAction("text")}
            className="bg-gray-200 rounded-lg text-center py-6 px-8 border border-gray-400"
          >
            <span>
              {" "}
              <LuMessageSquareMore className="mx-auto"></LuMessageSquareMore>{" "}
            </span>
            <p>text</p>
          </div>
          <div
            onClick={() => handleAction("video")}
            className="bg-gray-200 rounded-lg text-center py-6 px-8 border border-gray-400"
          >
            <p>
              {" "}
              <CiVideoOn className="mx-auto"></CiVideoOn>{" "}
            </p>
            <h2>video</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFreind;
