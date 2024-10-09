import React, { useEffect } from "react";
import RowMovies from "./RowMovies";
import RowTv from "./RowTv";
import { MovieRequests, TvRequests } from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Details from "./Details"; // Import Details component
import Home from "./Home"; // Import Home component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
// import SearchResults from "./SearchResults";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.stop();
    }, 10000);
  }, []);
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "black", color: "white" }}>
        <Nav />

        {/* Define routes */}
        <Routes>
          {/* Main page with movie rows */}
          <Route path="/" element={<Home />} />
          <Route
            path="/Movies"
            element={
              <>
                <Banner fetchUrl={MovieRequests.fetchTopRatedMovies} />
                <RowMovies
                  title="Trending"
                  fetchUrl={MovieRequests.fetchTrending}
                  isLargeRow
                />
                <RowMovies
                  title="Top Rated"
                  fetchUrl={MovieRequests.fetchTopRatedMovies}
                />
                <RowMovies
                  title="Action Movies"
                  fetchUrl={MovieRequests.fetchActionMovies}
                />
                <RowMovies
                  title="Comedy Movies"
                  fetchUrl={MovieRequests.fetchComedyMovies}
                />
                <RowMovies
                  title="Horror Movies"
                  fetchUrl={MovieRequests.fetchHorrorMovies}
                />
                <RowMovies
                  title="Romance Movies"
                  fetchUrl={MovieRequests.fetchRomanceMovies}
                />
                <RowMovies
                  title="Documentaries"
                  fetchUrl={MovieRequests.fetchDocumentaries}
                />
              </>
            }
          />
          <Route
            path="/TvShows"
            element={
              <>
                <Banner fetchUrl={TvRequests.fetchNetflixOriginals} />
                <RowTv
                  title="Top Rated Tv Shows"
                  fetchUrl={TvRequests.fetchTopRatedTv}
                  isLargeRow
                />
                <RowTv
                  title="Popular Tv Shows"
                  fetchUrl={TvRequests.fetchPopularTv}
                />
                <RowTv
                  title="Netflix Originals"
                  fetchUrl={TvRequests.fetchNetflixOriginals}
                />
                <RowTv
                  title="Airing Today"
                  fetchUrl={TvRequests.fetchAiringToday}
                />
                <RowTv title="On The Air" fetchUrl={TvRequests.fetchOnTheAir} />
                <RowTv
                  title="Trending Tv Shows"
                  fetchUrl={TvRequests.fetchTrendingTv}
                />
                <RowTv
                  title="Action & Adventure"
                  fetchUrl={TvRequests.fetchActionTv}
                />
                <RowTv
                  title="Sci-Fi & Fantasy"
                  fetchUrl={TvRequests.fetchSciFiFantasy}
                />
              </>
            }
          />
          <Route path="/details/:movieId" element={<Details />} />
          {/* <Route path="/search" element={<SearchResults />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
