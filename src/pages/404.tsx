import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div style={{height:'100vh'}} className="d-flex flex-column justify-content-center align-items-center">
      <h1> 404: page not found</h1>
      <Link to={"/"}>
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
