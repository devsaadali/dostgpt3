import { getRadioUtilityClass } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#ff5782",
      main: "rgb(234, 36, 86)",
      dark: "#bb1d45",
    },
    secondary: {
      light: "#6ab9e5",
      main: "rgb(70, 123, 152)",
      dark: "#345c72",
    },
    success: {
      light: "#6ab9e5",
      main: "rgb(0, 199, 255)",
      dark: "#345c72",
    },
    customBox: {
      default: "#f7f7f7",
      themeAdaptive: "#202020",
    },

    action: {
      hover: "rgba(234, 36, 86,0.05)",
    },

    blackAndWhite: "#000000",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "gray_button" },
          style: {
            minHeight: "60px",
            minWidth: "150px",

            margin: "0px",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "1.5",
            letterSpacing: "0.00938em",
            color: "gray",
            borderRadius: 0,
          },
        },
      ],

      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 12,
          minHeight: "50px",
          minWidth: "100px",
          fontSize: "18px",
          fontWeight: 500,
          ...(ownerState.variant === "contained" && {
            boxShadow: "none",
            transition: "0.1s ",
            textTransform: "none",
            "&:hover": { boxShadow: "none" },
          }),
        }),
      },
    },
  },

  typography: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: "20px",

    button: {
      textTransform: "none",
      color: "black",
      fontWeight: "bold",
    },
  },
});

theme = responsiveFontSizes(theme);
theme.typography.h1 = {
  fontSize: "40px",
  fontWeight: 800,
  textAlign: "center",
};
theme.typography.h2 = {
  fontSize: "30px",
  fontWeight: 800,
  textAlign: "center",
  wordSpacing: "2px",
  letterSpacing: "1px",
};

theme.typography.h3 = {
  fontSize: "20px",
  fontWeight: "bold",
  lineHeight: "25px",
};

theme.typography.subtitle1 = {
  fontSize: "14px",
  fontWeight: 300,
  lineHeight: "25px",

  color: "#424242",
};

theme.typography.subtitle2 = {
  margin: "0px",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  color: "gray",
};

theme.typography.subtitle2x = {
  margin: "0px",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
};
