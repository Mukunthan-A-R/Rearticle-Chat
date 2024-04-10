import React from "react";
import ChatNav from "./components/ChatNav";
import ChatCard from "./components/ChatCard";
import ChatSend from "./components/ChatSend";
import ChatSeperator from "./components/ChatSeperator";
import TodayMessages from "./components/TodayMessages";

const Chat = () => {
  return (
    <div className="w-72  bg-white">
      <ChatNav></ChatNav>
      <ChatCard name="Sai Ganesh CS" time="2:20 PM">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae.
      </ChatCard>
      <ChatSeperator></ChatSeperator>
      <ChatCard name="Aakash S " time="2:20 PM">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae.
      </ChatCard>
      <ChatSeperator></ChatSeperator>
      <ChatCard name="Sai Ganesh CS" time="2:20 PM">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae.
      </ChatCard>
      <TodayMessages></TodayMessages>
      <ChatCard name="Sai Ganesh CS" time="2:20 PM">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae.
      </ChatCard>
      <ChatSend></ChatSend>
    </div>
  );
};

export default Chat;
