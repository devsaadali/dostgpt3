import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const SidebarTopSection = () => {
  return (
    <Box className="main">
      <Box
        className="profile-toggle-section"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px",
          //   paddingY: "10px",
        }}
      >
        <Box
          className="pic-name-section"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // p: "auto",
            gap: "10px",
            // padding: "10px",
            height: "auto",
          }}
        >
          <Box
            className="profile-pic"
            sx={{
              /*mt: "7px"*/
              height: "30px",
              width: "30px",
            }}
          >
            <img
              style={{
                borderRadius: "20px",
                background:
                  "var(--Avatar-Female, url(<path-to-image>), lightgray 50% / cover no-repeat)",
                height: "30px",
                width: "30px",
              }}
              src={process.env.PUBLIC_URL + "/profile-pic.svg"}
            ></img>
          </Box>
          <Box
            className="profile-name"
            sx={{
              color: "var(--Gray-300, var(--Gray-300, #4C5560))",
              textAlign: "center",

              /* Text XS / Medium */
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "18px" /* 138.462% */,
              letterSpacing: "-0.1px",
            }}
          >
            Mariam
          </Box>
        </Box>
        <Box className="toggle-button" sx={{ width: "20px", height: "20px" }}>
          <img
            style={{ width: "20px", height: "20px" }}
            src={process.env.PUBLIC_URL + "/toggle-icon.svg"}
          ></img>
        </Box>
      </Box>
      <Divider />
      <Box
        className="new-project-section"
        sx={{ paddingX: "8px", paddingY: "6px", marginX: "10px" }}
      >
        <Button
          sx={{
            display: "flex",
            justifyContent: "left",
            width: "100%",
            gap: "6px",
          }}
        >
          <img src={process.env.PUBLIC_URL + "/new-project-icon.svg"}></img>
          <Typography
            sx={{
              color: "var(--Gray-400, var(--Gray-400, #454D56))",
              textAlign: "center",

              /* Text S / Medium */
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px" /* 142.857% */,
              letterSpacing: "-0.1px",
            }}
          >
            New Project
          </Typography>
        </Button>
      </Box>
      {/* <Divider sx={{ marginLeft: "15px", marginRight: "15px" }} /> */}
      <Divider variant="middle" />
      <Box className="history-section">
        <Box
          className="history-projects"
          sx={{ marginX: "15px", marginTop: "15px" }}
        >
          <Typography
            sx={{
              marginLeft: "5px",
              color: "var(--Gray-50, var(--Gray-50, #858C95))",
              //   textAlign: "center",

              /* Text XS / Medium */
              fontFamily: "Inter",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "18px" /* 138.462% */,
              letterSpacing: "-0.1px",
            }}
          >
            History
          </Typography>
          <Box className="projects-list">
            <List>
              <ListItem sx={{ width: "100%", paddingX: "3px" }}>
                <Typography>👋 Project 1</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarTopSection;
