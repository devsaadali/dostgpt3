import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDropzone } from "react-dropzone";

const NewProjectPage = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  const fileInputRef = React.useRef(null);

  const handleBrowseClick = () => {
    // Trigger the click event on the hidden file input
    fileInputRef.current.click();
  };
  return (
    <Box
      sx={{
        width: "700px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        className="button-dropzone"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          margin: "auto",
        }}
      >
        <Button
          variant="contained"
          sx={{
            display: "flex",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "27px",
            background: "#4165AC",
            ":hover": {
              background: "#4165AC",
            },
          }}
          {...getRootProps()}
          onClick={handleBrowseClick}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              textAlign: "center",
              width: "290px",
              fontFamily: "Inter",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "36px",
              letterSpacing: "-0.72px",
            }}
          >
            Browse Files
          </Typography>
          <input
            {...getInputProps()}
            ref={fileInputRef}
            style={{ display: "none" }} // Hide the file input
          />
        </Button>
        <Typography
          sx={{
            color: "var(--Neutral-800, var(--Neutral-800, #C1C3C7))",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "24px",
            letterSpacing: "-0.16px",
            // cursor: "pointer",
          }}
        >
          or drag & drop
        </Typography>
      </Box>
      <Box
        sx={{
          width: "fit-content",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "var(--Gray-200, var(--Gray-200, #525D6A))",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "0px",
            letterSpacing: "-0.1px",
            marginBottom: "20px",
          }}
        >
          Note:
        </Typography>
        <ol
          style={{
            color: "var(--Gray-200, var(--Gray-200, #525D6A))",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "0px",
            letterSpacing: "-0.1px",
            paddingLeft: "16px",
          }}
        >
          {/* <Typography
                sx={{
                  color: "var(--Gray-200, var(--Gray-200, #525D6A))",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "0px",
                  letterSpacing: "-0.1px",
                }}
              >
                Note:
              </Typography> */}
          <li>You can upload a simple document or multiple documents</li>
          <li>dostGPT currently supports word document and PDF</li>
          <li>Maximum limit of document size should not be more than 50mb</li>
        </ol>
      </Box>
    </Box>
  );
};

export default NewProjectPage;
