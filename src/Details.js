import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Get params from URL
import axios from "./axios";
import "./Details.css";

const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your TMDB API key

function Details() {
  const { state } = useLocation();
  const { type, id } = state;
  const width = window.innerWidth
    console.log(width);
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const endpoint = type === "tv" ? `/tv/${id}` : `/movie/${id}`;
        const request = await axios.get(
          `${endpoint}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(request.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    // Update trailer URL based on type and id
    const newTrailerUrl =
      type === "tv"
        ? `https://vidsrc.cc/v2/embed/tv/${id}`
        : `https://vidsrc.cc/v2/embed/movie/${id}`;
    setTrailerUrl(newTrailerUrl);

    fetchMovieDetails();
  }, [id, type]); // 'trailerUrl' is not needed in the dependency array here
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "black"  }}>
      {movie ? (
        <div style={{padding: "20px",paddingTop:"40px"}}>
          <h1>{movie.title || movie.name}</h1>
          <p>{movie.overview}</p>

          {trailerUrl && (
            <iframe
              title="movie-trailer"
              width="100%"
              height={width<800?390:450}
              src={trailerUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      ) : (
        <div style={{padding: "20px",paddingTop:"40px"}}>
        <p>Loading...</p>
        </div>
      )}
    </div>

  );
}

export default Details;
