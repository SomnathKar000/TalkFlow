import React from "react";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import ChatListUser from "./ChatListUser";
import ChatListNavBar from "./ChatListNavBar";
import { randomMessages } from "../helpers/constants/backend";

const ChatList: React.FC = () => {
  return (
    <div>
      <ChatListNavBar />
      <Container maxWidth="xl">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {randomMessages.map(({ id, name, message }) => {
            return (
              <ChatListUser key={id} id={id} name={name} message={message} />
            );
          })}
        </List>
      </Container>
    </div>
  );
};

export default ChatList;
