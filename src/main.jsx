import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Comment } from "./components/Comment";
import { CommentModal } from "./components/CommentModal";
import { Home } from "./pages/Home";
import { MyFeeds } from "./pages/Myfeeds";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Comment />
    </ThemeProvider>
  </React.StrictMode>
);
