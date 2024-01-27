import React from "react";
import SettingsComponent from "../../components/SettingsComponent";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";

const SettingsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <SettingsComponent />
    </Box>
  );
};

export default SettingsPage;
