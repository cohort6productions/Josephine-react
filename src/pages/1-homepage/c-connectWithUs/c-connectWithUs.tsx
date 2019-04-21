// Module
import * as React from "react";

// Style
import "./c-connectWithUs.scss";

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
                        <a href="https://medium.com/centreo">
                            <img
                                className="itemCol__img rounded"
                                src={tallbuilding}
                                alt="Hong Kong Building"
                            />
                            <span className="itemCol__subhead   body-short-texts">
                                Read our articles
                            </span>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-6 itemCol">
                        <a href="https://www.meetup.com/Multi-Network-Business-Community/">
                            <img
                                className="itemCol__img rounded"
                                src={computer}
                                alt="Iphone"
                            />
                            <span className="itemCol__subhead   body-short-texts">
                                Meetup with business and professionals in HK
                            </span>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 itemCol">
                        <a href="https://www.linkedin.com/company/centre-o/">
                            <img
                                className="itemCol__img rounded"
                                src={money}
                                alt=""
                            />
                            <span className="itemCol__subhead   body-short-texts">
                                Connections us through LinkedIn
                            </span>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 itemCol">
                        <a href="https://www.facebook.com/centreobusinesscentre/">
                            <img
                                className="itemCol__img rounded"
                                src={crowd}
                                alt=""
                            />
                            <span className="itemCol__subhead   body-short-texts">
                                Catch us on Facebook
                            </span>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 itemCol">
                        <a href="https://www.youtube.com/channel/UCwDkjGptwCDw1YxV3hsLmHw">
                            <img
                                className="itemCol__img"
                                src={meeting}
                                alt=""
                            />
                            <span className="itemCol__subhead   body-short-texts">
                                Insights on growing business in Hong Kong
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectWithUs;
