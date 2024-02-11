import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { axios_get_call, axios_chat_call } from "./AxiosCall";
import PDFViewer from "pdf-viewer-reactjs";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
// import axios from "./axios";
// import { useCallback } from "react";

const ProjectView = () => {
  const [pdfData, setPdfData] = useState(null);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [pdfID, setPdfID] = useState(location.state.pdfID);
  // const pdfUrl = `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`;
  const [question, setQuestion] = useState("");
  const [chatResponse, setChatResponse] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // let page = 1;

  function nextPage() {
    if (page < totalPages) {
      page = page + 1;
    }
  }
  function previousPage() {
    if (page > 0) {
      page = page - 1;
    }
  }

  const handleLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
  };

  const get_pdf = async () => {
    let url = "/get-pdf/";
    try {
      const response = await axios_get_call(url, pdfID, setLoading, setAlert);

      if (response.status === 200) {
        console.log("File RETRIEVED successfully", response);
        setPdfData(response);
      } else {
        console.error("File RETRIEVAL failed");
      }
    } catch (error) {
      console.error("Error RETRIEVING file", error);
    }
    // console.log("CALLING SEND_MESSAGE");
    // send_message();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send_message();
  };

  const send_message = async () => {
    let url = "/send-message/";
    console.log("In SEND_MESSAGE FUNCTION");

    if (question !== "") {
      try {
        const response = await axios_chat_call(
          url,
          pdfID,
          question,
          setLoading,
          setAlert
        );

        if (response.status === 200) {
          setChatResponse(response.data);
          console.log("RESPONSE VALUE IS: ", response);
          // console.log("CHATRESPONSE VALUE IS: ", chatResponse);
        } else {
          console.error("Chat send failed");
        }
      } catch (error) {
        console.error("Error sending chat", error);
      }
    }
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexGrow: 1,
        background: "#FFF",
        minHeight: "88vh",
        justifyContent: "center",
      }}
    >
      <Box
        className="project-view-main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          maxHeight: "88vh",
        }}
      >
        <Box
          className="chat-section"
          sx={{
            width: "50%",
            height: "100%",
            // border: "2px solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            // alignItems: "center",
            // paddingX: "20px",
            // paddingY: "10px",
            // overflow: "auto",
          }}
        >
          <Box
            sx={{
              overflow: "scroll",
              height: "100%",
              // border: "1px solid black",
              marginX: "10px",
            }}
          >
            {chatResponse && (
              <Box
                sx={
                  {
                    // border: "2px solid orange",
                    // padding: "5px",
                    // overflow: "auto",
                    // background: "blue",
                  }
                }
              >
                <Typography
                  sx={{
                    background: "rgb(83, 135, 140)",
                    color: "white",
                    paddingX: "20px",
                    paddingY: "10px",
                    // marginTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <strong style={{ color: "white" }}>You:</strong>
                  {"   "}
                  {chatResponse.question}
                </Typography>
                <Typography
                  sx={{
                    background: "rgb(71, 80, 99)",
                    color: "white",
                    paddingX: "20px",
                    paddingY: "10px",
                    marginY: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <strong style={{ color: "white" }}>Response:</strong>
                  {"   "}
                  {chatResponse.answer}
                </Typography>
              </Box>
            )}

            {/* {chatResponse && (
            <Box>
              <p>
                <strong>You:</strong> {question}
              </p>
              <p>
                <strong>Response:</strong> {chatResponse}
              </p>
            </Box>
          )} */}
          </Box>
          <Box
            className="input-section"
            sx={{
              // margin: "20px",
              // border: "10px soild green",
              // padding: "10px",
              // backgroundColor: "yellow",
              // display: "flex",
              // flexDirection: "row",
              // alignItems: "center",
              // justifyContent: "space-between",
              // height: "45px",
              marginX: "10px",
            }}
          >
            <label>Ask a question about your document</label>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: "45px",
                // marginX: "5px",
                marginBottom: "2px",
              }}
            >
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter Text"
                style={{
                  width: "95%",
                  height: "100%",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                  border: "none",
                }}
              />
              <Button
                sx={{
                  // border: "1px solid",
                  height: "100%",
                  width: "5%",
                  padding: "0px",
                  minWidth: "10%",
                  minHeight: "100%",
                  // color: "gray",
                }}
                onClick={send_message}
              >
                <SendIcon sx={{ margin: "0px", color: "gray" }} />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          className="document-view"
          sx={{
            width: "50%",
            height: "100%",
            borderLeft: "2px dotted rgb(188, 188, 188)",
            overflow: "auto",
          }}
        >
          {/* {pdfData && ( */}
          {/* <PDFViewer
            hideZoom
            hideNavbar
            hideRotation
            // page={page}
            // onNextBtnClick={nextPage}
            onLoadSuccess={handleLoadSuccess}
            document={{
              url: `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`,
            }}
            scale={0.9}
          /> */}
          {/* )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectView;

// import React, { useState, useEffect } from "react";
// import { Box } from "@mui/material";
// import { axios_get_call, axios_chat_call } from "./AxiosCall";
// import PDFViewer from "pdf-viewer-reactjs";
// import { useLocation } from "react-router-dom";
// // import axios from "./axios";

// const ProjectView = () => {
//   const [pdfData, setPdfData] = useState(null);
//   const [alert, setAlert] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const [pdfID, setPdfID] = useState(location.state.pdfID);
//   const [pdfFile, setPdfFile] = useState(location.state.pdfFile);
//   // const pdfUrl = `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`;
//   const [chatResponse, setChatResponse] = useState(null);

//   const get_pdf = async () => {
//     let url = "/get-pdf/";
//     try {
//       const response = await axios_get_call(url, pdfID, setLoading, setAlert);

//       if (response.status === 200) {
//         console.log("File RETRIEVED successfully", response);
//         setPdfData(response);
//       } else {
//         console.error("File RETRIEVAL failed");
//       }
//     } catch (error) {
//       console.error("Error RETRIEVING file", error);
//     }
//     console.log("CALLING SEND_MESSAGE");
//     send_message();
//   };

//   const send_message = async () => {
//     let url = "/send-message/";
//     const user_question = "What is this document about?";
//     console.log("In SEND_MESSAGE FUNCTION");

//     try {
//       const response = await axios_chat_call(
//         url,
//         pdfID,
//         user_question,
//         setLoading,
//         setAlert
//       );

//       if (response.status === 201) {
//         console.log("Chat sent successfully");
//         setChatResponse(response);
//         // response.data.id = response.data.id;
//         // console.log(
//         //   "This is the ID of the uploaded file: ",
//         //   response.data.pdf_data["file"]
//         // );
//         // setUploadedFile(response.data);
//         // setpdfID(response.data.pdf_data["id"]);
//         // navigate("/project-view", {
//         //   state: {
//         //     pdfID: response.data.pdf_data["id"],
//         //     // pdfName: response.data.pdf_data["file"],
//         //   },
//         // });
//         // <Alert severity="error">File uploaded successfully.</Alert>;
//       } else {
//         console.error("Chat send failed");
//         // <Alert severity="error">File upload failed.</Alert>;
//       }
//     } catch (error) {
//       console.error("Error sending chat", error);
//     }
//   };

//   useEffect(() => {
//     get_pdf();
//   }, []);

//   return (
//     <Box
//       component="main"
//       sx={{
//         display: "flex",
//         flexGrow: 1,
//         background: "#FFF",
//         minHeight: "88vh",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         className="project-view-main"
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100%",
//           width: "100%",
//         }}
//       >
//         <Box
//           className="chat-section"
//           sx={{ width: "50%", height: "100%", border: "2px solid red" }}
//         ></Box>
//         <Box
//           className="document-view"
//           sx={{ width: "50%", height: "100%", border: "2px solid blue" }}
//         >
//           {pdfData && (
//             <PDFViewer
//               document={{
//                 url: `${process.env.REACT_APP_BACKEND_URL}/get-pdf/${pdfID}/`,
//               }}
//             />
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectView;
