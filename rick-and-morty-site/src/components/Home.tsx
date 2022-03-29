import React from "react";
import Episode from "./Episode";
import Hero from "./Hero";
import scene1 from "../global/assets/images/scene1.jpg"
import scene2 from "../global/assets/images/scene2.jpg"
import CharacterProfile from "./CharacterProfile";

//import Characters from './components/Characters';
//import News from './components/newsAndFeatures';
//import Shop from './Shop';

export default function Home() {
    return (
        <React.Fragment>
            <section id="hero" className="bg-hero">
                <Hero />
            </section>
            <section id="best-episodes">
                <div className="album py-5 bg-light">
                    <h4 className="subtitle text-center"> Top 5 episodes </h4>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <h4 className="text-center">Meet <strong>the crew</strong></h4>
                    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Rick</h2>

                        </div>
                        <div className="bg-light box-shadow mx-auto fav-characters" ></div>
                    </div>
                    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Morty</h2>
                        </div>
                        <div className="bg-dark box-shadow mx-auto fav-characters" ></div>
                    </div>
                </div>
            </section>
            <section>
                <h5>The people saids...</h5>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h3 className="featurette-heading">Very solidly constructed television.<span className="text-muted">It'll blow your mind.</span></h3>
                        <p className="lead text-dark">The strength of the show is just how amoral Rick may be;
                            but there is a strong attachment to the "many universes" hypothesis
                            within the show. Philosophers have long debated the moral implications
                            of "many universes" ( while realizing it's a bit sophomoric and nerdy ) ;
                            "Rick and Morty" picks at this as its stock in trade. Morty is our avatar,
                            and works in that capacity extremely well.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src={scene1} alt="Generic placeholder image" />
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h3 className="featurette-heading">A genius mix of emotion, comedy and sci-fi! <span className="text-muted">See for yourself.</span></h3>
                        <p className="lead text-dark">
                            Rick and Morty is a hilarious new show by the genius behind Community
                            seasons 1-3 and 5, Dan Harmon. The episodes so far have always seemed
                            fresh and the writing is hilarious and creative.
                            But then there's no surprise really since its co-creator created Community.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="featurette-image img-fluid mx-auto" src={scene2} alt="Generic placeholder image" />
                    </div>
                </div>
            </section>


        </React.Fragment>
    );
}