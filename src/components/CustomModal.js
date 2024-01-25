import { Box } from "@mui/system";
import React from "react";

function CustomModal({ children, set_preview }) {
  return (
    <Box
      sx={{

        "-webkit-text-size-adjust": "100%",
        "-webkit-tap-highlight-color": "transparent",
        "box-sizing": "border-box",
        minHeight: "100vh",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        position: "fixed",
        "z-index": "9930000",
        zIndex: 9930000,
        display: "flex",
        outline: "0",
        "text-align": "center",
        padding: "0!important",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(0,0,0,0.4)",
        "backdrop-filter": "blur(10px)",
        "overflow-x": "hidden",
        "overflow-y": "auto!important",
        "&:hover": { cursor: "pointer" },
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: "\nbody{\n    overflow: hidden !important;\npadding-right: 15px !important;\n}\n",
        }}
      />
      <Box
        id="CustomModal"
        onMouseUp={(e) => {
          let pol = document.getElementById("CustomModal");
          if (e.target == pol) {
            console.log("onto the modal");
            set_preview(false);
          }
        }}
        py={4}
        sx={{
          zIndex: 123214,
          margin: "auto",
          width: 1,
          minHeight: 1,
          cursor: "not-allowed",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'center'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default CustomModal;
