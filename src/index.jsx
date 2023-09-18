import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

import App from "./app/App";
import initI18n from "./utils/i18n";

initI18n();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
