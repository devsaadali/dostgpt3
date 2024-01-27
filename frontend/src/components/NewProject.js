import { React, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { axios_post_call } from "./AxiosCall";

const NewProject = () => {
  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "application/pdf",
  //   maxFiles: 1,
  //   onDrop: (acceptedFiles) => {
  //     console.log(acceptedFiles);
  //   },
  // });

  // const fileInputRef = React.useRef(null);

  // const handleBrowseClick = () => {
  //   // Trigger the click event on the hidden file input
  //   fileInputRef.current.click();
  // };

  const [uploadedFile, setUploadedFile] = useState(null);
  const [alert, set_alert] = useState(false);
  const [loading, set_loading] = useState(false);

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "application/pdf",
  //   maxFiles: 1,
  //   onDrop: async (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     setUploadedFile(file);

  //     const formData = new FormData();
  //     formData.append("file", file);

  //     try {
  //       const response = await axios.post(
  //         "http://your-django-backend-url/upload/",
  //         formData
  //       );

  //       // console.log("REACHED");

  //       if (response.status === 201) {
  //         console.log("File uploaded successfully");
  //       } else {
  //         console.error("File upload failed");
  //       }
  //     } catch (error) {
  //       console.error("Error uploading file", error);
  //     }
  //   },
  // });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      let url = "/upload-pdf";

      try {
        const response = await axios_post_call(
          url,
          file,
          set_loading,
          set_alert
        );

        if (response.status === 201) {
          console.log("File uploaded successfully");
        } else {
          console.error("File upload failed");
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
          {/* <Button
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
        </Button> */}
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
    </Box>
  );
};

export default NewProject;

// import React from "react";
// import Box from "@mui/material/Box";
// import { Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { useDropzone } from "react-dropzone";

// const NewProject = () => {
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "application/pdf",
//     maxFiles: 1,
//     onDrop: (acceptedFiles) => {
//       console.log(acceptedFiles);
//     },
//   });

//   const fileInputRef = React.useRef(null);

//   const handleBrowseClick = () => {
//     // Trigger the click event on the hidden file input
//     fileInputRef.current.click();
//   };
//   return (
//     <Box
//       sx={{
//         width: "700px",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <Box
//         className="button-dropzone"
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "16px",
//           margin: "auto",
//         }}
//       >
//         <Button
//           variant="contained"
//           sx={{
//             display: "flex",
//             padding: "20px",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "10px",
//             borderRadius: "27px",
//             background: "#4165AC",
//             ":hover": {
//               background: "#4165AC",
//             },
//           }}
//           {...getRootProps()}
//           onClick={handleBrowseClick}
//         >
//           <Typography
//             sx={{
//               color: "#FFFFFF",
//               textAlign: "center",
//               width: "290px",
//               fontFamily: "Inter",
//               fontSize: "36px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "36px",
//               letterSpacing: "-0.72px",
//             }}
//           >
//             Browse Files
//           </Typography>
//           <input
//             {...getInputProps()}
//             ref={fileInputRef}
//             style={{ display: "none" }} // Hide the file input
//           />
//         </Button>
//         <Typography
//           sx={{
//             color: "var(--Neutral-800, var(--Neutral-800, #C1C3C7))",
//             textAlign: "center",
//             fontFamily: "Inter",
//             fontSize: "16px",
//             fontStyle: "normal",
//             fontWeight: 500,
//             lineHeight: "24px",
//             letterSpacing: "-0.16px",
//             // cursor: "pointer",
//           }}
//         >
//           or drag & drop
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           width: "fit-content",
//           marginBottom: "20px",
//         }}
//       >
//         <Typography
//           variant="subtitle1"
//           sx={{
//             color: "var(--Gray-200, var(--Gray-200, #525D6A))",
//             fontFamily: "Inter",
//             fontSize: "14px",
//             fontStyle: "normal",
//             fontWeight: 500,
//             lineHeight: "0px",
//             letterSpacing: "-0.1px",
//             marginBottom: "20px",
//           }}
//         >
//           Note:
//         </Typography>
//         <ol
//           style={{
//             color: "var(--Gray-200, var(--Gray-200, #525D6A))",
//             fontFamily: "Inter",
//             fontSize: "14px",
//             fontStyle: "normal",
//             fontWeight: 500,
//             lineHeight: "0px",
//             letterSpacing: "-0.1px",
//             paddingLeft: "16px",
//           }}
//         >
//           {/* <Typography
//                 sx={{
//                   color: "var(--Gray-200, var(--Gray-200, #525D6A))",
//                   fontFamily: "Inter",
//                   fontSize: "14px",
//                   fontStyle: "normal",
//                   fontWeight: 500,
//                   lineHeight: "0px",
//                   letterSpacing: "-0.1px",
//                 }}
//               >
//                 Note:
//               </Typography> */}
//           <li>You can upload a simple document or multiple documents</li>
//           <li>dostGPT currently supports word document and PDF</li>
//           <li>Maximum limit of document size should not be more than 50mb</li>
//         </ol>
//       </Box>
//     </Box>
//   );
// };

// export default NewProject;
