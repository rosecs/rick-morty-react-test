import React, { useEffect, useState } from "react";
import Episode from "./Episode";

export default function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    //const mainUrl = ;
    const fetchEpisodes = () => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then(response => response.json())
            .then(data => setEpisodes(data.results))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchEpisodes();
    }, [])

    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Season 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Season 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Season 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Season 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Season 5</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Season 6</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <Episode episodes={episodes} />
            </div>
        </div>
    );
}