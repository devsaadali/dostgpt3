import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectView = () => {
  return (
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
  );
};

export default ProjectView;
