import React, { useState, useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { axios_get_call, axios_chat_call } from "./AxiosCall";
import PDFViewer from "pdf-viewer-reactjs";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
// import axios from "./axios";
// import { useCallback } from "react";

const ProjectView = () => {
  const [pdfData, setPdfData] = useState(null);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [pdfID, setPdfID] = useState(location.state.pdfID);
  // const pdfUrl = `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`;
  const [question, setQuestion] = useState("");
  const [chatResponse, setChatResponse] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sent, setSent] = useState(false);
  const [chatState, setChatState] = useState([]);
  let chat_list = [];
  // let page = 1;

  function nextPage() {
    if (page < totalPages) {
      page = page + 1;
    }
  }
  function previousPage() {
    if (page > 0) {
      page = page - 1;
    }
  }

  const handleLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
  };

  const get_pdf = async () => {
    let url = "/get-pdf/";
    try {
      const response = await axios_get_call(url, pdfID, setLoading, setAlert);

      if (response.status === 200) {
        console.log("File RETRIEVED successfully", response);
        setPdfData(response);
      } else {
        console.error("File RETRIEVAL failed");
      }
    } catch (error) {
      console.error("Error RETRIEVING file", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send_message();
  };

  const send_message = async () => {
    let url = "/send-message/";
    console.log("In SEND_MESSAGE FUNCTION");

    if (question !== "") {
      try {
        chat_list = chatState;
        chat_list.push(question);
        setChatState(chat_list);
        console.log("chat_list", chat_list);
        console.log("chatState", chatState);
        // setSent(true);
        setQuestion("");
        const response = await axios_chat_call(
          url,
          pdfID,
          question,
          setLoading,
          setAlert
        );

        if (response.status === 200) {
          chat_list.push(response.data.answer);
          setChatState(chat_list);
          setChatResponse(response.data);
          console.log("RESPONSE VALUE IS: ", response);
          console.log("CHAT LIST VALUE IS: ", chat_list);
          console.log("CHAT STATE VALUE IS: ", chatState);
        } else {
          console.error("Chat send failed");
        }
      } catch (error) {
        console.error("Error sending chat", error);
      }
    }
  };

  useEffect(() => {}, []);

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
            // border: "2px solid red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              overflow: "auto",
              height: "100%",
              // border: "1px solid black",
              marginX: "10px",
              display: "flex",
              // flexDirection: "column",
              // justifyContent: "flex-end",
              // alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              {chatState.map((message, index) => {
                if (index % 2 === 0) {
                  return (
                    <Paper sx={{ padding: "5px", width: "100%" }}>
                      <Typography
                        sx={{
                          background: "rgb(83, 135, 140)",
                          color: "white",
                          paddingX: "20px",
                          paddingY: "10px",
                          borderRadius: "5px",
                          width: "100%",
                        }}
                      >
                        <strong style={{ color: "white" }}>You:</strong>
                        {"   "}
                        {chatState[index]}
                      </Typography>
                    </Paper>
                  );
                } else {
                  return (
                    <Paper
                      sx={{ padding: "5px", marginY: "5px", width: "100%" }}
                    >
                      <Typography
                        sx={{
                          background: "rgb(71, 80, 99)",
                          color: "white",
                          paddingX: "20px",
                          paddingY: "10px",
                          // marginY: "10px",
                          borderRadius: "5px",
                          width: "100%",
                        }}
                      >
                        <strong style={{ color: "white" }}>Response:</strong>
                        {"   "}
                        {/* {chatResponse.answer} */}
                        {chatState[index]}
                      </Typography>
                    </Paper>
                  );
                }
              })}
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
                  // border: "1px solid",
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
          <PDFViewer
            hideZoom
            hideNavbar
            hideRotation
            onLoadSuccess={handleLoadSuccess}
            document={{
              url: `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`,
            }}
            scale={0.9}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectView;
