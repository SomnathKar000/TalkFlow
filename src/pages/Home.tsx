import React from "react";
import SignUp from "../components/authentication/SignUp";
import Login from "../components/authentication/Login";
const Home: React.FC = () => {
  const [isSwitch, setSwitch] = React.useState<boolean>(false);
  const switchPage = () => {
    setSwitch((preState) => !preState);
  };
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
