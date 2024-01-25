import React from "react";
import { Box } from "@mui/material";

const SignInComponent = () => {
  return (
    <Box
      className="signup-main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid green",
        height: "100%",
        width: "100%",
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/login-pic.png"}
        style={{ width: "593px", height: "463px" }}
      ></img>
    </Box>
  );
};

export default SignInComponent;
