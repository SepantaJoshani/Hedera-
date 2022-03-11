import {
  Avatar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SidebarHead from "./components/SidebarHead";
import ChatHead from "./components/ChatHead";
import { Box } from "@mui/system";
import SmsIcon from "@mui/icons-material/Sms";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Search from "@mui/icons-material/Search";
import NewChat from "./components/NewChat";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
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
        <Grid item sm={4} sx={{ position: "relative" }}>
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
            <Sidebar />
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
          <ChatHead />
          <Grid item sx={{ overflow: "scroll", height: "100vh" }}>
            <Chat />
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
