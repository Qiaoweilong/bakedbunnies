import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App";
import ThemeProvider from "./Theme";
import { AuthProvider } from "./providers/AuthProvider";
import { ContractProvider } from "./providers/ContractProvider";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider>
      <AuthProvider>
        <ContractProvider>
          <App />
        </ContractProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
