import React from "react";
import UseData from "../hooks/UseData";
import FriendCard from "../ui/FriendCard";
import { Link } from "react-router";

const Freinds = () => {
  const { friends, loading } = UseData();
  if (loading) {
    return <h2>Loading.......</h2>;
  }
  console.log(friends);
  console.log(loading, "loading");
  return (
    <div className=" container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-8">Your Friends</h2>
      <div>
        {loading ? (
          <div className="text-center items-center mx-auto">
            <span className="loading loading-spinner text-success "></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {friends.map((friend) => {
              return <FriendCard key={friend.id} friend={friend}></FriendCard>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Freinds;
