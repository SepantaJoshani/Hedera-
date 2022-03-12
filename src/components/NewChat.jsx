import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { motion } from "framer-motion";

const searchIconsClass = { ml: 1, color: "#000", fontSize: "1.2rem" };

const NewChat = ({ closeDrawerHandler, isDrawerOpen }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <Grid
        component={motion.div}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{
          x:-900,
          transition: {
            duration: 1,
          },
        }}
        transition={{
         duration:0.6
        }}
        container
        direction="column"
        sx={{
          borderRight: "1px solid gray",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          background: "#fff",
        }}
      >
        <Grid
          item
          container
          alignItems={"flex-end"}
          sx={{ height: "14vh", bgcolor: "primary.main", mb: 1 }}
        >
          <Grid item>
            <Grid item container sx={{ mb: 3, ml: 3 }}>
              <IconButton onClick={() => closeDrawerHandler()}>
                <ArrowBackIcon />
              </IconButton>
              <Typography sx={{ ml: 3 }} variant="body1">
                New Chat
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container>
          <Input
            disableUnderline
            fullWidth
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search or start new chat"
            startAdornment={
              isFocused ? (
                <ArrowBackIcon
                  sx={{ ...searchIconsClass, color: "primary.main" }}
                />
              ) : (
                <SearchIcon sx={searchIconsClass} />
              )
            }
            sx={{
              background: "#d1d1d1",
              mx: 2,
              borderRadius: 2,
              "& ::placeholder": {
                fontSize: "0.9rem",
                pl: 2,
              },
            }}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          sx={{
            py: 2,
            mt: 1,
            overflow: "hidden",
            pl: 2,
            ":hover": {
              background: "gray",
            },
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main" }} />
          <Typography sx={{ ml: 2 }} variant="body1">
            New group
          </Typography>
        </Grid>
        <Divider sx={{ width: "100%" }} />
        <Grid
          item
          container
          sx={{ height: "70vh", overflowY: "auto", overflowX: "hidden" }}
        >
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              position: "relative",

              // overflowY: "scroll",
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{sectionId}</ListSubheader>
                  {[0, 1, 2, 3, 4].map((item) => (
                    <>
                      {" "}
                      <ListItem sx={{ p: 0 }} key={`item-${sectionId}-${item}`}>
                        <Grid
                          container
                          alignItems="center"
                          sx={{
                            px: 2,
                            pt: 2,
                            ":hover": {
                              backgroundColor: "#999",
                            },
                          }}
                        >
                          <Avatar>E</Avatar>
                          <Typography sx={{ pl: 2, py: 2 }} variant="body1">
                            Shonqol
                          </Typography>
                          <Divider sx={{ width: "100%" }} />
                        </Grid>
                      </ListItem>
                    </>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default NewChat;
