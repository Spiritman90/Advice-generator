import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Advise from "./Advise";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Advise />
    </ApiProvider>
  </React.StrictMode>
);
