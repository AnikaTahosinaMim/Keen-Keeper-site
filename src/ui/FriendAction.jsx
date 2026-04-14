import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

const FriendAction = () => {
  return (
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
  );
};

export default FriendAction;
