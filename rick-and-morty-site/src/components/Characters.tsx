import React, { useEffect, useState } from "react";
import CharacterProfile from "./CharacterProfile";
import Filters from "./Filters";

export default function Characters() {
    const [characters, setChracters] = useState([]);
    //const mainUrl = ;
    const fetchCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setChracters(data.results))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Filters />
                </div>
                <div className="col-8">
                    <CharacterProfile characters={characters} />
                </div>
            </div>


        </div>
    );
}