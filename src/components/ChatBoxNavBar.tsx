import React from "react";
import { AppBar, Box } from "@mui/material";

const ChatBoxNavBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Box p={2}>User</Box>
    </AppBar>
  );
};

export default ChatBoxNavBar;
