import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // Get params from URL
import axios from "./axios";
import "./Details.css";

const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your TMDB API key

function Details() {
  const { movieId } = useParams(); // Extract movieId from URL params
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const location = useLocation();
  const { isLargeRow, movie: initialMovie } = location.state || {};

  useEffect(() => {
    async function fetchMovieDetails() {
      // You can modify this request depending on whether the movieId is for a movie or TV show
      try {
        if (isLargeRow) {
          const request = await axios.get(
            `/tv/${movieId}?api_key=${API_KEY}&language=en-US`
          );
          setMovie(request.data);
        } else {
          const request = await axios.get(
            `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
          );
          setMovie(request.data);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let newTrailerUrl;

      if (isLargeRow) {
        newTrailerUrl = `https://vidsrc.cc/v2/embed/tv/${movieId}`;
      } else {
        newTrailerUrl = `https://vidsrc.cc/v2/embed/movie/${movieId}`;
      }

      setTrailerUrl(newTrailerUrl);
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "black" }}>
      {movie ? (
        <div style={{ padding: "20px" }}>
          <h1>{movie.title || movie.name}</h1>
          <p>{movie.overview}</p>

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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
