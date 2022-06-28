import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.js";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Dashboard />
      </Router>
    </ThemeProvider>
  );
}

export default App;
