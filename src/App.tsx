import React from "react";
import { Route, Routes } from "react-router-dom";
import { Protected } from "./components/navigation/Protected";
import NotFound from "./pages/404";
import Account from "./pages/account/Account";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import Userdetails from "./pages/users/UserDetails";
import UsersGrid from "./pages/users/usersGrid";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="users"
          element={
            <Protected>
              <UsersGrid />
            </Protected>
          }
        />
        <Route
          path="/users/:id"
          element={
            <Protected>
              <Userdetails />
            </Protected>
          }
        />
        <Route
          path="/account"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
