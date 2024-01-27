import React from "react";
import AppSidebar from "../../components/AppSidebar";
import NewProject from "../../components/NewProject";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";

const NewProjectPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {/* <AppSidebar /> */}
      <Sidebar />
      <NewProject />
    </Box>
  );
};

export default NewProjectPage;
