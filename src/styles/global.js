import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #121212;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 16px "Play", sans-serif;
  }
  body html #root {
    height: 100%;
  }
  button {
    cursor: pointer;
  }
`;
