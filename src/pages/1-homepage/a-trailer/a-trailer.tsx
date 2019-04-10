// Module
import * as React from "react";

// Style
import "./trailer.scss";

const Trailer = () => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container" id="trailer">
                <h2 className="section-header all-cap">
                    <bdi className="text-highlight">Centre O</bdi>
                    Is a one-stop centre for all business' administrative needs
                </h2>
                <p>
                    From incorporating business to visa applications, we have
                    specialists, tools and connections cater to your needs. Our
                    mission is to help entrepreneures and businesses to focus on
                    growing their businesses without getting distracted.{" "}
                </p>
                <button>
                    <span className="button-text">watch the trailer</span>
                </button>
            </div>
        </div>
    );
};

export default Trailer;
