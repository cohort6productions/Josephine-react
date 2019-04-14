// Module
import * as React from "react";

// Style
import "./b-findBusiness.scss";

// business needs
import globe from "./img/global.png";
import china from "./img/china.png";
import sprout from "./img/sprout.png";
import coinhand from "./img/coinHand.png";

// Components
import CustomLink from "src/components/Atoms/CustomLink/customLink";

const FindBusiness = () => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <h2 className="section-header all-cap">
                    Find services, resources and connections catering to your
                    <bdi className="section-header all-cap text-highlight">
                        {" "}
                        Business's needs
                    </bdi>
                </h2>
                <div className="row card-deck">
                    <div className="col-sm-12 col-md-6 col-lg-3 card itemCol">
                        <img
                            className="itemCol__icon card-img-top"
                            src={sprout}
                            alt=""
                        />
                        <div className="card-body">
                            <h4 className="itemCol__subhead  overline-header-bold">
                                OPENING A BUSINESS IN HK
                            </h4>
                            <span className="itemCol__body">
                                Incorporated more than 16,000 companies, get a
                                hassle free jump start by setting up your
                                company properly with Centre O.
                            </span>
                        </div>
                        <div>
                            <CustomLink link="/open" variation="default" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 card itemCol">
                        <img
                            className="itemCol__icon card-img-top"
                            src={coinhand}
                            alt=""
                        />
                        <div className="card-body">
                            <h4 className="itemCol__subhead  overline-header-bold">
                                BUSINESS UPKEEPING
                            </h4>
                            <span className="itemCol__body">
                                Administrative tasks are time-consuming yet
                                important to the growth of your business. Let
                                our specialists to help your business focus by
                                taking care of them.
                            </span>
                        </div>
                        <div>
                            <CustomLink link="/upkeep" variation="default" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 card itemCol">
                        <img
                            className="itemCol__icon card-img-top"
                            src={globe}
                            alt=""
                        />
                        <div className="card-body">
                            <h4 className="itemCol__subhead  overline-header-bold">
                                EXPANDING BUSINESS
                            </h4>
                            <span className="itemCol__body">
                                Centre O has been lining business up with
                                helpful resources and connections since 2010,
                                helping more than 20,000 companies to grow and
                                expand their businesses. Let us help your
                                business grow as well.
                            </span>
                        </div>
                        <div>
                            <CustomLink link="/expand" variation="default" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 card itemCol">
                        <img
                            className="itemCol__icon card-img-top"
                            src={china}
                            alt=""
                        />
                        <div className="card-body">
                            <h4 className="itemCol__subhead  overline-header-bold">
                                BUSINESS ENTERING CHINA
                            </h4>
                            <span className="itemCol__body">
                                Entering one of the World’s largest consumer
                                market can be difficult and intimidating. With a
                                hand-picked, tightly-knitted network of business
                                partners in China, let Centre O help you tap
                                into that endless possibilities.{" "}
                            </span>
                        </div>
                        <div>
                            <CustomLink link="/relocate" variation="default" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindBusiness;
