import React from "react";
import List from "@mui/material/List";
import ChatListUser from "./ChatListUser";

const randomMessages = [
  {
    id: 1,
    name: "Alice",
    message: "Hi there!",
    date: new Date("2024-01-25T08:00:00"),
  },
  {
    id: 2,
    name: "Bob",
    message: "Hey! How's it going?",
    date: new Date("2024-01-25T08:15:00"),
  },
  {
    id: 3,
    name: "Alice",
    message: "Not bad, thanks!",
    date: new Date("2024-01-25T08:30:00"),
  },
  {
    id: 4,
    name: "Charlie",
    message: "What are you up to?",
    date: new Date("2024-01-25T08:45:00"),
  },
  {
    id: 5,
    name: "Alice",
    message: "Just working on a project. How about you?",
    date: new Date("2024-01-25T09:00:00"),
  },
  {
    id: 6,
    name: "Bob",
    message: "Same here. Busy day!",
    date: new Date("2024-01-25T09:15:00"),
  },
  {
    id: 7,
    name: "Alice",
    message: "We should catch up later!",
    date: new Date("2024-01-25T09:30:00"),
  },
  {
    id: 8,
    name: "Charlie",
    message: "'I'm in! Let's plan something.'",
    date: new Date("2024-01-25T09:45:00"),
  },
  {
    id: 9,
    name: "Alice",
    message: "Great! How about coffee tomorrow?",
    date: new Date("2024-01-26T10:00:00"),
  },
  {
    id: 10,
    name: "Bob",
    message: "Sounds good. Count me in!",
    date: new Date("2024-01-26T10:15:00"),
  },
  {
    id: 11,
    name: "Alice",
    message: "See you at the usual place!",
    date: new Date("2024-01-26T10:30:00"),
  },
  {
    id: 12,
    name: "Charlie",
    message: "'I'll be there too!'",
    date: new Date("2024-01-26T10:45:00"),
  },
  {
    id: 13,
    name: "Alice",
    message: "Perfect! Looking forward to it.",
    date: new Date("2024-01-26T11:00:00"),
  },
  {
    id: 14,
    name: "Bob",
    message: "Me too!",
    date: new Date("2024-01-26T11:15:00"),
  },
  {
    id: 15,
    name: "Alice",
    message: "Okay, see you tomorrow!",
    date: new Date("2024-01-26T11:30:00"),
  },
];

const ChatList: React.FC = () => {
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {randomMessages.map(({ id, name, message }) => {
          return (
            <ChatListUser key={id} id={id} name={name} message={message} />
          );
        })}
      </List>
    </div>
  );
};

export default ChatList;
