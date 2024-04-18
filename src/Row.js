import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    const movieId = movie.id;
    let newTrailerUrl;

    if (isLargeRow) {
      newTrailerUrl = `https://vidsrc.to/embed/tv/${movieId}`;
    } else if (movie.media_type === "movie") {
      newTrailerUrl = `https://vidsrc.to/embed/movie/${movieId}`;
    } else if (movie.media_type === "tv") {
      newTrailerUrl = `https://vidsrc.to/embed/tv/${movieId}`;
    } else {
      newTrailerUrl = `https://vidsrc.to/embed/movie/${movieId}`;
    }

    setTrailerUrl(newTrailerUrl);
  }
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
    {trailerUrl && (
      <iframe
        title="movie-trailer"
        width="100%"
        height="390"
        src={trailerUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    )}
  </div>
);
    }
export default Row;
