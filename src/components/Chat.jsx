import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { chats } from "../chats";

const Chat = ({ chatId, selectedChatData, adminChats }) => {
  const selectedChat = chats.find((chat) => chat.id === chatId);
  const [myChatId, setMyChatId] = useState();
  const [finalMessage, setFinalMessage] = useState([]);

  useEffect(() => {
    setMyChatId(chatId);
    console.log(adminChats);
    if (selectedChat) {
      const ohtersMessage = selectedChat.message;
      if (adminChats) {
        const bothMessages = ohtersMessage.concat(adminChats);
        setFinalMessage(bothMessages);
      }
    }
  }, [chatId, adminChats, selectedChat]);

  return (
    <Grid
      container
      direction="column"
      sx={{ maxWidth: 650, mx: myChatId ? "auto" : 0 }}
    >
      {!myChatId ? (
        <p>Please Select a Chat</p>
      ) : finalMessage ? (
        finalMessage.map((item, index) => (
          <Grid
            key={item.contentId}
            container
            justifyContent={item.isAdmin ? "start" : "flex-end"}
          >
            <Grid
              item
              sx={{
                bgcolor: item.isAdmin ? "primary.main" : "pink",
                pl: 1,
                pr: 3,
                py: 1.5,
                borderRadius: "10px",
                my: 1,

                maxWidth: 350,
              }}
            >
              <Typography variant="body2">{item.content}</Typography>
            </Grid>
          </Grid>
        ))
      ) : (
        selectedChat.message.map((item, index) => (
          <Grid
            key={item.contentId}
            container
            justifyContent={item.isAdmin ? "start" : "flex-end"}
          >
            <Grid
              item
              sx={{
                bgcolor: item.isAdmin ? "primary.main" : "pink",
                pl: 1,
                pr: 3,
                py: 1.5,
                borderRadius: "10px",
                my: 1,

                maxWidth: 350,
              }}
            >
              <Typography variant="body2">{item.content}</Typography>
            </Grid>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Chat;
