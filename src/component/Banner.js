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
        <h1 className="banner_title">
          {movie?.title || movie.name || movie.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">
            {truncate(movie?.overview, 160)}
          </h1>
          <h5 className="banner_date">{movie?.first_air_date}</h5>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
