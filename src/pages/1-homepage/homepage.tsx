// Module
import * as React from "react";

// Components
import Trailer from "./a-trailer/a-trailer";
import FindBusiness from "./b-findBusiness/b-findBusiness";
import ConnectWithUs from "./c-connectWithUs/c-connectWithUs";
import TrustedPartner from "./d-trustedPartner/d-trustedPartner";
import Hero, { headerStyle, IHeroProps } from "src/components/hero/hero";

// Style
import "./style.scss";

// Taken from components/hero
const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/homepage.jpg"),
    header: "Admin services, resources & network to help business focus",
    subLine: "Welcome to Centre O, the Hong Kong business center.",
    buttonLink: "mailto:sales@centreo.hk"
};

export default class Homepage extends React.PureComponent {
    public render() {
        return (
            <>
                <Hero {...heroProps} />
                {/* Start of Watch the trailer */}
                <Trailer />
                {/* End of Watch the trailer */}

                {/* Start of Find business's needs */}
                <FindBusiness />
                {/* Emd of Find business's needs */}

                {/* Start of Connect with us */}
                <ConnectWithUs />
                {/* Emd of Connect with us */}
                {/* Start of Trusted partner */}
                <TrustedPartner />
                {/* Emd of Trusted partner */}
            </>
        );
    }
}
