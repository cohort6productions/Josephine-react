// Module
import * as React from "react";

// Components
import Footer from "src/components/footer/footer";
import Trailer from "./a-trailer/a-trailer";
import FindBusiness from "./b-findBusiness/b-findBusiness";
import ConnectWithUs from "./c-connectWithUs/c-connectWithUs";
import TrustedPartner from "./d-trustedPartner/d-trustedPartner";

// Style
import "./style.scss";

export default class Homepage extends React.PureComponent {
    public render() {
        return (
            <div>
                <div className="container">
                    <h1>
                        Admin services, Resources &amp; Network to help business
                        focus
                    </h1>
                    <h3>Welcome to Centre O, The Hong Kong Business Centre</h3>
                    <button>Contact Us</button>
                </div>

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
                <Footer />
            </div>
        );
    }
}
