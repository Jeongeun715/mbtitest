import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />; // 비로그인 상태라면 로그인 페이지로 리디렉션
  }
  return <Outlet />; // 로그인 상태라면 하위 컴포넌트를 렌더링
};

export default ProtectedRoute;
