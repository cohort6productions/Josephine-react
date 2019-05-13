// Module
import * as React from "react";

// Components
import Hero, {
    headerStyle,
    IHeroProps
} from "src/components/Organisms/Hero/hero";
import Subscription from "src/components/Organisms/Subscription/subscription";

// Style
import "./conferenceRoomBooking.scss";

// Image assets
import sheungwan from "./img/JL.190415.COH.WEBW.SheungwanLoc.jpg";
import wanchai from "./img/JL.190415.COH.WEBW.WanchaiLoc.jpg";
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
            <div className="card-deck">
                <div className="card">
                    <img
                        className="card-img-top"
                        src={wanchai}
                        alt="Centre O Wanchai Location"
                    />
                    <div className="card-body">
                        <h3 className="card-title all-cap mb-3">Wanchai</h3>
                        <ul>
                            <li>
                                <span>
                                    Metropolitane shopping mall is within
                                    walking distance, beest mood in the city
                                </span>
                            </li>
                            <li>
                                <span>Surrounding by 5-star hotels</span>
                            </li>
                            <li>
                                <span>
                                    Restaurants and bars for unwining after long
                                    meetings
                                </span>
                            </li>
                            <li>
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
                        alt="Centre O Sheungwan Location"
                    />
                    <div className="card-body">
                        <h3 className="card-title all-cap mb-3">Sheungwan</h3>
                        <ul>
                            <li>
                                <span>Surrounding by office</span>
                            </li>
                            <li>
                                <span>Surrounding by 5-star hotels</span>
                            </li>
                            <li>
                                <span>
                                    Restaurants and bars for unwining after long
                                    meetings
                                </span>
                            </li>
                            <li>
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
            <div className="card-deck">
                <div className="card">
                    <div className="card-body text-center">
                        <h3 className="all-cap price-card-header">Work</h3>
                    </div>
                    <div className="card-footer pt-5 pb-5">
                        <h3 className="card-title text-light">$80/30 mins</h3>
                        <span className="text-light">
                            Monday - Friday (9-6)
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <h3 className="all-cap price-card-header">Chill</h3>
                    </div>
                    <div className="card-footer pt-5 pb-5">
                        <h3 className="card-title text-light">$150/30 mins</h3>
                        <span className="text-light">
                            After hours, weekend &amp; Public holidays
                        </span>
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

// Taken from components/hero
const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/conference.jpg"),
    header: "Conference room",
    subLine:
        "We assist our clients in company incorporations and consultation services on maintain and upkeep their businesses."
};

export default class ConferenceRoomBooking extends React.PureComponent {
    public render() {
        return (
            <>
                <Hero {...heroProps} />
                <Location />
                <Price />
                <View />
                <Subscription />
            </>
        );
    }
}
