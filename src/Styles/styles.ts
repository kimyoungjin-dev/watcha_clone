import { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  bgColor: "#FAFAFA",
  fontColor: "rgb(38,38,38)",
  silverColor: "silver",
  LogoColor: "rgb(195,9,73)",
};

export const darkTheme: DefaultTheme = {
  bgColor: "rgb(38,38,38)",
  fontColor: "#FAFAFA",
  silverColor: "silver",
  LogoColor: "rgb(195,9,73)",
};

export const GlobalStyles = createGlobalStyle`

${reset};

*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}

a{
    text-decoration:none;
    color:inherit;
}

body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:${(props) => props.theme.fontColor};
    background-color:${(props) => props.theme.bgColor}
}

input{
    all:unset;
}

`;
