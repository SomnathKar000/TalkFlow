import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import { getUserData } from "../redux/actions/userActions";
import ChatBox from "../components/ChatBox";
import ChatList from "../components/ChatList";
import Loading from "../components/ChatLoading";
import { RootReducer } from "../redux/store";

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userState = useSelector((state: RootReducer) => state.user);

  React.useEffect(() => {
    if (token) {
      getUserData();
    } else navigate("/");
  }, [token, navigate]);

  if (userState.loading) return <Loading />;
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
