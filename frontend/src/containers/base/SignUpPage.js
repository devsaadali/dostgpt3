import React from "react";
import SignUpComponent from "../../components/SignUpComponent";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";

const SignUpPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <SignUpComponent />
    </Box>
  );
};

export default SignUpPage;
