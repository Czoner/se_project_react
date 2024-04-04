import React from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children, ...props }) {
  const navigate = useNavigate();

  return (
    <Route {...props}>{isLoggedIn ? children : <navigate to="/" />}</Route>
  );
}

export default ProtectedRoute;
