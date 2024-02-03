import React from "react";
import ChatBoxNavBar from "./ChatBoxNavBar";

const ChatBox: React.FC = () => {
  return (
    <div>
      <ChatBoxNavBar />
      <ul>
        <li>message 1</li>
        <li>message 2</li>
      </ul>
    </div>
  );
};

export default ChatBox;
