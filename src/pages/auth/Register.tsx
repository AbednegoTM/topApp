import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/services/auth";
import NavBar from "../../components/navigation/NavBar";
import { setCredentials } from "./authSlice";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AuthLayout from "./AuthLayout";

interface IFormInput {
  email: string;
  password: string;
}
interface LocationState {
  state: { from: { pathname: string } };
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  let navigate = useNavigate();
  let location = useLocation() as LocationState;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = async (data: IFormInput) => {
    console.log({ data });
    try {
      const res = await login(data).unwrap();
      dispatch(
        setCredentials({
          ...res,
          user: { first_name: "abed", last_name: "mwanza" },
        })
      );
      // Navigate to the right location or to the saved location
      let from = location.state?.from?.pathname || "/";
      localStorage.setItem("token", res.token);
      navigate(from, { replace: true });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <AuthLayout>
      <div className="w-100">
        <h4 className="fw-bold">Welcome to TopApp</h4>
        <p>Register Account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            placeholder="ada@lovelace.co"
            type="email"
            name="email"
            className="form-control"
            id="email"
          />
          {errors.email?.type === "pattern" && (
            <p className="text-danger"> Email not valid</p>
          )}
          {errors.email?.type === "required" && (
            <p className="text-danger"> Email is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              {...register("password", {
                required: true,
                min: 8,
                pattern:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
              })}
              name="password"
              type={showPassword ? "text" : "password"}
              className="form-control border-end-0"
              id="password"
            />
            <span
              className="input-group-text bg-white border-start-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                color="#6D757D"
                size="lg"
              />
            </span>
          </div>
          {errors.password?.type === "pattern" && (
            <div className="text-danger">
              <p className="m-0 p-0"> Your password must be have at least:</p>
              <ul>
                <li> 8 characters long</li>
                <li> 1 uppercase & 1 lowercase character</li>
                <li> 1 number</li>
              </ul>
            </div>
          )}
          {errors.password?.type === "required" && (
            <p className="text-danger"> Password is required</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary rounded-5 my-3 px-3">
          Submit
        </button>
      </form>
      <div className="d-flex flex-row fs-sm align-items-center my-3">
        <p className="m-0 px-2">Already have an account?</p>
        <Link to="/auth/login" className="text-decoration-none">
          <p className="text-secondary fs-sm  text-uppercase m-0 ">Login</p>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
