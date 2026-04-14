// import React, { useState } from "react";
import { useParams } from "react-router";
import UseData from "../hooks/UseData";

import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";
import FriendInfo from "./FriendInfo";
import FriendStatus from "./FriendStatus";
import FriendBig from "./FriendBig";

const FreindDatails = () => {
  const { time, setTime } = useContext(TimeContext);
  console.log(time, setTime);
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
          key={expetedFriend.id}
        >
          <FriendInfo expetedFriend={expetedFriend}></FriendInfo>
        </div>
        {/* image ar nishe r card */}
        <div></div>
      </div>
      {/* right side */}
      <div>
        {/* 3 card */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"> */}
        <FriendStatus expetedFriend={expetedFriend}></FriendStatus>
        {/* </div> */}
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
        <FriendBig></FriendBig>
      </div>
    </div>
  );
};

export default FreindDatails;
