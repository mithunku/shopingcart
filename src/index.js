import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import Context from "./context/Context";

createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
