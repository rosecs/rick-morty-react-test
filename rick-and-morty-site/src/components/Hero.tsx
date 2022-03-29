import React from "react";
import hero from "../global/assets/images/hero.png"

export default function Hero() {
    return (
        <div className="container ">
            <div className="row" >
                <div className="col">
                    <img src={hero} className="img-fluid" alt="hero" />
                </div>
                <div className="col">
                    <div className="row">
                        <p>TV-Series 2013-  IMDb <strong>9.2</strong></p>
                    </div>
                    <div className="row ">
                        <h2>Rick</h2>
                        <h3>and</h3>
                        <h2>Morty</h2>
                    </div>
                    <div className="row">
                        <p>The misadventures of alcoholic scientist Rick and
                            his overly nervous grandson Morty, who split their time between domestic
                            family life and intergalactic travel. Often finding themselves in a
                            heap of trouble that more often than not created through their
                            own actions, these two will get themselves out of trouble in the
                            most entertaining way!
                            This extremely clever show will blow your mind as well as all
                            other parallel realities of your mind!</p>
                        <div className="row">
                            <div className="col">
                                <button>
                                    discover episodes
                                </button>
                            </div>
                            <div className="col">
                                <button>
                                    watch on Netflix
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
            </div >
        </div>

    );
}