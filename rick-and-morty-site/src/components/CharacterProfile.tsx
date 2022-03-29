import React from "react";


export default function CharacterProfile({ characters = [] }) {

    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col-4 mt-4 ">
                        <div className="card mb-4 box-shadow">
                            <div className="state">
                                <span className="dead">
                                    <h6>Dead</h6>
                                </span>
                            </div>
                            <img className="card-img-top" src={item.image} alt="character image " />
                            <div className="card-body bg-dark bg-opacity-70 text-white col-12">
                                <h5 className="card-title"> {item.name}</h5>
                                <p className="card-text"> status: {item.status} </p>
                                <p className="card-text"> species: {item.species} </p>
                                <p className="card-text"> location: {item.location.name} </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    );
}