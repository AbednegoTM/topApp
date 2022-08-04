import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Protected = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    // user is not authenticated
    return <Navigate to="auth/login" state={{ from: location }} replace />;
  }
  return children;
};
