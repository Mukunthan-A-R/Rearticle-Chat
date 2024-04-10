import React from "react";

const ChatCard = ({ children, name, time }) => {
  return (
    <div className="flex pt-3 px-2">
      <div className="px-2 ">
        <span class="inline-block text-xs bg-red-500 text-white  py-1 px-2 rounded-full ">
          S
        </span>
      </div>

      <div className="px-1">
        <div className="flex justify-between pb-2 ">
          <p className="font-bold text-xs">{name}</p>
          <p className="text-xs text-gray-500 no-wrap px-3 ">{time}</p>
        </div>
        <p className="text-xs">{children}</p>
      </div>
    </div>
  );
};

export default ChatCard;
