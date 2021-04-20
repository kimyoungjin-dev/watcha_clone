import { useReactiveVar } from "@apollo/client";
import { darkVar } from "./apollo";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles } from "../Styles/styles";

export default function App() {
  const darkMode = useReactiveVar(darkVar);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
