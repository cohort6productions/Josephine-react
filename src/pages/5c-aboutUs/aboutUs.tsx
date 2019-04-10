// Module
import * as React from "react";

// Components
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

const Testimonials = () => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <h2 className="section-header all-cap">
                    What our clients{" "}
                    <bdi className="text-highlight">Say about us</bdi>
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
                            <span>
                                After hours, weekend &and; Public holidays
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default class AboutUs extends React.PureComponent {
    public render() {
        return (
            <div>
                <h1>About Us</h1>
                <h3>Welcome to Centre O, The Hong Kong Business Centre</h3>
                <button>Contact Us</button>
                <Team />
                <Testimonials />
                <Footer />
            </div>
        );
    }
}
