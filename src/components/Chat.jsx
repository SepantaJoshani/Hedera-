import { Container, Grid, Typography } from "@mui/material";

const myArrary = [
  1, 2, 3, 4, 5, 7, 81, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7,
  8, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 5, 7, 8,
];

const Chat = () => {
  return (
    <Grid container direction="column" sx={{maxWidth:650,mx:'auto'}}>
      
        {myArrary.map((item, index) => (
          <Grid
            container
            justifyContent={index % 2 === 0 ? "start" : "flex-end"}
          >
            <Grid
              key={index}
              item
              sx={{
                bgcolor: index % 2 === 0 ? "primary.main" : "secondary.main",
                pl: 1,
                pr: 3,
                py: 1.5,
                borderRadius: "10px",
                my: 1,

                maxWidth: 350,
              }}
            >
              <Typography variant="body2">
                elo belo jimbelo nmidonam chishio ino oono
                hdasdlhadialdiahdalsdhadiahdlhiadhi{" "}
              </Typography>
            </Grid>
          </Grid>
        ))}

    </Grid>
  );
};

export default Chat;
