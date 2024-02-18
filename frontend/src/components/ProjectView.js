import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { axios_get_call, axios_chat_call } from "./AxiosCall";
import PDFViewer from "pdf-viewer-reactjs";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const ProjectView = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [chatID, setChatID] = useState(location.state.chatID);
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);
  const [recieved, setReceived] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, recieved]);

  const get_chat_history = async () => {
    let url = "/get-chat-history/";
    try {
      const response = await axios_get_call(url, chatID, setLoading, setAlert);

      if (response.status === 200) {
        console.log("Chat History RETRIEVED successfully", response.data);
        setChatHistory(response.data);
        setReceived(true);
      } else {
        console.error("Chat History RETRIEVAL failed");
      }
    } catch (error) {
      console.error("Error RETRIEVING Chat History", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send_message();
  };

  const send_message = async () => {
    let url = "/send-message/";

    if (question !== "") {
      try {
        const updatedChatHistory = [...chatHistory, question];
        setChatHistory(updatedChatHistory);
        setQuestion("");
        const response = await axios_chat_call(
          url,
          chatID,
          question,
          setLoading,
          setAlert
        );

        if (response.status === 200) {
          setChatHistory(response.data);
        } else {
          console.error("Chat send failed");
        }
      } catch (error) {
        console.error("Error sending chat", error);
      }
    }
  };

  useEffect(() => {
    setReceived(false);
    get_chat_history();
  }, []);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexGrow: 1,
        background: "#FFF",
        minHeight: "88vh",
        justifyContent: "center",
      }}
    >
      <Box
        className="project-view-main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          maxHeight: "88vh",
        }}
      >
        <Box
          className="chat-section"
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              overflow: "auto",
              height: "100%",
              marginX: "10px",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              {recieved &&
                chatHistory.map((message, index) => (
                  <Paper
                    key={index}
                    sx={{
                      padding: "5px",
                      width: "100%",
                      backgroundColor:
                        index % 2 === 0
                          ? "rgb(83, 135, 140)"
                          : "rgb(71, 80, 99)",
                      color: "white",
                      paddingX: "20px",
                      paddingY: "10px",
                      borderRadius: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    {/* <Typography>
                      <strong style={{ color: "white" }}>
                        {index % 2 === 0 ? "You:" : "Response:"}
                      </strong>{" "}
                      {message}
                    </Typography> */}
                    <Typography
                      style={{
                        fontFamily: "Ubuntu, sans-serif",
                        // fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      <strong style={{ color: "white" }}>
                        {index % 2 === 0 ? "You:" : "Response:"}
                      </strong>
                      {"  "}
                      {message}
                    </Typography>
                  </Paper>
                ))}
              <div ref={messagesEndRef} />
            </Box>
          </Box>
          <Box
            className="input-section"
            sx={{
              marginX: "10px",
            }}
          >
            <label>Ask a question about your document</label>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: "45px",
                marginBottom: "2px",
              }}
            >
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter Text"
                style={{
                  width: "95%",
                  height: "100%",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                  border: "none",
                }}
              />
              <Button
                sx={{
                  height: "100%",
                  width: "5%",
                  padding: "0px",
                  minWidth: "10%",
                  minHeight: "100%",
                }}
                onClick={send_message}
              >
                <SendIcon sx={{ margin: "0px", color: "gray" }} />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          className="document-view"
          sx={{
            width: "50%",
            height: "100%",
            borderLeft: "2px dotted rgb(188, 188, 188)",
            overflow: "auto",
          }}
        >
          {/* <PDFViewer
            hideZoom
            hideNavbar
            hideRotation
            onLoadSuccess={handleLoadSuccess}
            document={{
              url: `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${chatID}/`,
            }}
            scale={0.9}
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectView;
