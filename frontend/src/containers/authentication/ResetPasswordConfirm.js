import React, { useState } from "react";
import { Navigate, Redirect, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../../actions/auth";
import queryString from "query-string";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  let location = useLocation();
  let navigate = useNavigate();
  const [success, set_success] = useState(false);
  const [loading, set_loading] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
  });

  const { password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    set_loading(true)
    const query_values = queryString.parse(location.search);
    const uidb64 = query_values.uidb64 ? query_values.uidb64 : null;
    const token = query_values.token ? query_values.token : null;

    
     
    let res = await reset_password_confirm(uidb64, token, password);   
    set_loading(false)
    set_success(res.response)
  };

  return (
    <Box className="container">
      <Typography variant="h1"  marginTop={4}>
        Change your password
      </Typography>
      <Typography  variant="subtitle2" align="center">
        Create a new password that you will use to login here.
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
            <Box sx={{display:"flex", justifyContent:'space-between', width:"150px"}}>
            <Button
              sx={{ p: 0.25 }}
              onClick={() => set_success(false)}
              variant="contained"
            >
              Okay
            </Button>
            <Button
              sx={{ p: 0.25 }}
              onClick={() => navigate("/login")}
              variant="outlined"
            >
              Login
            </Button></Box>
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
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box>
            <TextField
              type="password"
              margin="dense"
              value={password}
              name="password"
              size="small"
              onChange={(e) => onChange(e)}
              label="New Password"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "300px" }}
              minLength="6"
              required
            />
          </Box>
          <Box>
            <ul style={{color:"grey"}}>
            <li>Must contained at least 8 characters</li>
            <li>Should not contain only numbers</li>
            </ul>
          </Box>
          <Box>
            <Button type="submit" variant="contained">Reset Password</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
