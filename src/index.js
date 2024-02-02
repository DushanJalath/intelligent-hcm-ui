import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RunSideBar from "./mainApp";
import "../src/styles/Sidebar.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <RunSideBar />
    </StrictMode>
  </BrowserRouter>
);