import { React, useState } from "react";
import Box from "@mui/material/Box";
import { Alert, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { axios_post_call } from "./AxiosCall";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [pdfID, setpdfID] = useState(null);
  const [alert, set_alert] = useState(false);
  const [loading, set_loading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      let url = "/upload-pdf/";

      try {
        const response = await axios_post_call(
          url,
          file,
          set_loading,
          set_alert
        );

        if (response.status === 201) {
          console.log("File uploaded successfully");
          // response.data.id = response.data.id;
          console.log(
            "This is the ID of the uploaded file: ",
            response.data.pdf_data["file"]
          );
          // setUploadedFile(response.data);
          setpdfID(response.data.pdf_data["id"]);
          navigate("/project-view", {
            state: {
              pdfID: response.data.pdf_data["id"],
              // pdfName: response.data.pdf_data["file"],
            },
          });
          // <Alert severity="error">File uploaded successfully.</Alert>;
        } else {
          console.error("File upload failed");
          // <Alert severity="error">File upload failed.</Alert>;
        }
      } catch (error) {
        console.error("Error uploading file", error);
      }
    },
  });

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
        // border: "5px solid",
      }}
    >
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
            <input {...getInputProps()} style={{ display: "none" }} />
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
            <li>You can upload a simple document or multiple documents</li>
            <li>dostGPT currently supports word document and PDF</li>
            <li>Maximum limit of document size should not be more than 50mb</li>
          </ol>
        </Box>
      </Box>
    </Box>
  );
};

export default NewProject;
