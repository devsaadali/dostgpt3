import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";
import { TextField } from "@mui/material";

const RecoverComponent = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted with email:", email);
    // Add your additional logic here, such as API calls for password recovery
  };

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          height: "420px",
          width: "420px",
        }}
      >
        <Box
          sx={{
            marginBottom: "35px",
          }}
        >
          <img
            style={{
              width: "230px",
            }}
            src={process.env.PUBLIC_URL + "/dostgpt-logo.png"}
            alt="DostGPT Logo"
          ></img>
        </Box>
        <Box
          sx={{
            width: "fit-content",
            marginTop: "15px",
            marginBottom: "35px",
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
              width: "fit-content",
            }}
          >
            Recover
          </Typography>
        </Box>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <label
              style={{
                marginBottom: "5px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Email
            </label>
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              sx={{
                width: "100%",
                borderRadius: "5px",
                border: "none",
                background: "#F7F7F8",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "#4165AC",
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
                width: "100%",
                height: "60px",
                ":hover": {
                  background: "#4165AC",
                },
              }}
            >
              Reset Your Password
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default RecoverComponent;
