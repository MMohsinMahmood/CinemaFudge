import React, { useEffect, useState } from "react";
import requests from './requests';
import axios from "./axios";
import "../Styles/Banner.css"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            console.log(request);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }

        fetchData();
    }, []);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    console.log(movie);

    return <header className="banner"
        style={{
            backgroundSize: "cover", backgroundImage: `url(${baseURL + movie?.backdrop_path})`,
            backgroundPosition: 'center top'
        }}
    >
        <div className="bannerContents">
            <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="bannerButtons">
                <button className="bannerButton">Play</button>
                <button className="bannerButton">My List</button>
            </div>

            <h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
        </div>

        <div className="fadedBottom"></div>
    </header >
}

export default Banner;
