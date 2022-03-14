import React from "react";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ChatHead = ({ selectedChat }) => {
  return (
    <Grid item>
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "#d1d1d1", height: "7vh", px: 3 }}
      >
        <Grid item>
          <Grid item container alignItems="center" columnGap={1}>
            <Avatar>{selectedChat && selectedChat.username.charAt(0)}</Avatar>
            <Typography variant="body1">
              {selectedChat && selectedChat.username}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatHead;
