import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Top App
        </Link>
        {location.pathname !== "/auth" && (
          <button
            className="navbar-toggler position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggle(!toggle)}
          >
            <span className="navbar-toggler-icon"></span>
            <span className=" badge position-absolute top-0 start-100 translate-middle p-2 bg-danger rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>
        )}
        {location.pathname !== "/auth" && (
          <div
            className={`collapse navbar-collapse ${toggle && "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-md-flex flex-md-row justify-content-end align-items-md-center w-100">
              <div className="nav-item">
                <p className="text-secondary p-0 m-0">
                  Session <span className="badge bg-danger">5min</span>
                </p>
              </div>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/users"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/users/1"
                >
                  My Account
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
