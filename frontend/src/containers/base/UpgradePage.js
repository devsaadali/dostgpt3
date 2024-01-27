import React from "react";
import UpgradeComponent from "../../components/UpgradeComponent";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";

const UpgradePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <UpgradeComponent />
    </Box>
  );
};

export default UpgradePage;
