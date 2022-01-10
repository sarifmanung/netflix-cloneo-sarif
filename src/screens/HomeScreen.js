import React from "react";
import Banner from "../component/Banner";
import Nav from "../component/Nav";
import requests from "../component/Requests";
import Row from "../component/Row";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />

      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow />

      <Row
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />

      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />

      <Row
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />

      <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />

      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
