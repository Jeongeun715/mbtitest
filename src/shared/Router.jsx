import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import { useState } from "react";

const Router = () => {
  const [user, setUser] = useState(null); // 로그인 상태 관리

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          {/* 로그인 상태에 따라 보호된 경로 접근 */}
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/testResultPage" element={<TestResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
