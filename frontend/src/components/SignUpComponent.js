import { Box } from "@mui/material";
import React from "react";

const SignUpComponent = () => {
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
          src={process.env.PUBLIC_URL + "/signup-pic.png"}
          style={{ width: "669px", height: "447px" }}
        ></img>
      </Box>
    </Box>
  );
};

export default SignUpComponent;
