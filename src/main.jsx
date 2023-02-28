import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Comment } from "./components/Comment";
import { CommentModal } from "./components/CommentModal";
import { AuthProvider } from "./hooks/auth";
import { Home } from "./pages/Home";
import { MyFeeds } from "./pages/Myfeeds";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Routes } from "./routes";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
  // {/* </React.StrictMode> */}
);
