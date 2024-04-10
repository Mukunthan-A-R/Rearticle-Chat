import React from "react";
import Close from "../../src/assets/close.svg";
import Chat from "../../src/assets/chat.svg";

const ChatNav = () => {
  return (
    <div className="flex justify-center items-center px-4 py-3 gap-2 mb-4">
      <img src={Chat} alt="" className="w-5" />
      <p className="text-base font-bold flex-1">Chats</p>
      <div className="">
        <img src={Close} alt="" className="w-4" />
      </div>
    </div>
  );
};

export default ChatNav;
