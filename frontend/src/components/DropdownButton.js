import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

const WipeInUpBox = styled(Box)({
  "@keyframes wipe-in-up": {
    from: {
      clipPath: "inset(100% 0 0 0)",
    },
    to: {
      clipPath: "inset(0 0 0 0)",
    },
  },
  ".wipe-in-up": {
    animation: "2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-up both",
  },
});

const DropdownButton = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <WipeInUpBox
      sx={{
        display: "flex",
        flexDirection: "column",
        // border: "5px solid blue",
        // height: "fit-content",
      }}
    >
      <Button
        variant="outlined"
        onClick={toggleContentVisibility}
        sx={{
          display: "flex",
          // paddingY: "20px",
          paddingX: "0px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          borderRadius: "0px",
          borderTop: "1px solid var(--Neutral-700, #E5E5E7)",
          borderBottom: "0px",
          borderLeft: "0px",
          borderRight: "0px",
          background: "#FFF",
          ":hover": {
            background: "#FFF",
            borderTop: "1px solid var(--Neutral-700, #E5E5E7)",
            borderLeft: "0px",
            borderRight: "0px",
            borderBottom: "0px",
          },
          transform: `translateY(${isContentVisible ? "-100%" : "0"})`,
          transition: "transform 0.5s ease", // Apply a smooth transition for the transform property
        }}
      >
        {isContentVisible ? (
          <KeyboardArrowDownSharpIcon
            sx={{ color: "var(--Gray-200, var(--Gray-200, #525D6A))" }}
          />
        ) : (
          <KeyboardArrowUpSharpIcon
            sx={{ color: "var(--Gray-200, var(--Gray-200, #525D6A))" }}
          />
        )}
      </Button>
      {isContentVisible ? (
        <Box
          sx={{
            marginTop: "-50px",
            // border: "1px solid green",
            paddingRight: "16px",
            paddingLeft: "20px",
            paddingBottom: "16px",
            paddingTop: "1px",
            // opacity: isContentVisible ? 1 : 0,
            height: isContentVisible ? "auto" : 0,
            overflow: "hidden",
            transition: "opacity 0.5s ease, height 0.5s ease",
            // animation: "2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-up both",
          }}
          // className={isContentVisible ? "wipe-in-up" : ""}
        >
          {/* Your dropdown content goes here */}
          {/* <Typography sx={{ border: "1px solid red" }}>
            This is the content that appears when the dropdown is expanded.
          </Typography> */}
          <Paper
            elevation={2}
            sx={{
              /*border: "1px solid red",*/
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "10px",
              paddingRight: "20px",
              paddingY: "17px",
              marginBottom: "10px",
            }}
          >
            <Typography
              sx={{
                color: "var(--Gray-400, var(--Gray-400, #454D56))",
                textAlign: "center",

                /* Text XS / Medium */
                fontFamily: "Inter",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "18px" /* 138.462% */,
                letterSpacing: "-0.1px",
              }}
            >
              Free Plan
            </Typography>
            <Typography
              sx={{
                color: "var(--Gray-50, var(--Gray-50, #858C95))",
                textAlign: "center",

                /* Text XS / Medium */
                fontFamily: "Inter",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "18px" /* 138.462% */,
                letterSpacing: "-0.1px",
              }}
            >
              7 days left
            </Typography>
          </Paper>
          <Box sx={{ marginTop: "20px" }}>
            <Box>
              <Typography
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "var(--Primary-500, var(--Primary-500, #2C8AFF))",
                  textAlign: "center",

                  /* Text S / Medium */
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px" /* 142.857% */,
                  letterSpacing: "-0.1px",
                }}
              >
                <img src={process.env.PUBLIC_URL + "/upgrade-icon.svg"}></img>
                Upgrade
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "var(--Gray-200, var(--Gray-200, #525D6A))",
                  textAlign: "center",

                  /* Text S / Medium */
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px" /* 142.857% */,
                  letterSpacing: "-0.1px",
                }}
              >
                <img src={process.env.PUBLIC_URL + "/help-icon.svg"}></img>
                Help
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "var(--Gray-200, var(--Gray-200, #525D6A))",
                  textAlign: "center",

                  /* Text S / Medium */
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px" /* 142.857% */,
                  letterSpacing: "-0.1px",
                }}
              >
                <img src={process.env.PUBLIC_URL + "/settings-icon.svg"}></img>
                Settings
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "var(--Gray-200, var(--Gray-200, #525D6A))",
                  textAlign: "center",

                  /* Text S / Medium */
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px" /* 142.857% */,
                  letterSpacing: "-0.1px",
                }}
              >
                <img src={process.env.PUBLIC_URL + "/logout-icon.svg"}></img>
                Log out
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : null}
    </WipeInUpBox>
  );
};

export default DropdownButton;
