import React from "react";
import ChatBoxNavBar from "./ChatBoxNavBar";
import ChatBoxInput from "./ChatBoxInput";
import ChatBoxMessage from "./ChatBoxMessage";
import { useSelector } from "react-redux";
import { RootReducer } from "../redux/store";

const ChatBox: React.FC = () => {
  const selectedChat = useSelector(
    (state: RootReducer) => state.chat.selectedChat
  );
  return (
    <div>
      <ChatBoxNavBar />
      <div>
        {selectedChat?.Messages?.map((message) => (
          <ChatBoxMessage
            key={message.messageId}
            name={message.senderName}
            message={message.message_text}
            date={message.date}
          />
        ))}
      </div>
      <ChatBoxInput />
    </div>
  );
};

export default ChatBox;
