import React from "react";
import ChatBox from "../components/ChatBox";
import ChatList from "../components/ChatList";

import { Grid, Container } from "@mui/material";

const Chat: React.FC = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container gap={2}>
          <Grid
            sx={{
              overflowY: "auto",
              height: "100vh",
            }}
            item
            xs={3}
          >
            <ChatList />
          </Grid>
          <Grid
            sx={{
              overflowY: "auto",
              height: "100vh",
            }}
            item
            xs={7}
          >
            <ChatBox />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Chat;
