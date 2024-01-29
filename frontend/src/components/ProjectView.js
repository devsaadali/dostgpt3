import { Box, Typography } from "@mui/material";
import React from "react";
import { axios_get_call } from "./AxiosCall";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ProjectView = () => {
  const [alert, set_alert] = useState(false);
  const [loading, set_loading] = useState(false);
  const get_pdf = async () => {
    console.log("get_pdf");
    let url = "/get-pdf/";
    let pdf_id = 12345;

    try {
      const response = await axios_get_call(
        url,
        pdf_id,
        set_loading,
        set_alert
      );

      if (response.status === 200) {
        console.log("File RETRIEVED successfully");

        // <Alert severity="error">File uploaded successfully.</Alert>;
      } else {
        console.error("File RETRIEVAL failed");
        // <Alert severity="error">File upload failed.</Alert>;
      }
    } catch (error) {
      console.error("Error RETRIEVING file", error);
    }
  };

  useEffect(() => {
    console.log("ProjectView useEffect");
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
        // height: "100%",
        justifyContent: "center",
        // border: "1px solid",
      }}
    >
      <Box
        className="project-view-main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid green",
          height: "100%",
          width: "100%",
        }}
      >
        {/* <Box className="project-view"> */}
        <Box
          className="chat-section"
          sx={{ width: "50%", height: "100%", border: "2px solid red" }}
        ></Box>
        <Box
          className="document-view"
          sx={{ width: "50%", height: "100%", border: "2px solid blue" }}
        ></Box>
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default ProjectView;
