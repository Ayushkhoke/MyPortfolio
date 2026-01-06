// import { StrictMode } from 'react'
// import React from "react"; 
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { BrowserRouter } from "react-router-dom";
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//   <StrictMode>
//     <App />
//   </StrictMode>,
//     </BrowserRouter>
// )


import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* ✅ TOASTER MUST BE HERE */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#020617",
            color: "#fff",
            border: "1px solid #10b981",
          },
        }}
      />
      <App />
    </BrowserRouter>
  </StrictMode>
);
