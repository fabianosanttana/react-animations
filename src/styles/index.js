import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    font: 13px 'Lato', sans-serif;
    background: rgb(24, 26, 27);
    color: #fff;
    -webkit-font-smoothing: antialiased !important;
  }
`;
