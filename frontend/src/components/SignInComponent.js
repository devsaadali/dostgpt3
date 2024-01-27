import React from "react";
import { Box } from "@mui/material";

const LoginComponent = () => {
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
        className="signup-main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "2px solid green",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/login-pic.png"}
          style={{ width: "593px", height: "463px" }}
        ></img>
      </Box>
    </Box>
  );
};

export default LoginComponent;
