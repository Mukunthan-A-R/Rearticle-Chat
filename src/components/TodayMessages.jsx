import React from "react";

const TodayMessages = () => {
  return (
    <div className="flex flex-row justify-center items-center px-9 mt-3 mb-2">
      <div className="border-t grow"></div>
      <p className="text-[#42424299] mx-2 text-xs font-bold">{" Today "}</p>
      <div className="border-t grow bottom-3"></div>
    </div>
  );
};

export default TodayMessages;
