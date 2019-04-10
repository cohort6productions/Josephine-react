// Module
import * as React from "react";

// Components
import Footer from "src/components/footer/footer";

// Style
import "./conferenceRoomBooking.scss";

// Image assets
import sheungwan from "./img/sheungwan.jpg";
import wanchai from "./img/wanchai.jpg";
import office1 from "./img/JL.190207.COH.WEBW.Gallery1.jpg";
import office2 from "./img/JL.190207.COH.WEBW.Gallery2.jpg";
import office3 from "./img/JL.190207.COH.WEBW.Gallery3.jpg";
import office4 from "./img/JL.190207.COH.WEBW.Gallery4.jpg";
import office5 from "./img/JL.190207.COH.WEBW.Gallery5.jpg";
import office6 from "./img/JL.190207.COH.WEBW.Gallery6.jpg";
import office7 from "./img/JL.190207.COH.WEBW.Gallery7.jpg";
import office8 from "./img/JL.190207.COH.WEBW.Gallery8.jpg";

const Location = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <div className="card-group">
                <div className="card">
                    <img
                        className="card-img-top"
                        src={wanchai}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Wanchai</h5>
                        <ul>
                            <li>
                                <img src="" alt="" />
                                <span>
                                    Metropolitane shopping mall is within
                                    walking distance, beest mood in the city
                                </span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span>Surrounding by 5-star hotels</span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span>
                                    Restaurants and bars for unwining after long
                                    meetings
                                </span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span>Perfect for 4~6 people</span>
                            </li>
                        </ul>
                    </div>
                    <a href="https://centreo-wanchai.youcanbook.me/">
                        <div className="card-footer bg-theme-default text-center">
                            <span className="button-text text-light ">
                                Reserve conference room
                            </span>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src={sheungwan}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Sheungwan</h5>
                        <ul>
                            <li>
                                <img src="" alt="" />
                                <span>Surrounding by office</span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span>Surrounding by 5-star hotels</span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span>
                                    Restaurants and bars for unwining after long
                                    meetings
                                </span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span>Perfect for 2~4 people</span>
                            </li>
                        </ul>
                    </div>
                    <a href="https://centreo-sheungwan.youcanbook.me/">
                        <div className="card-footer bg-theme-default text-center">
                            <span className="button-text text-light ">
                                Reserve conference room
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Price = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <h2 className="section-header all-cap">
                Our <bdi className="text-highlight">price</bdi>
            </h2>
            <div className="card-group">
                <div className="card">
                    <div className="card-top text-center">
                        <h3>Work</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Wanchai</h5>
                        <span>Monday - Friday (9-6)</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top text-center">
                        <h3>Chill</h3>
                    </div>
                    <div className="card-body  text-center">
                        <h5 className="card-title">Sheungwan</h5>
                        <span>After hours, weekend &and; Public holidays</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const View = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <h2 className="section-header all-cap">
                Our <bdi className="text-highlight">View</bdi>
            </h2>
            <div className="gallery-grid">
                <img
                    className="gallery-grid__img"
                    src={office1}
                    alt="Centre O Wanchai office"
                />
                <img
                    className="gallery-grid__img"
                    src={office2}
                    alt="Centre O Wanchai office"
                />
                <img
                    className="gallery-grid__img"
                    src={office3}
                    alt="Centre O Sheungwan office"
                />
                <img
                    className="gallery-grid__img"
                    src={office4}
                    alt="Centre O Office"
                />
                <img
                    className="gallery-grid__img"
                    src={office5}
                    alt="Centre O Sheungwan office"
                />
                <img
                    className="gallery-grid__img"
                    src={office6}
                    alt="Centre O Sheungwan office"
                />
                <img
                    className="gallery-grid__img"
                    src={office7}
                    alt="Centre O Wanchai office"
                />
                <img
                    className="gallery-grid__img"
                    src={office8}
                    alt="Centre O Sheungwan office"
                />
            </div>
        </div>
    </div>
);

export default class ConferenceRoomBooking extends React.PureComponent {
    public render() {
        return (
            <div>
                <h1>Conference</h1>
                <h3>Welcome to Centre O, The Hong Kong Business Centre</h3>
                <button>Contact Us</button>
                <Location />
                <Price />
                <View />
                <Footer />
            </div>
        );
    }
}
