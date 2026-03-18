"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d4d4f",
      dark: "#123739",
      light: "#4b7a7b",
    },
    secondary: {
      main: "#f09b55",
      light: "#f5ba85",
      dark: "#c7772d",
    },
    background: {
      default: "#f7f3ec",
      paper: "#fffdf9",
    },
    text: {
      primary: "#152023",
      secondary: "#5c676b",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: '"Segoe UI", "Noto Sans KR", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 24px 48px rgba(21, 32, 35, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

export default function ThemeRegistry({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
