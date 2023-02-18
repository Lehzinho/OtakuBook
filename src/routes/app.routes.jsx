import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { MyFeeds } from "../pages/Myfeeds";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myfeeds" element={<MyFeeds />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
