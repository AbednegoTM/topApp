import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";
import { loggedOut } from "../auth/authSlice";
import "./account.css";

type Props = {};

interface IAccountFormInput {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
}
const Account = (props: Props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccountFormInput>();
  const logout = () => {
    dispatch(loggedOut());
    navigate("/auth");
  };

  const onSubmit = (data: IAccountFormInput) => {
    console.log({ data });
  };
  return (
    <div>
      <div className="main-content">
        <NavBar />
        <div className="container-fluid mt--7">
          <div className="row">
            {/* profile card */}
            <div className="col-xl-4 order-xl-1 mb-5 mb-xl-0">
              <div className="card shadow p-md-5 p-3">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2 d-flex flex-column">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          className="rounded-circle w-100"
                          alt="profile"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-3 pt-md-4">
                  <div className="text-center">
                    <h3 className="text-uppercase fs-5">Jessica Jones</h3>
                    <div className=" font-weight-300">Jess@gmail.com</div>
                    <div className="h5 mt-4">Solution Manager</div>
                    <div>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Account card */}
            <div className="col-xl-8 order-xl-2">
              <div className="card shadow p-md-5 py-3">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {/* form */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6  mb-3">
                          <div className="form-group focused">
                            <label className="form-label" htmlFor="username">
                              Username
                            </label>
                            <input
                              {...register("username", {
                                // required: true,
                              })}
                              type="text"
                              id="username"
                              name="username"
                              className="form-control"
                              placeholder="lucky.jesse"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6  mb-3">
                          <div className="form-group focused">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              {...register("email", {
                                pattern:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              })}
                              placeholder="ada@lovelace.co"
                              type="email"
                              name="email"
                              className="form-control"
                              id="email"
                            />
                            {errors.email?.type === "pattern" && (
                              <p className="text-danger m-0">Email not valid</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group focused">
                            <label className="form-label" htmlFor="first-name">
                              First name
                            </label>
                            <input
                              {...register("firstName", {
                                // required: true,
                              })}
                              type="text"
                              id="first-name"
                              className="form-control"
                              placeholder="Lucky"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6  mb-3">
                          <div className="form-group focused">
                            <label className="form-label" htmlFor="last-name">
                              Last name
                            </label>
                            <input
                              {...register("lastName", {
                                // required: true,
                              })}
                              type="text"
                              id="last-name"
                              className="form-control form-control-alternative"
                              placeholder="Jesse"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6  mb-3">
                          <div className="form-group focused">
                            <label className="form-label" htmlFor="job-title">
                              Job title
                            </label>
                            <input
                              {...register("jobTitle", {
                                // required: true,
                              })}
                              type="text"
                              id="job-title"
                              className="form-control form-control-alternative"
                              placeholder="Engineer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <div className="col-4 text-right">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
