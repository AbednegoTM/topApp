import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";
import Login from "./Login";
import Register from "./Register";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const [formType, setFormType] = useState<"login" | "register">("login");
  const switchForm = () => {
    setFormType((prev) => {
      if (prev === "login") {
        return "register";
      }
      return "login";
    });
  };
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100%",
          height: "90vh",
        }}
        className="d-flex flex-row align-items-center .bg-primary.bg-gradient justify-content-center"
      >
        {/* Auth card */}
        <div className="row auth-card bg-white rounded shadow-lg">
          {/* left */}
          <div className="col d-none d-md-flex flex-row align-items-center justify-content-center bg-success rounded-start">
            <p className="text-white">Top App</p>
          </div>
          {/* right */}
          <div className="col p-0">
            <div className="bg-success auth-display-image d-block d-md-none"></div>
            <div className="d-flex flex-column align-items-center p-2">
              <div className="py-3 fm-md-w">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
