// Module
import * as React from "react";

// Components
import Header from "src/components/header/header";
import Footer from "src/components/footer/footer";

// Style
import "./aboutUs.scss";

// Image assets
import Jo from "./img/Team/JL.190409.COH.WEBW.Josephine.jpg";
import kellyYu from "./img/Team/JL.190409.COH.WEBW.KellyYu.jpg";
import kellyHeung from "./img/Team/JL.190409.COH.WEBW.KellyHeung.jpg";
import ekaterina from "./img/Team/JL.190409.COH.WEBW.Skey.jpg";
import martin from "./img/Team/JL.190409.COH.WEBW.Martin.jpg";
import billa from "./img/Team/JL.190409.COH.WEBW.Billa.jpg";

// List data
import { testimonial } from "./data";

const Team = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <div className="row">
                <div className="member-box col-sm-12 col-md-6">
                    <img className="img-fluid" src={Jo} alt="Josephine Lau" />
                    <h4>Josephine Lau</h4>
                    <small>CEO/Founder</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
                <div className="member-box col-sm-12 col-md-6">
                    <img className="img-fluid" src={kellyYu} alt="Kelly Yu" />
                    <h4>Kelly Yu</h4>
                    <small>Business Development Manager</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
                <div className="member-box col-sm-6 col-md-4">
                    <img
                        className="img-fluid"
                        src={kellyHeung}
                        alt="Kelly Heung"
                    />
                    <h4>Kelly Heung</h4>
                    <small>Accounting and Auditing Manager</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
                <div className="member-box col-sm-6 col-md-4">
                    <img
                        className="img-fluid"
                        src={ekaterina}
                        alt="Ekaterina Stefashina"
                    />
                    <h4>Ekaterina Stefashina</h4>
                    <small>Office Manager</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
                <div className="member-box col-sm-6 col-md-4">
                    <img
                        className="img-fluid"
                        src={martin}
                        alt="Martine Shum"
                    />
                    <h4>Martine Shum</h4>
                    <small>Office Superhero</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
                <div className="member-box col-sm-6 col-md-4">
                    <img className="img-fluid" src={billa} alt="Billa Mok" />
                    <h4>Billa Mok</h4>
                    <small>Business Plan Specialist</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
                <div className="member-box col-sm-6 col-md-4">
                    <img className="img-fluid" src={Jo} alt="" />
                    <h4>Chinenye Egbuna</h4>
                    <small>Assistant Account Manager</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
                <div className="member-box col-sm-6 col-md-4">
                    <img className="img-fluid" src={Jo} alt="" />
                    <h4>Jessica Chung</h4>
                    <small>Office Superhero</small>
                    <a href="">
                        <button>Click here</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Testimonials = (props: any) => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container card-columns">
                {props.list.map((person: any, keyIndex: number) => (
                    <div
                        className="card bg-light shadow-sm border-0"
                        key={keyIndex}
                    >
                        <div className="card-body">
                            <div className="media">
                                <img
                                    className="w-25 rounded-circle align-self-center"
                                    src={person.img}
                                    alt={person.name}
                                />
                                <div className="media-body">
                                    <h4 className="overline-header-bold card-title">
                                        {person.name}
                                    </h4>
                                    <small className="">
                                        {person.position}
                                    </small>
                                </div>
                            </div>
                            <p className="mt-2 body-short-texts">
                                {person.testimonial}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const List = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <div className="row">
                <div className="border-left border-warning col-sm-6 col-md-3">
                    <h2 className="text-highlight">2.2K+</h2>
                    <h4>Audit Reports</h4>
                </div>
                <div className="border-left border-warning col-sm-6 col-md-3">
                    <h2 className="text-highlight">1.5K+</h2>
                    <h4>Incorporated Companies</h4>
                </div>
                <div className="border-left border-warning col-sm-6 col-md-3">
                    <h2 className="text-highlight">1K+</h2>
                    <h4>China Visa Application</h4>
                </div>
                <div className="border-left border-warning col-sm-6 col-md-3">
                    <h2 className="text-highlight">15K+</h2>
                    <h4>Incorporated Companies</h4>
                </div>
            </div>
        </div>
    </div>
);

export default class AboutUs extends React.PureComponent {
    public render() {
        return (
            <div>
                <Header />
                <h1>About Us</h1>
                <h3>Welcome to Centre O, The Hong Kong Business Centre</h3>
                <button>Contact Us</button>
                <Team />
                <Testimonials list={testimonial} />
                <List />
                <Footer />
            </div>
        );
    }
}
