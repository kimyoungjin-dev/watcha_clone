import { useReactiveVar } from "@apollo/client";
import { darkVar } from "./apollo";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles, darkTheme } from "../Styles/styles";

export default function App() {
  const darkMode = useReactiveVar(darkVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
