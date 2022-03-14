import { Grid, Typography } from "@mui/material";

import { chats } from "../chats";

const Chat = ({ selectedChat }) => {


  return (
    <Grid
      container
      direction="column"
      sx={{ maxWidth: 650, mx: selectedChat ? "auto" : 0 }}
    >
      {!selectedChat ? (
        <p>Please Select a Chat</p>
      ) : selectedChat ? (
        selectedChat.message.map((item, index) => (
          <Grid
            key={Math.random()}
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
                ml: item.isAdmin ? 2 : 0,
                maxWidth: 350,
              }}
            >
              <Typography variant="body2">{item.content}</Typography>
            </Grid>
          </Grid>
        ))
      ) : (
        <p>hichi</p>
      )}
    </Grid>
  );
};

export default Chat;

// const final =  : finalMessage  ? (
//   finalMessage.message.map((item, index) => (
//     <Grid
//       key={item.contentId}
//       container
//       justifyContent={item.isAdmin ? "start" : "flex-end"}
//     >
//       <Grid
//         item
//         sx={{
//           bgcolor: item.isAdmin ? "primary.main" : "pink",
//           pl: 1,
//           pr: 3,
//           py: 1.5,
//           borderRadius: "10px",
//           my: 1,

//           maxWidth: 350,
//         }}
//       >
//         <Typography onClick={() => console.log(item)} variant="body2">
//           {item.content}
//         </Typography>
//       </Grid>
//     </Grid>
//   ))
// )
