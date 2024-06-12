'use client'

/* Importaciones MUI */
import createTheme from "@mui/material/styles/createTheme"

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    priceButton: true;
  }
}

export const mainTheme = createTheme({
  palette: {

  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: "bold",
          // computadoras
          "@media (max-width:2048px)": {
            fontSize: "90px",
          },
          // computadoras
          "@media (max-width:1920px)": {
            fontSize: "75px",
          },
          // tablets
          "@media (max-width:800px)": {
            fontSize: "60px",
          },
          // móviles
          "@media (max-width:500px)": {
            fontSize: "41px",
          },
        },
        h2: {
          fontWeight: "bold",
          // computadoras
          "@media (max-width:2048px)": {
            fontSize: "90px",
          },
          // computadoras
          "@media (max-width:1920px)": {
            fontSize: "48px",
          },
          // tablets
          "@media (max-width:800px)": {
            fontSize: "46px",
          },
          // móviles
          "@media (max-width:500px)": {
            fontSize: "36px",
          },
        },
        h3: {
          // computadoras
          "@media (max-width:2048px)": {
            fontSize: "90px",
          },
          // computadoras
          "@media (max-width:1920px)": {
            fontSize: "37px",
          },
          // tablets
          "@media (max-width:800px)": {
            fontSize: "35px",
          },
          // móviles
          "@media (max-width:500px)": {
            fontSize: "25px",
          },
        },
        h4: {
          // computadoras
          "@media (max-width:2048px)": {
            fontSize: "90px",
          },
          // computadoras
          "@media (max-width:1920px)": {
            fontSize: "32px",
          },
          // tablets
          "@media (max-width:800px)": {
            fontSize: "30px",
          },
          // móviles
          "@media (max-width:500px)": {
            fontSize: "20px",
          },
        },
        h6: {
          // computadoras
          "@media (max-width:2048px)": {
            fontSize: "90px",
          },
          // computadoras
          "@media (max-width:1920px)": {
            fontSize: "18px",
          },
          // tablets
          "@media (max-width:800px)": {
            fontSize: "20px",
          },
          // móviles
          "@media (max-width:500px)": {
            fontSize: "20px",
          },
        }
      }
    },

    MuiButton: {
      variants: [
        {
          props: { variant: "priceButton" },
          style: {
            textTransform: 'none',
            backgroundColor: "#009045",
            color: "#FFFFFF",
            fontWeight: "bold",
            letterSpacing: 1,
            borderRadius: "0px 16px 0px 16px",
            "&:hover": {
              backgroundColor: "#00D666",
              color: "#FFF",
            },
            // computadoras
            "@media (max-width:2560px)": {
              fontSize: "1.3rem",
            },
            // computadoras
            "@media (max-width:1920px)": {
              fontSize: "20px",
            },
            // tablets
            "@media (max-width:800px)": {
              fontSize: "20px",
            },
            // móviles
            "@media (max-width:500px)": {
              fontSize: "20px",
            },
          }
        }
      ],
      styleOverrides: {
        contained: {
          color: "#FFF",
          alignContent: "center",
        }
      }
    },
  }
})