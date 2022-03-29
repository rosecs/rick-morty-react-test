import React from "react";

export default function About() {
    return (
        <section
            id="short-aboutUs"
            className="container-xl-fluid pt-5 space-between-sections bg-hero text-center"
            style={{ paddingBottom: "3rem" }}
        >
            <div className="container-xl">
                <div className="row mb-3">
                    <div className="col-8">
                        <h4 className=" text-white">About Rick and Morty</h4>
                        <p className="my-4">
                            Rick and Morty is an American adult animated science
                            fiction sitcom created by Justin Roiland and Dan Harmon
                            for Cartoon Network's nighttime programming block, Adult Swim.
                            The series follows the misadventures of cynical mad scientist
                            Rick Sanchez and his good-hearted, but fretful grandson Morty
                            Smith, who split their time between domestic life and
                            interdimensional adventures.

                        </p>
                        <p>
                            Roiland voices the eponymous characters, with Chris Parnell,
                            Spencer Grammer and Sarah Chalke voicing the rest of Rick
                            and Morty's family. The series originated from an animated
                            short parody film of Back to the Future, created by Roiland
                            for Channel 101, a short film festival co-founded by Harmon.
                            Since its debut, the series has received critical acclaim for
                            its originality, creativity and humor.
                            The fifth season premiered on June 20, 2021, and consisted
                            of ten episodes. A sixth season was confirmed as part of a
                            long-term deal in May 2018 that ordered 70 new episodes
                            over an unspecified number of seasons.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
