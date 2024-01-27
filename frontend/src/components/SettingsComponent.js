import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

const SettingsComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

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
        className="settings"
        sx={{
          // border: "1px solid green",
          width: "75%",
          marginTop: "56px",
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingX: 1,
        }}
      >
        <Box
          className="settings-profile-pic"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "95%",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              Settings
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              flexShrink: 0,
              borderRadius: "50%",
              background: `url(${process.env.PUBLIC_URL}/settings-profile-pic.jpeg) lightgray 50% / cover no-repeat`,
            }}
          />
        </Box>
        <Box
          className="settings-options-form"
          component="form"
          onSubmit={handleSubmit}
          sx={{
            m: "20px",
            padding: 1,
            width: "100%",
          }}
        >
          <Box
            className="inputs"
            sx={{
              paddingRight: 1,
              marginX: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              rowGap={1}
              sx={{
                width: "100%",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              <Grid item xs={5.5}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "26px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                    }}
                  >
                    First Name
                  </label>
                  <TextField
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      fontSize: "45px",
                      borderRadius: "5px",
                      border: "2.5px solid #858585",
                      background: "#FFF",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={5.5}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "26px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                    }}
                  >
                    Last Name
                  </label>
                  <TextField
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      border: "2.5px solid #858585",
                      background: "#FFF",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "26px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                    }}
                  >
                    Email
                  </label>
                  <TextField
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      border: "2.5px solid #858585",
                      background: "#FFF",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={5.5}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "26px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                    }}
                  >
                    City
                  </label>
                  <Select
                    value={formData.city}
                    onChange={handleChange}
                    name="city"
                    placeholder="Select City"
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      border: "2.5px solid #858585",
                      background: "#FFF",
                    }}
                  >
                    <MenuItem value="Islamabad">Islamabad</MenuItem>
                    <MenuItem value="Karachi">Karachi</MenuItem>
                    <MenuItem value="Lahore">Lahore</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={5.5}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "26px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginBottom: "5px",
                    }}
                  >
                    Country
                  </label>
                  <Select
                    value={formData.country}
                    onChange={handleChange}
                    name="country"
                    placeholder="Select Country"
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      border: "2.5px solid #858585",
                      background: "#FFF",
                    }}
                  >
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                    <MenuItem value="United States">United States</MenuItem>
                    <MenuItem value="China">China</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            className="cancel-save"
            sx={{ /*border: "1px solid red",*/ marginTop: "60px" }}
          >
            <Button
              type="button"
              variant="outlined"
              sx={{
                marginRight: "20px",
                marginLeft: "10px",
                width: "165px",
                height: "60px",
                flexShrink: 0,
                borderRadius: "5px",
                border: "3px solid #4165AC",
                background: "#FFF",
                color: "#4165AC",
                fontFamily: "Inter",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "165px",
                height: "60px",
                flexShrink: 0,
                borderRadius: "5px",
                background: "#4165AC",
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsComponent;
