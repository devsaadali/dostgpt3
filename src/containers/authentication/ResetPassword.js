import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../../actions/auth";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";

const ResetPassword = ({ reset_password }) => {
  const [email, setEmail] = useState("");
  const [success, set_success] = useState(false);
  const [loading, set_loading] = useState(false);

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    set_loading(true)
    const redirect_url = `${process.env.REACT_APP_FRONTEND_URL}/password/reset/confirm`;
    let res = await reset_password(email, redirect_url);
    set_loading(false)
    set_success(res.response)
  };

  return (
    <Box >
    <Typography variant="h1" pt={4} >
        Password reset form
      </Typography>
          <Typography variant="subtitle2" align="center">
        Type the email and we will send instructions to reset the password.
      </Typography>

      {success ? (
        <Box
          sx={{
            zIndex: 2,
            position: "absolute",
            minWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            top:0,
            alignItems: "center",
            bgcolor:"rgba(0,0,0,0.5)"
          }}
        >
          <Box sx={{   width: "100%", display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "70vh",
              }}>
          <Box
            sx={{
              width: {lg:"50%", xs:"100%"},
              
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "20vh",
              p: {lg:2, xs:4},
              mb: 20,
              background: "white",
              borderRadius: {lg:5, xs:0},
              boxShadow: 5,
            }}
          >
            <Typography align="center" variant="h1">
              {success}
            </Typography>

            <br />
            <Button
              sx={{ p: 0.25 }}
              onClick={() => set_success(false)}
              variant="contained"
            >
              Okay
            </Button>
          </Box></Box>
        </Box>
      ) : (
        ""
      )}
      <br />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <form
          onSubmit={(e) => onSubmit(e)}
          style={{
            display: "flex",
            width: "50%",
            margin: "auto",
            justifyContent:'center',
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
            <TextField
              type="email"
              margin="dense"
              value={email}
              size="small"
              onChange={(e) => onChange(e)}
              label="Email"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              required
            />
            <Button type="submit" variant='contained'>{loading ? <CircularProgress /> : "Reset Password"}</Button>
        </form>
      </Box>
    </Box>
  );
};

export default connect(null, { reset_password })(ResetPassword);
