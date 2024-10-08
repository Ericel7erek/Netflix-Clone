import React from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.css"; // Create some basic styles

const base_url = "https://image.tmdb.org/t/p/original/";

function SearchResults() {
  const location = useLocation();
  const { searchResults, searchTerm } = location.state || {
    searchResults: [],
    searchTerm: "",
  };

  return (
    <div className="search_results">
      <h2>Search Results for "{searchTerm}"</h2>
      <div className="search_results_list">
        {searchResults.length ? (
          searchResults.map((movie) => (
            <div key={movie.id} className="search_result_item">
              <img
                src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
                alt={movie.title || movie.name}
              />
              <h3>{movie.title || movie.name}</h3>
            </div>
          ))
        ) : (
          <p>No results found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
