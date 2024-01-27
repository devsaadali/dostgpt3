import React from "react";
import ProjectView from "../../components/ProjectView";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";

const ProjectViewPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {/* <AppSidebar /> */}
      <Sidebar />
      {/* <NewProject /> */}
      <ProjectView />
    </Box>
  );
};

export default ProjectViewPage;
