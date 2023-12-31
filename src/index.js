import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.css";
import { QuizeProvider } from "./context/QuizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizeProvider>
      <App />
    </QuizeProvider>
  </React.StrictMode>
);
