import React from "react";
import Send from "../../src/assets/send.svg";

const ChatSend = () => {
  return (
    <div className="flex mx-4 my-2 bg-gray-100 mt-10">
      <input
        type="text"
        placeholder="Type here.."
        className="flex-grow text-xs rounded-l py-1 px-4 bg-gray-100"
      />
      <button className=" rounded-r  py-2 px-1 ">
        <img src={Send} alt="" style={{ maxWidth: "15px" }} />
      </button>
    </div>
  );
};

export default ChatSend;
