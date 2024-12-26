import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import GlobalStyles from "./style/GlobalStyles.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>
);
