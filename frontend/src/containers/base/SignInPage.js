import React from "react";
import LoginComponent from "../../components/SignInComponent";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";

const SignInPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <LoginComponent />
    </Box>
  );
};

export default SignInPage;
