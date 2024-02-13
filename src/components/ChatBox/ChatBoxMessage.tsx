import React from "react";
interface Props {
  name: string;
  message: string;
  date: string;
}

const ChatBoxMessage: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export default ChatBoxMessage;
