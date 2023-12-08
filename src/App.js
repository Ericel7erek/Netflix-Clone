import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Banner */}

      <Banner />
      {/* <h1>Netflix Originals</h1> */}
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
