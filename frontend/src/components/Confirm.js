import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";

const ConfirmPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjust the height based on your design
      }}
    >
      <Paper
        elevation={8}
        sx={{
          /*border: "2px solid red",*/ display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          height: "420px",
          width: "420px",
        }}
      >
        <Box
          sx={
            {
              // marginBottom: "20px"
            }
          }
        >
          <img
            style={{ width: "184px", height: "184px" }}
            src={process.env.PUBLIC_URL + "/confirm-pic.png"}
          ></img>
        </Box>
        <Box
          sx={{
            border: "1px solid green",
            width: "fit-content",
            marginTop: "15px",
            marginBottom: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              // border: "1px solid red",
              width: "fit-content",
            }}
          >
            Your account successfully created.
          </Typography>
        </Box>
        <Box
          sx={
            {
              // marginBottom: "20px"
            }
          }
        >
          <Button
            variant="contained"
            sx={{
              background: "#4165AC",
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Got to Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ConfirmPage;
