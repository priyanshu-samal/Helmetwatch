import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from "./App.jsx";
import "./index.css";
import SignIn from "./components/sign/SignIn.jsx";
import Auth from "./components/sign/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
         <Route path="/" element={<App />} />
         <Route path="/auth" element={<Auth />} />
         {/* <Route path="*" element={<Navigate to="/auth" />} /> */}
  </Routes>
  </BrowserRouter>
);
