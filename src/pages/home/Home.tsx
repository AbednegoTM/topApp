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
    <div>
      <NavBar />
      <div className="container">
        <h1>Welcome back, Abednego</h1>
        <h2>Your Location : {currentLocation}</h2>
      </div>
    </div>
  );
};

export default Home;
