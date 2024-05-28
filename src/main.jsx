import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Contexts from "./utils/Contexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Contexts>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Contexts>
);
