import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";
import { useLocation, useNavigate } from "react-router-dom";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const route = useLocation()
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
        <button className="banner_button"
        onClick={()=>{
                    route.pathname === "/Movies"
                      ? navigate(`/Details/${movie.id}`, {
                          state: {
                            id: movie.id,
                            type: "movie",
                          },
                        })
                      : navigate(`/Details/${movie.id}`, {
                          state: {
                            id: movie.id,
                            type: "tv",
                          },
                        });
        }}
        >
          Play
        </button>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
