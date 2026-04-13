import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <div>
      <Link to={`/${friend.id}`}>
        <div className="space-y-2 shadow-lg py-6 text-center" key={friend.di}>
          <img
            className="w-15 h-15 object-cover mx-auto rounded-full"
            src={friend.picture}
            alt=""
          />
          <h2 className="font-bold">{friend.name}</h2>
          <p className="">{friend.days_since_contact}d ago</p>

          <span className="rounded-full px-2 text-sm py-1  bg-emerald-100">
            {friend.tags[0]}
          </span>
          <span className="rounded-full ml-2 px-2 text-sm py-1  bg-emerald-100">
            {friend.tags[1]}
          </span>
          <br />
          <br />

          <span
            className={
              friend.status === "overdue"
                ? "bg-red-500 px-2 py-1 rounded-full text-white text-sm mt-2"
                : friend.status === "almost due"
                  ? "bg-amber-300 px-2 py-1 rounded-full text-white text-sm mt-2"
                  : "bg-[#244D3F] px-2 py-1 rounded-full text-white text-sm mt-2"
            }
          >
            {friend.status}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
