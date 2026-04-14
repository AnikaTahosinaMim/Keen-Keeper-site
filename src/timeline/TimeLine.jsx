import React, { useContext } from "react";
import { TimeContext } from "../context/TimeContext";
import { CiVideoOn } from "react-icons/ci";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";

const TimeLine = () => {
  // const iconMap = {
  //   call: <LuPhoneCall />,
  //   text: <LuMessageSquareMore />,
  //   video: <CiVideoOn />,
  // };
  // if(items.type === "call"){
  //   <LuPhoneCall></LuPhoneCall>
  // }
  const { time, setTime } = useContext(TimeContext);
  return (
    <div className="container mx-auto my-8">
      <h2 className="font-bold text-2xl mb-3">Timeline</h2>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 mb-6">
          filter timeline
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div>
        {time.map((items) => (
          <div
            className="flex items-center mb-3 gap-4 rounded-lg border border-gray-200 bg-white shadow-lg p-4"
            key={items.id}
          >
            <div>
              {items.type === "call" ? (
                <LuPhoneCall></LuPhoneCall>
              ) : items.type === "text" ? (
                <LuMessageSquareMore></LuMessageSquareMore>
              ) : (
                <CiVideoOn></CiVideoOn>
              )}
            </div>

            <div>
              <p>
                {items.type} with {items.name}
              </p>
              <p>{items.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
