import { GoogleOAuthProvider, useGoogleLogin, useGoogleOAuth } from '@react-oauth/google';

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  signup,
  facebookAuthenticate,
  googleAuthenticate,
} from "../../actions/auth";
import axios from "axios";
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 

// import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

// UI elements
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  InputLabel,
  NativeSelect,
  FormControl,
  Divider,
} from "@mui/material";
import { alert_box } from "../../components/alert_structure";
import csrf_grabber from "../../components/csrf_grabber";

const Signup = ({
  signup,
  isAuthenticated,
  facebookAuthenticate,
  googleAuthenticate,
}) => {
  const search = useLocation().search;

  const [formData, setFormData] = useState({
    language: "en",
    email: "",
    password1: "",
    password2: "",
  });
  var csrftoken = csrf_grabber("csrftoken");

  const { language, email, password1, password2 } = formData;
  const [successful, set_successful] = useState(false);

  const [loading, set_loading] = useState(false);
  const navigate = useNavigate();


  const onChange = (e) => {
    let value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    if (password1 === password2) {
      set_loading(true);
      let sign_up_res = await signup(
        language,
        email,
        password1,
        password2
      ).then();
      set_loading(false);
      if (sign_up_res == 1) {
        set_successful(true);
      }
    } else {
      let html = alert_box("Both passwords must match", "alertBoxError");
      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
    }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email profile",
        fetch_basic_profile: false,
      });
    };
    gapi.load("client:auth2", initClient);
  });

  function CustomGoogleLogin() {
    const googleLogin = useGoogleLogin({
      onSuccess: async (res) => {
        googleAuthenticate(res.access_token);
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
  };

  if (isAuthenticated) {
    setTimeout(async () => {
      navigate("/dashboard");
    }, 3000);
  }

  return (
    <div className="container">
      {successful ? (
        <Box
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
          <Box
            sx={{
              minWidth: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "20vh",
              mb: 20,
              background: "white",
              borderRadius: 5,
              boxShadow: 5,
            }}
          >
            <Typography align="center" fontSize="xx-large">
              Account created successfully. Logging in...
            </Typography>

            <br />
            <Button
              sx={{ p: 0.25 }}
              onClick={() => set_successful(false)}
              variant="contained"
            >
              Okay
            </Button>
          </Box>
        </Box>
      ) : (
        ""
      )}
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          minHeight: "100vh",
          maxHeight: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" style={{ margin: 0 }}>Sign Up</Typography>
        <Typography variant="subtitle2">Create your Account</Typography>
        <br />
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            alignItems: "center",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "140%",
            }}
            onSubmit={(e) => onSubmit(e)}
          >

            {/* Email Field */}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              size="small"
              type="email"
              name="email"
              inputProps={{ maxLength: 255 }}
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            {/* Password Field */}
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="dense"
              size="small"
              type="password"
              name="password1"
              value={password1}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
            {/* Confirm Password Field */}
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              margin="dense"
              size="small"
              type="password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
            <Button
              sx={{ margin: "4px", width: "96%" }}
              variant="contained"
              type="submit"
            >
              {loading ? <CircularProgress color="secondary" /> : "Register"}
            </Button>
          </form>

          <br />
          <Divider flexItem>
            or register with
          </Divider>
          <br />
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
              {/* <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={continueWithGoogle}
                onFailure={continueWithGoogle}
                redirect_uri={`${process.env.REACT_APP_FRONTEND_URL}/google`}
                cookiePolicy={"single_host_origin"}
                render={renderProps => (
                  <Button variant= "outlined" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}>Continue with Google</Button>
                )}
              /> */}
            </Box>
            {/* <Box sx={{ minWidth: "100%" }}>
              <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                fields="email, username"
                callback={continueWithFacebook}
                render={renderProps => (
                  <Button variant= "outlined" fullWidth onClick={renderProps.onClick}>Continue with Facebook</Button>
                )}
              />
            </Box> */}
          </Box>
        </div>
        <br />
        <p className="mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-k7pzs0-MuiTypography-root-MuiLink-root"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  signup,
  facebookAuthenticate,
  googleAuthenticate,
})(Signup);
