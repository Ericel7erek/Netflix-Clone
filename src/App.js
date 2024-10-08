import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Details from "./Details"; // Import Details component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import SearchResults from "./SearchResults";

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "black", color: "white" }}>
        <Nav />

        {/* Define routes */}
        <Routes>
          {/* Main page with movie rows */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Row
                  title="Netflix Originals"
                  fetchUrl={requests.fetchNetflixOriginals}
                  isLargeRow
                />
                <Row title="Trending" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <Row
                  title="Comedy Movies"
                  fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                  title="Horror Movies"
                  fetchUrl={requests.fetchHorrorMovies}
                />
                <Row
                  title="Romance Movies"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                  title="Documentaries"
                  fetchUrl={requests.fetchDocumentaries}
                />
              </>
            }
          />
          {/* Movie details route */}
          <Route path="/details/:movieId" element={<Details />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
