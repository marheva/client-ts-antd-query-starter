import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box
  }
  html {
    height:100%;
    display: block;
  }
  body {
    height:100%;
  }
   #root {
    width: 100%;
    height: 100%;
  }
  .App {
    width: 100%;
    height: 100%;
  }

  .ant-layout {
    height: 100%;
    border: 1px solid red;
  } 
`;

export default GlobalStyles;
