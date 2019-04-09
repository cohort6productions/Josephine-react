// Module
import * as React from "react";

// business needs
import tallbuilding from "./img/AL.190207.COH.WEBW.Connect1.jpg";
import computer from "./img/AL.190207.COH.WEBW.Connect2.jpg";
import money from "./img/AL.190207.COH.WEBW.Connect3.jpg";
import crowd from "./img/AL.190207.COH.WEBW.Connect4.jpg";
import meeting from "./img/AL.190207.COH.WEBW.Connect5.jpg";

const ConnectWithUs = () => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <h2 className="section-header all-cap">
                    <bdi className="section-header all-cap text-highlight">
                        Connect{" "}
                    </bdi>
                    with us
                </h2>
                <div className="row">
                    <div className="col-sm-12 col-md-6 itemCol">
                        <a href="https://www.google.com">
                            <img
                                className="itemCol__img"
                                src={tallbuilding}
                                alt=""
                            />
                            <h4 className="itemCol__subhead  overline-header-bold">
                                Read our blogs and Medium
                            </h4>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-6 itemCol">
                        <a href="https://www.google.com">
                            <img
                                className="itemCol__img"
                                src={computer}
                                alt=""
                            />
                            <h4 className="itemCol__subhead  overline-header-bold">
                                Meetup with business and professionals in Hong
                                Kong
                            </h4>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 itemCol">
                        <a href="https://www.google.com">
                            <img className="itemCol__img" src={money} alt="" />
                            <h4 className="itemCol__subhead  overline-header-bold">
                                Network with our connections on LinkedIn
                            </h4>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 itemCol">
                        <a href="https://www.google.com">
                            <img className="itemCol__img" src={crowd} alt="" />
                            <h4 className="itemCol__subhead  overline-header-bold">
                                Catch us of Facebook updates
                            </h4>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 itemCol">
                        <a href="https://www.google.com">
                            <img
                                className="itemCol__img"
                                src={meeting}
                                alt=""
                            />
                            <h4 className="itemCol__subhead  overline-header-bold">
                                Food for thoughts on growing business in Hong
                                Kong
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectWithUs;
