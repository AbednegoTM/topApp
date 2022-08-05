import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserByIdQuery } from "../../app/services/users";
import { RootState } from "../../app/store";
import NavBar from "../../components/navigation/NavBar";
import { loggedOut } from "../auth/authSlice";
import { UserState } from "../users/userSlice";
import "./account.css";
import UserDetailsForm from "./UserDetailsForm";

const Account = () => {
  const {jobTitle} = useSelector((state: RootState)=>state.userData);
  const userId = localStorage.getItem("userId") || "1";
  const { data: user, isSuccess } = useGetUserByIdQuery(userId);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loggedOut());
    navigate("/auth");
  };
  return (
    <div>
      <div className="main-content">
        <NavBar />
        <div className="container-fluid mt--7  ">
          <div className="row">
            {/* profile card */}
            <div className="col-xl-4 order-xl-1 mb-5 mb-xl-0">
              <div className="card shadow p-md-5 p-3 placeholder-glow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2 d-flex flex-column">
                    <div className="card-profile-image">
                      <img
                        src={`${user?.data.avatar}`}
                        className="rounded-circle w-100"
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-3 pt-md-4">
                  <div className="text-center">
                    <h3 className="text-uppercase fs-5">{`${user?.data.first_name} ${user?.data.last_name}`}</h3>
                    <div className=" font-weight-300">{user?.data.email}</div>
                    <div className="h5 mt-4">
                      {user?.data.jobTitle || jobTitle as string}
                    </div>
                    <div>
                      <button
                        className="btn btn-primary rounded-5 my-3 px-3"
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
                  {user && <UserDetailsForm user={user} id={userId} />}
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
