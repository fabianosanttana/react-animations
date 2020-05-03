import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  rootElement
);
