import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import axios from "./axios"; // Import axios to make API requests

function Nav() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch search results when searchTerm changes
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.trim()) {
        try {
          const response = await axios.get(`/search/movie`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
              query: searchTerm,
              include_adult: false, // Keep this false if you want to exclude adult content
              language: "en-US",
              page: 1,
            },
          });
          setSearchResults(response.data.results);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setSearchResults([]); // Clear results if search is cleared
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 500); // Add slight delay to avoid multiple rapid API calls

    return () => clearTimeout(delayDebounceFn); // Clear timeout on component unmount or term change
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate("/search", { state: { searchResults, searchTerm } });
    }
    setSearchTerm("");
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
        onClick={() => navigate("/")}
      />

      {/* Search Input */}
      {/* <form className="nav_search" onSubmit={handleSearch}> */}
      <div className="nav_search">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button type="submit">Search</button>
      </form> */}
      </div>
      {/* Display search results as user types */}
      {searchResults.length > 0 && (
        <div className="search_suggestions">
          <ul>
            {searchResults.slice(0, 5).map((result) => (
              <li
                key={result.id}
                onClick={() => {
                  navigate(`/details/${result.id}`);
                  setSearchTerm("");
                }}
              >
                {result.title || result.name} {/* Movie/Show name */}
              </li>
            ))}
          </ul>
        </div>
      )}

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix User"
      />
    </div>
  );
}

export default Nav;
