import React from "react";
import NavBar from "../../components/navigation/NavBar";

type Props = {};

const UserCard = (props: Props) => {
  return (
    <div className="col-xl-3 col-sm-6 mb-5 text-center">
      <div className="bg-white rounded shadow-sm py-5 px-4">
        <img
          src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
          alt=""
          width="100"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0">Manuella Nevoresky</h5>
        <span className="small text-uppercase text-muted">CEO - Founder</span>
      </div>
    </div>
  );
};

export default UserCard;
