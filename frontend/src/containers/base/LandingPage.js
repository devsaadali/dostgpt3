import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { connect } from "react-redux";

import YouTube from 'react-youtube';
import Container from "../../components/Container";


const LandingPage = ({ user }) => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    event.target.pauseVideo();
    setPlayer(event.target);

  };


  return (
    <Box sx={{ maxWidth: "1255px", m: "auto" }}>
      <Box sx={{ mx: 2, display: "flex", pt: 8, pb: 6, minHeight: { md: "400px", sm: "300px", xs: "300px" }, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" sx={{ fontSize: { lg: 70, md: 60, sm: 50, xs: 35 } }} className="main-heading">
            Read PDF, DOC and other files <br />
            to save time with DostGPT
          </Typography>
        </Box>
      
      </Box>

      <Container> 
        {/* Custom container I made here ../../components/Container  */}
        <Typography variant='h1'>Features</Typography>
      </Container>

    </Box>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(LandingPage);
