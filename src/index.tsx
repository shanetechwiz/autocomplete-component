import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AutoComplete } from "./components/AutoComplete/AutoComplete";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AutoComplete />
  </React.StrictMode>
);
