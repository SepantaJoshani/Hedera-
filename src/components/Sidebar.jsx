import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { chats } from "../chats";

const sortByName = function (a, b) {
  if (a.username < b.username) {
    return -1;
  }
  if (a.username > b.username) {
    return 1;
  }
  return 0;
};

const Sidebar = ({ setChatId }) => {
  return (
    <Grid container direction="column">
      {chats.sort(sortByName).map(({ id, message, username }, index) => (
        <Fragment key={id + index}>
          <Divider
            variant={index === 0 ? "fullWidth" : "inset"}
            sx={{ position: "relative", right: index !== 0 && 30 }}
          />
          <Grid
            item
            container
            columnSpacing={1}
            sx={{
              py: 2,
              pl: 0.8,
              flexWrap: "nowrap",
              ":hover": {
                background: "gray",
              },
            }}
            onClick={() => {
              console.log(id);
              setChatId(id);
            }}
          >
            {/* Avatar Part */}

            <Grid item>
              <Avatar>{username.charAt(0)}</Avatar>
            </Grid>

            {/* Message & the rest */}
            <Grid item xs={10}>
              <Grid item container direaction="column">
                <Grid item container>
                  {username}
                </Grid>
                <Grid item container>
                  <Typography
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                    variant="body1"
                  >
                    {message[0].content}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export default Sidebar;
