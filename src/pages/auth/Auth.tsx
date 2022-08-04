import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Auth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    // Redirect to home if already loggedIn
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Auth;
