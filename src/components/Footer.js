import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [current_year, set_current_year] = useState("Current Year")
  const navigate = useNavigate()

  useEffect(() => {
    set_current_year(new Date().getFullYear())
  }, [])


  return (
    <Box
      bgcolor="customBox.themeAdaptive"
      color="white"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "15px",
        paddingBottom: "15px",
        mt:4
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90vw', margin: 'auto' }}>
        <Box>
          <Typography variant='subtitle2' onClick={() => { navigate("/") }} sx={{ cursor: "pointer", color: "white", "&:hover": { fontWeight: "bold", } }}> DostGPT | {current_year}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { md: "row", sm: "column", xs: "column" } }}>
          <Box sx={{ flex: 1 }}><Typography align="left" variant='subtitle2' onClick={() => { navigate("/contact-us") }} sx={{ px: 1, py:2, whiteSpace: "nowrap", transition: "0.2s all", cursor: "pointer", color: "white", "&:hover": { fontWeight: "bold", textDecoration: "underline" } }}>Contact US</Typography></Box>
          <Box sx={{ flex: 1 }}><Typography align="left" variant='subtitle2' onClick={() => { navigate("/contact-us") }} sx={{ px: 1, py:2, whiteSpace: "nowrap", transition: "0.2s all", cursor: "pointer", color: "white", "&:hover": { fontWeight: "bold", textDecoration: "underline" } }}>Terms and Services</Typography></Box>
          <Box sx={{ flex: 1 }}><Typography align="left" variant='subtitle2' onClick={() => { navigate("/contact-us") }} sx={{ px: 1, py:2, whiteSpace: "nowrap", transition: "0.2s all", cursor: "pointer", color: "white", "&:hover": { fontWeight: "bold", textDecoration: "underline" } }}>Privacy Policy</Typography></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
