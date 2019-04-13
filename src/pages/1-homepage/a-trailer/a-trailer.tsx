// Module
import * as React from "react";

// Style
import "./a-trailer.scss";
import CustomButton from "src/components/Atoms/CustomButton/customButton";

const Trailer = () => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container" id="trailer">
                <h2 className="all-cap text-light">
                    <bdi className="text-highlight">Centre O</bdi> is a one-stop
                    centre for all business administrative needs.
                </h2>
                <p className="text-light">
                    From incorporating business to visa applications, we have
                    specialists, tools and connections cater to your needs. Our
                    mission is to help entrepreneures and businesses to focus on
                    growing their businesses without getting distracted.{" "}
                </p>
                <CustomButton
                    text="Watch the trailer"
                    link="https://www.youtube.com/watch?v=xqzML__jKyU"
                    variation="theme"
                />
            </div>
        </div>
    );
};

export default Trailer;
