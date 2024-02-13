import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { sentMessage } from "../../redux/actions/chatActions";

const ChatBoxInput: React.FC = () => {
  const [message, setMessage] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sentMessage(message);
    setMessage("");
  };

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
        value={message}
        onChange={onChange}
        fullWidth
      />
      <Button onClick={handleSubmit} sx={{ marginLeft: 2 }} variant="contained">
        Send
      </Button>
    </Box>
  );
};

export default ChatBoxInput;
