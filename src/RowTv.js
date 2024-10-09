import React, { useState, useEffect } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); // Add this to use navigation

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    // Navigate to the Details screen with parameters
    navigate(`/Details/${movie.id}`, {
      state: {
        id: movie.id,
        type: "tv",
      },
    });
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "";
              e.target.style.display = "none";
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
