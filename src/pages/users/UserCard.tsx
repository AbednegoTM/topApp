import React from "react";
import { Link } from "react-router-dom";
import { UserData } from "../../app/services/users";
import NavBar from "../../components/navigation/NavBar";

type Props = {
  user: UserData;
};

const UserCard = ({ user }: Props) => {
  return (
    <Link
      className="col-xl-3 col-sm-6 mb-5 text-center text-decoration-none "
      to={`${user.id}`}
    >
      <div>
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src={user.avatar}
            alt=""
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0 text-black">{`${user.first_name} ${user.last_name}`}</h5>
          <span className="small text-uppercase text-muted">{user.email}</span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
