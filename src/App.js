import { Avatar, Button, Grid, Hidden, IconButton, Input } from "@mui/material";
import { cloneDeep } from "lodash";
import React, { useCallback, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SidebarHead from "./components/SidebarHead";
import ChatHead from "./components/ChatHead";
import NewChat from "./components/NewChat";
import { AnimatePresence } from "framer-motion";
import { chats } from "./chats";
import { uuid } from "./uuid";
import { useEffect } from "react";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedChat, setSelectedChat] = useState();
  console.log(selectedChat);
  // const selectedChat = chats.find((item) => item.id === chatId);

  const [submitedMessage, setSubmitedMessage] = useState("");
  const [adminChats, setAdminChats] = useState([]);
  const [finalMessages, setFinalMessages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (submitedMessage && submitedMessage.trim().length > 0) {
      selectedChat.message.push({
        content: submitedMessage,
        contentId: uuid(),
        isAdmin: true,
      });

      setSubmitedMessage("");
    }
  };

  const drawerHandler = () => setIsDrawerOpen((prev) => !prev);

  return (
    <Grid
      container
      sx={{
        overflow: "hidden",
        height: "100vh",
        maxWidth: 1440,
        mx: "auto",
        background: "#fff",
        position: "relative",
      }}
    >
      {/***** Sidebar Section *****/}

      <Hidden smDown>
        <Grid
          item
          sm={4}
          sx={{ position: "relative", borderRight: "1px solid gray" }}
        >
          <AnimatePresence>
            {isDrawerOpen && (
              <NewChat
                isDrawerOpen={isDrawerOpen}
                closeDrawerHandler={() => setIsDrawerOpen(false)}
              />
            )}
          </AnimatePresence>
          <SidebarHead drawerHandler={drawerHandler} />
          <Grid item sx={{ overflowY: "auto", height: "93vh" }}>
            <Sidebar setSelectedChat={setSelectedChat} />
          </Grid>
        </Grid>
      </Hidden>

      {/***** Chat Section *****/}

      <Grid
        item
        sm={8}
        sx={{ height: "100vh", position: "relative", width: "100%" }}
      >
        <Grid item>
          {selectedChat && <ChatHead selectedChat={selectedChat} />}
          <Grid item sx={{ overflow: "scroll", height: "100vh" }}>
            <Chat
              adminChats={adminChats}
              selectedChat={selectedChat}
              finalMessages={finalMessages}
            />
          </Grid>
        </Grid>
        <Grid
          container
          component="form"
          onSubmit={submitHandler}
          alignItems="center"
          sx={{
            position: "absolute",
            bottom: 0,
            background: "#d1d1d1",
            height: "50px",
            display: !selectedChat && "none",
          }}
        >
          <Grid item xs={1.3}>
            <Grid item container justifyContent="center">
              <IconButton>
                <SentimentVerySatisfiedIcon />
              </IconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={9.2}>
            <Input
              value={submitedMessage}
              onChange={(e) => setSubmitedMessage(e.target.value)}
              fullWidth
              disableUnderline
              sx={{ background: "#fff", borderRadius: "15px", p: "3px" }}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Grid item container justifyContent="center">
              <Button color="primary" variant="contained" type="submit">
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
