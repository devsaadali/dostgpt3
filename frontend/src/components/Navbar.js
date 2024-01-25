import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Box, Button, Typography } from "@mui/material";

const Navbar = ({ logout, user }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        zIndex: 9999999999,
        position: "fixed",
        top: 0,
        width: "80%",
        // backdropFilter: "blur(15px)",
        // bgcolor: "rgba(255,255,255,0.5)",
        background: "#FFF",
        right: "0px",
        // border: "2px solid",
      }}
    >
      <Box sx={{ p: 2 /*borderBottom: "1px solid #DDDDDD"*/ }}>
        <Box
          sx={{
            maxWidth: "1255px",
            m: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginLeft: "40%",
            }}
          >
            {/* <Typography
              variant="h2"
              onClick={() => {
                navigate("/");
              }}
              sx={{ cursor: "pointer" }}
            >
              DostGPT
            </Typography> */}
            <img
              // style={{ marginLeft: "50%" }}
              src={process.env.PUBLIC_URL + "/dostgpt-logo.png"}
            ></img>
          </Box>
          {user ? (
            <Button
              sx={{ ml: 1, background: "#4165AC" }}
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </Button>
          ) : (
            <Box sx={{ display: "flex", my: { xs: 2, sm: 2, md: 0 } }}>
              <Button
                sx={{ mr: 1 }}
                variant="outlined"
                color="secondary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                sx={{ ml: 1, background: "#4165AC" }}
                variant="contained"
                // color="primary"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
// [End] main function to render navbar
const mapStateToProps = (state) => ({
  state: state,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
