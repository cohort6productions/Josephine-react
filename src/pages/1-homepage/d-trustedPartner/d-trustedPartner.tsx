// Module
import * as React from "react";

// Image assets
import capsule from "./img/AL.190207.COH.WEBW.CapsuleLogoResized.png";
import dbs from "./img/AL.190207.COH.WEBW.DBSLogoResized.png";
import hangseng from "./img/AL.190207.COH.WEBW.HangSengLogoResized.png";
import visa from "./img/AL.190207.COH.WEBW.HongKongVisaCentreLogoResized.png";
import hsbc from "./img/AL.190207.COH.WEBW.HSBCLogoResized.png";
import ocbc from "./img/AL.190207.COH.WEBW.OCBCLogoResized.png";
import xero from "./img/AL.190207.COH.WEBW.XeroLogoResized.png";

const TrustedPartner = () => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <h2 className="section-header all-cap">
                    Trusted <bdi className="text-highlight">Partners</bdi>
                </h2>
                <div className="row">
                    <div className="col-sm-6 col-md-3 itemCol">
                        <img className="itemCol__img" src={capsule} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-3 itemCol">
                        <img className="itemCol__img" src={dbs} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-3 itemCol">
                        <img className="itemCol__img" src={hangseng} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-3 itemCol">
                        <img className="itemCol__img" src={visa} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-3 itemCol">
                        <img className="itemCol__img" src={hsbc} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-3 itemCol">
                        <img className="itemCol__img" src={ocbc} alt="" />
                    </div>
                    <div className="col-sm-6 col-md-3 itemCol">
                        <img className="itemCol__img" src={xero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartner;
