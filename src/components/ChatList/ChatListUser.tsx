import React from "react";
import { useDispatch } from "react-redux";
import {
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { selectConversation } from "../../redux/actions/chatActions";

interface Props {
  id: string;
  name: string;
  message: string | undefined;
}

const ChatListUser: React.FC<Props> = ({ id, name, message }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment key={id}>
      <ListItemButton onClick={() => dispatch(selectConversation(id))}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={message}></ListItemText>
      </ListItemButton>
    </React.Fragment>
  );
};

export default ChatListUser;
