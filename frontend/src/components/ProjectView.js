import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { axios_get_call, axios_chat_call } from "./AxiosCall";
import PDFViewer from "pdf-viewer-reactjs";
import { useLocation } from "react-router-dom";
// import axios from "./axios";

const ProjectView = () => {
  const [pdfData, setPdfData] = useState(null);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [pdfID, setPdfID] = useState(location.state.pdfID);
  // const pdfUrl = `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`;
  const [chatResponse, setChatResponse] = useState(null);

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
    console.log("CALLING SEND_MESSAGE");
    send_message();
  };

  const send_message = async () => {
    let url = "/send-message/";
    console.log("In SEND_MESSAGE FUNCTION");

    try {
      const response = await axios_chat_call(url, pdfID, setLoading, setAlert);

      if (response.status === 200) {
        console.log("Chat sent successfully");
        setChatResponse(response);
        // response.data.id = response.data.id;
        // console.log(
        //   "This is the ID of the uploaded file: ",
        //   response.data.pdf_data["file"]
        // );
        // setUploadedFile(response.data);
        // setpdfID(response.data.pdf_data["id"]);
        // navigate("/project-view", {
        //   state: {
        //     pdfID: response.data.pdf_data["id"],
        //     // pdfName: response.data.pdf_data["file"],
        //   },
        // });
        // <Alert severity="error">File uploaded successfully.</Alert>;
      } else {
        console.error("Chat send failed");
        // <Alert severity="error">File upload failed.</Alert>;
      }
    } catch (error) {
      console.error("Error sending chat", error);
    }
  };

  useEffect(() => {
    get_pdf();
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
        }}
      >
        <Box
          className="chat-section"
          sx={{ width: "50%", height: "100%", border: "2px solid red" }}
        ></Box>
        <Box
          className="document-view"
          sx={{ width: "50%", height: "100%", border: "2px solid blue" }}
        >
          {pdfData && (
            <PDFViewer
              document={{
                url: `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`,
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectView;
