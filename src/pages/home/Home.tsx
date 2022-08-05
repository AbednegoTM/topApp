import React, { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState<string>("");

  useEffect(() => {
    fetch("https://api.ipregistry.co/?key=ssrw5onubahrprij")
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        const current = payload.location.country.name;
        setCurrentLocation(current);
      });
  }, []);

  return (
    <div className="bg-light h-100">
      <NavBar />
      <div className="container">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Welcome</h1>
            <p className="lead fw-normal">
              You are currently in : <strong>{currentLocation}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
