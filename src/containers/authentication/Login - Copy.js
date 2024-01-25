import { GoogleOAuthProvider, useGoogleLogin, useGoogleOAuth } from '@react-oauth/google';

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import {
  login,
  facebookAuthenticate,
  googleAuthenticate,
} from "../../actions/auth";
import axios from "axios";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { gapi } from 'gapi-script';

// UI elements
import { TextField, Button, Container, CircularProgress, Divider, Alert } from "@mui/material";
import { Box } from "@mui/system";

const Login = ({
  login,
  user,
  facebookAuthenticate,
  googleAuthenticate,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [alert, set_alert] = useState(false);
  const [loading, set_loading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    set_loading(true)
    await login(email, password, set_alert);
    set_loading(false)
  };
  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.auth2.init({
  //       client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //       scope: 'email profile',
  //       fetch_basic_profile: false
  //     });
  //   };
  //   gapi.load('client:auth2', initClient);
  // });
  function CustomGoogleLogin() {
    const googleLogin = useGoogleLogin({
      onSuccess: async (res) => {
        googleAuthenticate(res.access_token, set_alert);
      },
      onError: () => {
        console.log("Error while logging in");
      },
    });

    return (
      <Button variant="outlined" fullWidth onClick={() => {
        googleLogin()
      }}>Continue with Google</Button>
    );
  }
  const continueWithFacebook = (res) => {
    facebookAuthenticate(res.accessToken);
    // try {
    //     const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_FRONTEND_URL}/facebook`)

    //     window.location.replace(res.data.authorization_url);
    // } catch (err) {

    // }
  };
  useEffect(() => {


    if (user) {
      if (localStorage.getItem("access")) {
        navigate(`/dashboard`);
      }
    }
  }, [user])
  return (
    <div className="container">
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          minHeight: "100vh",
          maxHeight: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",

          "": "",
        }}
      >
        <h1 style={{ margin: 0 }}>Login</h1>
        <p>Log into your Account</p>
        <br />
        {alert ? (
          <Alert
            onClose={() => {
              set_alert(false);
            }}
            severity={alert.toLowerCase().includes('[error]') ? 'error' : 'info'}
            sx={{
              p: 2,
              mb: 2,
              width: 1,
              zIndex: 9923213,
            }}
          >
            {alert}
          </Alert>
        ) : (
          ''
        )}
      
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "140%",
            }}
          >
            <Box style={{ flex: 1 }}>

              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <CustomGoogleLogin />
              </GoogleOAuthProvider>
           
            </Box>

            
          </Box>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  login,
  facebookAuthenticate,
  googleAuthenticate,
})(Login);  