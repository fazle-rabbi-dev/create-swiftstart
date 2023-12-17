import React from "react"
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryProvider } from "@/lib/react-query/QueryProvider";

import "./styles/global-style.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryProvider>
      <Router>
        <App />
      </Router>
    </QueryProvider>
  </React.StrictMode>
);
