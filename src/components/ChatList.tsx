import React from "react";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import ChatListUser from "./ChatListUser";
import ChatListNavBar from "./ChatListNavBar";
import { useSelector } from "react-redux";
import { RootReducer } from "../redux/store";

const ChatList: React.FC = () => {
  const conversations = useSelector(
    (state: RootReducer) => state.chat.conversations
  );
  return (
    <div>
      <ChatListNavBar />
      <Container maxWidth="xl">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {conversations.map(
            ({ conversationId, conversationName, latestMessage }) => {
              return (
                <ChatListUser
                  key={conversationId}
                  id={conversationId}
                  name={conversationName}
                  message={latestMessage}
                />
              );
            }
          )}
        </List>
      </Container>
    </div>
  );
};

export default ChatList;
