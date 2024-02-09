import React from "react";
import ChatBoxNavBar from "./ChatBoxNavBar";
import ChatBoxInput from "./ChatBoxInput";
import ChatBoxMessage from "./ChatBoxMessage";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootReducer } from "../redux/store";

const ChatBox: React.FC = () => {
  const selectedChat = useSelector(
    (state: RootReducer) => state.chat.selectedChat
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <ChatBoxNavBar />
      </Box>
      <Box sx={{ overflowY: "scroll", height: "75vh" }}>
        {selectedChat?.Messages?.map((message) => (
          <ChatBoxMessage
            key={message.messageId}
            name={message.senderName}
            message={message.message_text}
            date={message.date}
          />
        ))}
      </Box>
      <ChatBoxInput />
    </Box>
  );
};

export default ChatBox;
