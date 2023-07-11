import { createGlobalStyle } from "styled-components";

const GlobaleStyles = createGlobalStyle`
root{flex:1}
html {font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;}

  body{margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;}

`;
export default GlobaleStyles;
