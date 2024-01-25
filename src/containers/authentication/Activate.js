import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../../actions/auth";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
const Activate = ({ verify }) => {
  const search = useLocation().search;
  const [is_verified, set_is_verified] = useState(false);

  const verify_account = async (e) => {
    const uid = new URLSearchParams(search).get("uid");
    const token = new URLSearchParams(search).get("token");
    let res = await verify(uid, token);
    if (res == 0)
    {set_is_verified("failed")}
    else{
    set_is_verified(true)}
  };

  return (
    <div className="container">
{is_verified ?   <Box
          sx={{
            zIndex: 2,
            position: "absolute",
            minWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{minWidth: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "20vh",
          mb:20,
          background: "white",
          borderRadius: 5,
          boxShadow: 5,
          
        }}>
          {typeof is_verified == "string" ?   <>
          <Typography align="center" variant="h1">
          <CancelIcon style={{fontSize:'72px', color:'#ea2323', m:1}} />
          </Typography>
          <Typography align="center" variant="h3">
          Try to <Link to="/login">login</Link>. If fail to login, contact support
          </Typography>
          </>:
          <>
          <Typography align="center" variant="h1">
          <TaskAltIcon style={{fontSize:'72px', color:'#6cea12', m:1}} />
          </Typography>
          <Typography align="center" variant="h3">
            <span style={{fontWeight:'bold'}}> Verified!</span> Redirecting to dashboard...
          </Typography>
          </> }
        </Box></Box>:
        <Box>
      <Typography variant="h1" marginTop={2}>
        Activate Your Account
      </Typography>
      <Typography variant="subtitle2"  marginTop={2} align='center'>
        Click the verify button to verify the ownership of the email address you
        registered with.
      </Typography>
      <br />
      :
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          minHeight: "100vh",
          textAlign: "-webkit-center",
        }}
      >
        <Button onClick={verify_account} variant="contained" type="button">
          Verify
        </Button>
      </Box></Box>}
    </div>
  );
};

export default connect(null, { verify })(Activate);
