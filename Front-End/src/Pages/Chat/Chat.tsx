import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { PageContainer } from "../../Shared/Styles";
import {
  Grid,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const baseURL =
  "https://us-central1-srbanorte23.cloudfunctions.net/dialogflowGateway";

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const messageRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (userInput.trim() !== "") {
      setLoading(true);
      setMessages((current) => [
        ...current,
        {
          content: userInput,
          sender: "user",
        },
      ]);
      setUserInput("");

      const response = await axios.post(baseURL, {
        sessionId: "srbanorte23",
        queryInput: {
          text: {
            text: userInput,
            languageCode: "es",
          },
        },
      });
      const fulfillmentText = response.data.fulfillmentText;

      setMessages((current) => [
        ...current,
        {
          content: fulfillmentText,
          sender: "bot",
        },
      ]);

      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Grid container direction="column">
        <Grid
          item
          container
          direction="column"
          padding="1rem 1.4rem 8rem 1.4rem"
          ref={messageRef}
        >
          {messages.length === 0 ? (
            <Grid
              item
              alignSelf="center"
              position="relative"
              justifySelf="center"
            >
              <Grid container direction="column" alignItems="center">
                <Grid item paddingTop="4rem">
                  <Typography
                    fontSize="1.2rem"
                    textAlign="center"
                    fontWeight="300"
                  >
                    Haz una pregunta
                  </Typography>
                  <Typography
                    fontSize="2.5rem"
                    textAlign="center"
                    fontWeight="700"
                    color="rgba(186, 1,1, 0.7)"
                  >
                    Sr. Banorte
                  </Typography>
                </Grid>
                <Grid item>
                  <SmartToyIcon
                    sx={{
                      width: "4rem",
                      height: "4rem",
                      color: "rgba(186, 1,1, 0.7)",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
          {messages.map((message) => {
            return message.sender === "user" ? (
              <Grid
                item
                alignSelf="flex-end"
                sx={{ marginBottom: "1rem", paddingLeft: "3rem" }}
                position="relative"
              >
                <Grid
                  item
                  sx={{
                    backgroundColor: "#BA0101",
                    borderRadius: "1rem",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                  maxWidth="100%"
                >
                  <Typography color="#ffffff" fontWeight="600" textAlign="end">
                    {message.content}
                  </Typography>
                </Grid>
                <Grid
                  item
                  position="absolute"
                  bottom="-1.6rem"
                  right="-1.1rem"
                  sx={{
                    borderRadius: "1rem",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    width: "1.8rem",
                    height: "1.8rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#BA0101",
                  }}
                >
                  <AccountCircleIcon
                    sx={{
                      width: "1.5rem",
                      height: "1.5rem",
                      color: "#ffffff",
                    }}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid
                item
                alignSelf="flex-start"
                sx={{ marginBottom: "1rem", paddingRight: "3rem" }}
                position="relative"
              >
                <Grid
                  item
                  sx={{
                    backgroundColor: "rgba(255,255,255)",
                    borderRadius: "1rem",
                    boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                  }}
                  maxWidth="100%"
                >
                  <Typography>{message.content}</Typography>
                  <Grid
                    item
                    position="absolute"
                    bottom="-1.8rem"
                    left="-1.2rem"
                    sx={{
                      borderRadius: "1rem",
                      boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)",
                      width: "1.8rem",
                      height: "1.8rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SmartToyIcon
                      sx={{
                        width: "1.5rem",
                        height: "1.5rem",
                        color: "#BA0101",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}

          {loading ? (
            <Grid item alignSelf="center" position="relative">
              <CircularProgress />
            </Grid>
          ) : (
            ""
          )}
        </Grid>
        <Grid
          item
          container
          sx={{
            position: "fixed",
            bottom: "0",
            padding: "1rem 0 1rem 0",
            zIndex: "100",
            backgroundColor: "#ffffff",
            width: "100%",
          }}
        >
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="filled-basic"
              variant="filled"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              onClick={() => sendMessage()}
              sx={{ height: "100%", padding: "1rem 2rem 1rem 2rem" }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Chat;
