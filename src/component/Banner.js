import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //get data from api(fetchNetflixOriginals)
      const request = await axios.get(requests.fetchNetflixOriginals);
      //sent random data to movie(setMovie=>movie)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    //******useEffect ทำงานตรงส่วนนี้เป็นส่วนแรกเสมอ*******
    fetchData();
  }, []);
  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">
            {truncate(
              `This is a test description Marvel Studios' Eternals features an
            exciting new team of Super Heroes in the Marvel Cinematic Universe,
            ancient aliens who have been living on Earth in secret for thousands
            of years. Following the events of Avengers: Endgame, an unexpected
            tragedy forces them out of the shadows to reunite against mankind's
            most ancient enemy, the Deviants.`,
              145
            )}
          </h1>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
