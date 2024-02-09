import React from "react";
import { Box, TextField, Button } from "@mui/material";

const ChatBoxInput: React.FC = () => {
  return (
    <Box
      mx={2}
      display="flex"
      width={"70%"}
      position="absolute"
      bottom={10}
      right={10}
    >
      <TextField
        variant="outlined"
        placeholder="Enter your Message"
        fullWidth
      />
      <Button sx={{ marginLeft: 2 }} variant="contained">
        Send
      </Button>
    </Box>
  );
};

export default ChatBoxInput;
