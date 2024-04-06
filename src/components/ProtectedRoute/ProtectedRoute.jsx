import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
