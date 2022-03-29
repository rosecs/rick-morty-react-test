import React from "react";

export default function Episode({ episodes = [] }) {
    return (
        <div className="row">
            {
                episodes.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" src="" alt="Card image cap" />
                            <div className="card-body">
                                <h5>{item.name}</h5>
                                <p className="card-text">  </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
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