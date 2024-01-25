import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { load_user } from "../actions/auth";
import { Box, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { theme } from "./ThemeConfig";
import AppSidebar from "../components/AppSidebar";

const Layout = ({ load_user, children }) => {
  const location = useLocation().pathname;
  const [dashboard_layout, set_dashboard_layout] = useState();
  const [extension_iframe, set_extension_iframe] = useState(false);

  useEffect(() => {
    load_user();
  }, []);

  useEffect(() => {
    if (location.includes("dashboard")) {
      set_dashboard_layout(true)
    } else if (location.includes("get-extension-iframe")) {
      set_extension_iframe(true)
    } else {
      set_dashboard_layout(false)
    }
  }, [location])


  return (
    <ThemeProvider theme={theme}>

      <Paper sx={{ bgcolor: extension_iframe ? "transparent" : "#F9F9F9", boxShadow: 0 }} >
        {extension_iframe ? children : dashboard_layout ?
          <>
            <AppSidebar children={children} />

          </>

          :
          <>
            <Navbar />
            <Box sx={{ mb: {xs:"130px",sm:"130px", md:"77px"} }}></Box>
            {children}
            <Footer />
          </>
        }
      </Paper>
    </ThemeProvider>
  );
};

export default connect(null, { load_user })(Layout);
