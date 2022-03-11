import React, { useState } from "react";
import {
  Avatar,
  Button,
  Drawer,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";


const listItems = ["New Group", "Starred message", "Setting", "Log out"];

const SidebarHead = ({drawerHandler}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid item>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-between"
          sx={{
            px: 2,
            height: "7vh",
            zIndex: 1,
            backgroundColor: "#d1d1d1",
            borderRight: "1px solid gray",
          }}
        >
          <Grid item sx={{ position: "relative", right: 10 }}>
            <Avatar>Me</Avatar>
          </Grid>
          <Grid item>
            <Grid item container>
              <IconButton onClick={() => drawerHandler()}>
                {" "}
                <SmsIcon sx={{ cursor: "pointer" }} />
              </IconButton>
              <IconButton
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon sx={{ cursor: "pointer" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        elevation={7}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ mx: -17, mt: 2 }}
      >
        {listItems.map((item) => (
          <MenuItem key={item} sx={{ pr: 5 }} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>

      {/* <SwipeableDrawer
        
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        variant="persistent"
     
        
      >
        
      </SwipeableDrawer> */}
    </>
  );
};

export default SidebarHead;
