import { Box, Grid, List, Paper, Typography, Button } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import Divider from "@mui/material/Divider";

const UpgradeComponent = () => {
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
        className="upgrade-main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "2px solid green",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          className="upgrade"
          sx={{
            //   border: "2px solid green" /*height: "80%", width: "80%"*/,
            //   height: "fit-content",
            //   width: "fit-content",
            //   height: "auto",
            //   width: "auto",
            width: "90%",
            height: "auto",
            padding: "20px",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box sx={{ border: "2px solid green" }}> */}
            <Grid item xs={4}>
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  padding: "24px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  // flex: "1 0 0",
                  // height: "476px",
                  // width: "299px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1A1A1A",
                    fontFamily: "Helvetica",
                    fontSize: "27px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%" /* 32.4px */,
                    letterSpacing: "-0.54px",
                  }}
                >
                  Free
                </Typography>
                <Typography
                  sx={{
                    color: "#1A1A1A",
                    fontFamily: "Helvetica",
                    fontSize: "27px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%" /* 32.4px */,
                    letterSpacing: "-0.54px",
                  }}
                >
                  7 days free
                </Typography>
                <Typography
                  sx={{
                    color: "#667085",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "140%" /* 25.2px */,
                  }}
                >
                  Description of the tier list will go here, copy should be
                  concise and impactful.
                </Typography>
                <Divider sx={{ width: "100%" }} />
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="1 Project" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="AI Enabled" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Email Support" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Limited Chat Interactions" />
                  </ListItem>
                </List>
                <Button
                  type="button"
                  variant="outlined"
                  sx={{
                    //   marginRight: "20px",
                    //   marginLeft: "10px",
                    paddingY: "16px",
                    paddingX: "8px",
                    width: "100%",
                    //   height: "60px",
                    //   flexShrink: 0,
                    //   borderRadius: "5px",
                    //   border: "3px solid #4165AC",
                    //   background: "#FFF",
                    //   color: "#4165AC",
                    //   fontFamily: "Inter",
                    //   fontSize: "28px",
                    //   fontStyle: "normal",
                    //   fontWeight: 400,
                    //   lineHeight: "normal",
                    display: "flex",
                    padding: "16px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                    borderRadius: "4px",
                    color: "#4165AC",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "140%" /* 25.2px */,
                    border: "3px solid #4165AC",
                    ":hover": {
                      border: "3px solid #4165AC",
                    },
                  }}
                >
                  Try for Free
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={24}
                //   sx={{
                //     display: "flex",
                //     padding: "24px",
                //     flexDirection: "column",
                //     alignItems: "flex-start",
                //     gap: "12px",
                //     // flex: "1 0 0",
                //     // height: "476px",
                //     // width: "299px",
                //   }}
                sx={{
                  display: "flex",
                  padding: "24px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  // flex: "1 0 0",
                  // height: "476px",
                  // width: "299px",
                  boxShadow: "0px 4px 27px 4px rgba(65,101,172,1)",
                  WebkitBoxShadow: "0px 4px 27px 4px rgba(65,101,172,1)",
                  MozBoxShadow: "0px 4px 27px 4px rgba(65,101,172,1)",
                }}
              >
                <Typography
                  sx={{
                    color: "#1A1A1A",
                    fontFamily: "Helvetica",
                    fontSize: "27px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%" /* 32.4px */,
                    letterSpacing: "-0.54px",
                  }}
                >
                  PRO
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    color: "#1A1A1A",
                    fontFamily: "Helvetica",
                    fontSize: "27px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%" /* 32.4px */,
                    letterSpacing: "-0.54px",
                  }}
                >
                  RS. 800{" "}
                  <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                    /month
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    color: "#667085",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "140%" /* 25.2px */,
                  }}
                >
                  Description of the tier list will go here, copy should be
                  concise and impactful.
                </Typography>
                <Divider sx={{ width: "100%" }} />
                <Typography
                  sx={{
                    color: "#667085",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "140%" /* 25.2px */,
                  }}
                >
                  Everything in the Free plan, plus
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="50 Projects" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Full Chat Interactions" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Enhanced Document Insights" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Priority Customer Support" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Advanced Search Functionality" />
                  </ListItem>
                </List>
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    //   marginRight: "20px",
                    //   marginLeft: "10px",
                    paddingY: "16px",
                    paddingX: "8px",
                    width: "100%",
                    //   height: "60px",
                    //   flexShrink: 0,
                    //   borderRadius: "5px",
                    //   border: "3px solid #4165AC",
                    //   background: "#FFF",
                    //   color: "#4165AC",
                    //   fontFamily: "Inter",
                    //   fontSize: "28px",
                    //   fontStyle: "normal",
                    //   fontWeight: 400,
                    //   lineHeight: "normal",
                    display: "flex",
                    padding: "16px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                    borderRadius: "4px",
                    background: "#4165AC",
                    color: "#FFF",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "140%" /* 25.2px */,
                    border: "3px solid #4165AC",
                    ":hover": {
                      border: "3px solid #4165AC",
                      background: "#4165AC",
                    },
                  }}
                >
                  Subscribe Now
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  padding: "24px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  // flex: "1 0 0",
                  // height: "476px",
                  // width: "299px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1A1A1A",
                    fontFamily: "Helvetica",
                    fontSize: "27px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%" /* 32.4px */,
                    letterSpacing: "-0.54px",
                  }}
                >
                  Enterprise
                </Typography>
                <Typography
                  sx={{
                    color: "#1A1A1A",
                    fontFamily: "Helvetica",
                    fontSize: "27px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%" /* 32.4px */,
                    letterSpacing: "-0.54px",
                  }}
                >
                  Custom
                </Typography>
                <Typography
                  sx={{
                    color: "#667085",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "140%" /* 25.2px */,
                  }}
                >
                  Description of the tier list will go here, copy should be
                  concise and impactful.
                </Typography>
                <Divider sx={{ width: "100%" }} />
                <Typography
                  sx={{
                    color: "#667085",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "140%" /* 25.2px */,
                  }}
                >
                  Everything in the Pro plan, plus
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Tailored to Enterprise Requirements" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Dedicated Account Manager" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Customized AI Models" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Custom Pricing" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img
                        src={process.env.PUBLIC_URL + "/check-icon.svg"}
                      ></img>
                    </ListItemIcon>
                    <ListItemText primary="Advanced Security Measures" />
                  </ListItem>
                </List>
                <Button
                  type="button"
                  variant="outlined"
                  sx={{
                    //   marginRight: "20px",
                    //   marginLeft: "10px",
                    paddingY: "16px",
                    paddingX: "8px",
                    width: "100%",
                    //   height: "60px",
                    //   flexShrink: 0,
                    //   borderRadius: "5px",
                    //   border: "3px solid #4165AC",
                    //   background: "#FFF",
                    //   color: "#4165AC",
                    //   fontFamily: "Inter",
                    //   fontSize: "28px",
                    //   fontStyle: "normal",
                    //   fontWeight: 400,
                    //   lineHeight: "normal",
                    display: "flex",
                    padding: "16px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                    borderRadius: "4px",
                    color: "#4165AC",
                    fontFamily: "Helvetica",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "140%" /* 25.2px */,
                    border: "3px solid #4165AC",
                    ":hover": {
                      border: "3px solid #4165AC",
                    },
                  }}
                >
                  Contact Sales
                </Button>
              </Paper>
            </Grid>
            {/* </Box> */}
            {/* <Box sx={{ border: "2px solid green" }}> */}
            {/* <Grid item xs={4}></Grid> */}
            {/* </Box> */}
            {/* <Box sx={{ border: "2px solid green" }}> */}
            {/* <Grid item xs={4}></Grid> */}
            {/* </Box> */}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default UpgradeComponent;
