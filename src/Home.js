import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Home</p>
      <div className="home__options">
        <Link to="/Movies" className="home__optionCard">
          Movies
        </Link>
        <Link to="/TvShows" className="home__optionCard">
          TV Shows
        </Link>
      </div>
    </div>
  );
};

export default Home;
