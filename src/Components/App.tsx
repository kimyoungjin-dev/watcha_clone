import { useReactiveVar } from "@apollo/client";
import React from "react";
import { darkVar } from "./apollo";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../Styles/theme";

export default function App() {
  const darkMode = useReactiveVar(darkVar);

  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  );
}
