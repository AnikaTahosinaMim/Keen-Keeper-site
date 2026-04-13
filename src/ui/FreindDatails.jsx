// import React, { useState } from "react";
import { useParams } from "react-router";
import UseData from "../hooks/UseData";
import { IoIosNotifications } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiVideoOn } from "react-icons/ci";
import { LuHistory, LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";

const FreindDatails = () => {
  const { id } = useParams();
  const { friends } = UseData();
  //   const {datailsfriends,setDatailsfriends} = useState([])
  const expetedFriend = friends.find((fri) => fri.id == id);
  if (!expetedFriend) {
    return (
      <div className="text-center items-center mx-auto">
        <span className="loading loading-spinner text-success "></span>
      </div>
    );
  }
  //   const dupliCateFreind = friends.find((n)=> n.id== expetedFriend.id)
  //   if(!dupliCateFreind){
  //     alert("already add")
  //   } else{

  //   }
  console.log(expetedFriend, "expected id");
  console.log(id);
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 my-15">
      {/* left side  */}
      <div>
        <div
          className="space-y-2 shadow-lg py-6 px-6 text-center"
          key={expetedFriend.di}
        >
          <img
            className="w-15 h-15 object-cover mx-auto rounded-full"
            src={expetedFriend.picture}
            alt=""
          />
          <h2 className="font-bold">{expetedFriend.name}</h2>
          <p className="">{expetedFriend.days_since_contact}d ago</p>

          <span
            className={
              expetedFriend.status === "overdue"
                ? "bg-red-500 px-2 py-1 rounded-full text-white text-sm mt-2"
                : expetedFriend.status === "almost due"
                  ? "bg-amber-300 px-2 py-1 rounded-full text-white text-sm mt-2"
                  : "bg-[#244D3F] px-2 py-1 rounded-full text-white text-sm mt-2"
            }
          >
            {expetedFriend.status}
          </span>
          <br />
          <br />
          <span className="rounded-full px-2 text-sm py-1 bg-emerald-100">
            {expetedFriend.tags[0]}
          </span>
          <span className="rounded-full px-2 text-sm py-1 ml-2 bg-emerald-100">
            {expetedFriend.tags[1]}
          </span>
          <p>{expetedFriend.bio}</p>
          <span>{expetedFriend.email}</span>
        </div>
        {/* image ar nishe r card */}
        <div>
          <div className="py-4 px-2 shadow-sm mt-6">
            <p className="flex gap-1 items-center ">
              <IoIosNotifications></IoIosNotifications> Snooze 2 weeks
            </p>
          </div>
          <div className="py-4 px-2 shadow-sm mt-2">
            <p className="flex gap-1 items-center ">
              <FaBoxArchive></FaBoxArchive> Archive
            </p>
          </div>
          <div className="py-4 px-2 shadow-sm mt-2 text-red-600">
            <p className="flex gap-1 items-center text-red-500">
              <RiDeleteBin6Fill></RiDeleteBin6Fill> Delete
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        {/* 3 card */}
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
        {/* relation goals */}
        <div className="shadow-lg rounded-lg py-8 px-2 my-4">
          <div className="flex items-center justify-between ">
            <h2>Relationship Goal</h2>
            <button className="btn">Edit</button>
          </div>
          <p>
            Connect every <span className="font-bold">30 days</span>
          </p>
        </div>

        {/*Quick Check-In  */}
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
    </div>
  );
};

export default FreindDatails;
