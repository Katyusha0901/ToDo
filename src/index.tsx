import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Task/AddTask.css";
import "./Task/DeleteAllTask.css";
import "./Task/TaskChangeAndDelete.css";
import './Task/TaskList.css'
import "./App.css";
import "./fonts.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
