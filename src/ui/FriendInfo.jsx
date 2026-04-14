import React from "react";

const FriendInfo = ({expetedFriend}) => {
  return (
    <div>
      <img
        className="w-15 h-15 object-cover mx-auto rounded-full"
        src={expetedFriend.picture}
        alt=""
      />
      <h2 className="font-bold">{expetedFriend.name}</h2>

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
  );
};

export default FriendInfo;
