import React from "react";
import { AppBar, Box, Typography, Tooltip, IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import ChatMenuItem from "../Navigation/ChatMenuItem";

const ChatListNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <AppBar sx={{ position: "sticky", paddingY: 1 }}>
      <Box px={3} display={"flex"} justifyContent="space-around">
        <Typography variant="h5">Chats</Typography>

        <Tooltip title={"New Chat / Group"}>
          <IconButton onClick={handleClick} sx={{ color: "white" }}>
            <LaunchIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <ChatMenuItem open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </AppBar>
  );
};

export default ChatListNavBar;
