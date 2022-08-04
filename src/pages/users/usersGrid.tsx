import React from "react";
import NavBar from "../../components/navigation/NavBar";
import UserCard from "./UserCard";

type Props = {};

const UsersGrid = (props: Props) => {
  return (
    <div className="">
      <NavBar />
      <div className="row p-2">
        {"123456".split("").map((dt) => (
          <UserCard key={dt} />
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UsersGrid;
