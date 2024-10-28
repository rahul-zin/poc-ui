import { createTheme } from "@mui/material";

const globalTheme = {
  typography: {
    fontFamily: "Poppins"
  },
  palette: {
    primary: {
      main: "#59AA47"
    },
    secondary: {
      main: "#FFFFFF"
    },
  },
}

export const theme = createTheme(globalTheme, {
  components: {
    MuiButton: {
      // Below is just an example of adding new variants ideally we should just modify styles on existing for e.g outlined, contained variant and use color for primary, secondary colors
      variants: [
        {
          props: { variant: 'primary' }, // Define the custom variant name
          style: {
            backgroundColor: globalTheme.palette.primary.main,
            color: "#FFFFFF",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: 500,
            padding: "6px 12px",
            textTransform: "none"
          },
        },
        {
          props: { variant: 'secondary' }, // Define another custom variant
          style: {
            backgroundColor: globalTheme.palette.secondary.main,
            border: "1px solid #161A17",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: 500,
            padding: "6px 12px",
            textTransform: "none"
          },
        },
        {
          props: { variant: 'tertiary' }, // Define another custom variant
          style: {
            backgroundColor: "transparent",
            padding: "6px 12px",
            textTransform: "none"
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.12)"
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "64px",
          boxShadow: "none"
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "32px",
          height: "32px",
          fontSize: "1rem",
          backgroundColor: "#5B46B4"
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "14px",
          fontWeight: "500"
        },
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#2D312E",
          minWidth: '32px', // Change the minimum width of the icon container
          '& svg': {
            fontSize: '20px', // Change the size of the icon itself
          },
        }
      }
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          '&:hover': {
            backgroundColor: "#DEEEDA"
          }
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "8px"
        }
      }
    }
  },
});
