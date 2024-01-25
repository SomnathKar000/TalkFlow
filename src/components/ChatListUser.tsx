import React from "react";
import {
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

interface Props {
  id: number;
  name: string;
  message: string;
}

const ChatListUser: React.FC<Props> = ({ id, name, message }) => {
  return (
    <React.Fragment key={id}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={message}></ListItemText>
      </ListItemButton>
    </React.Fragment>
  );
};

export default ChatListUser;
