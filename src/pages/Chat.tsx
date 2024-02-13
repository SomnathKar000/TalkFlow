import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { getUserData } from "../redux/actions/userActions";
import { getAllConversations } from "../redux/actions/chatActions";
import ChatBox from "../components/ChatBox/ChatBox";
import ChatList from "../components/ChatList/ChatList";
import Loading from "../components/FeedBack/ChatLoading";
import { RootReducer } from "../redux/store";

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userState = useSelector((state: RootReducer) => state.user);

  React.useEffect(() => {
    if (token) {
      getUserData();
      getAllConversations();
    } else navigate("/");
  }, [token, navigate]);

  if (userState.loading) return <Loading />;
  return (
    <div>
      <Grid container>
        <Grid
          sx={{
            overflowY: "auto",
            height: "90vh",
          }}
          item
          xs={3}
        >
          <ChatList />
        </Grid>
        <Grid item xs={9}>
          <ChatBox />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
