import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/authentication/SignUp";
import Login from "../components/authentication/Login";
import { getUserData } from "../redux/actions/userActions";
import Loading from "../components/ChatLoading";
import { RootReducer } from "../redux/store";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userState = useSelector((state: RootReducer) => state.user);
  const [isSwitch, setSwitch] = React.useState<boolean>(false);
  const switchPage = () => {
    setSwitch((preState) => !preState);
  };
  React.useEffect(() => {
    if (token) {
      getUserData();
      navigate("/chats");
    }
  }, [token, navigate]);

  if (userState.loading) return <Loading />;
  return (
    <div>
      {isSwitch ? (
        <Login switchPage={switchPage} />
      ) : (
        <SignUp switchPage={switchPage} />
      )}
    </div>
  );
};

export default Home;
