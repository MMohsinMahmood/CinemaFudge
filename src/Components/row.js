import React, { useEffect, useState } from "react";
import axios from "./axios";
import "../Styles/Row.css"

const baseURL = "https://image.tmdb.org/t/p/original/";
function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="rowPosters">
        {movies.map((movie) => (
          <img key={movie.id} className={`rowPoster ${props.isLarge && "rowPosterLarge"}`} src={props.isLarge ? baseURL + movie.poster_path : baseURL + movie.backdrop_path} alt={movie.name}></img>
        ))}
      </div>
    </div >
  );
}

export default Row;
