import { Avatar, Divider, Grid, Hidden, Typography } from "@mui/material";
import React from "react";

const myArrary = [
  1, 2, 3, 4, 5, 7, 81, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7,
  8, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7, 8, 8, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3,
  4, 5, 7, 8, 8, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7, 8, 8, 1, 2, 3, 4, 5, 7,
  8, 1, 2, 3, 4, 5, 7, 8,
];

const Sidebar = () => {
  return (
    <Grid container direction="column">
      {myArrary.map((item, index) => (
        <>
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
          >
            {/* Avatar Part */}

            <Grid item sx={2}>
              <Avatar>N</Avatar>
            </Grid>

            {/* Message & the rest */}
            <Grid item xs={10}>
              <Grid item container direaction="column">
                <Grid item container>
                  {" "}
                  Shonqol
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
                    Salam chetori chekhabar chika mikoni nmidonam el
                    belasdsdadas
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default Sidebar;
