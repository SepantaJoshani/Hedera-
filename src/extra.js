import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { info, topicHandler, transferHbar } from "./hedera/hedera";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { client } from "./hedera/hedera";
import {
  TopicCreateTransaction,
  TopicMessageQuery,
  TopicMessageSubmitTransaction,
} from "@hashgraph/sdk";

const App = () => {
  const [chat, setChat] = useState("");
  const [submitedChat, setSubmitedChat] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log(window.ethereum);
  }, []);

  // useEffect(() => {
  //   const httpHandler = async () => {
  //     await transferHbar();
  //     await topicHandler();
  //     await info();
  //   };
  //   try {
  //     httpHandler();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(chat);
    const copiedSubmitedCHat = [...submitedChat];
    const alteredChat = {
      message: chat,
      id: Math.random(),
      direction: isAdmin ? "right" : "left",
    };
    const copiedAlteredChat = { ...alteredChat };
    copiedSubmitedCHat.push(copiedAlteredChat);
    console.log(copiedAlteredChat);
    console.log(copiedSubmitedCHat);
    setSubmitedChat(copiedSubmitedCHat);
    // await topicHandler(chat);
  };

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid item>
        <Box
          component={"form"}
          sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          onSubmit={submitHandler}
        >
          <TextField
            id="filled-basic"
            label="Filled"
            variant="outlined"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Click M3
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setIsAdmin((prev) => !prev)}
            type="button"
          >
            CHange Admin
          </Button>
        </Box>
      </Grid>
      <Grid item>
        {submitedChat.map((item) => (
          <Box
            key={item.id}
            sx={{
              bgcolor: `${item.direction === "right" ? "green" : "red"}`,
              mt: "2rem",
              color: "white",
              width: "200px",
            }}
          >
            <Typography align={item.direction}>{item.message}</Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default App;
