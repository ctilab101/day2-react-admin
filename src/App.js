import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import routes from "./routes";

const mdTheme = createTheme();

const App = () => {
  const content = useRoutes(routes());
  const location = useLocation();

  console.log(location);
  return <ThemeProvider theme={mdTheme}>{content}</ThemeProvider>;
};

export default App;
