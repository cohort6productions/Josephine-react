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

const BusinessCard = (props: any) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 p-3 itemCol">
            <img
                className="itemCol__icon card-img-top"
                src={props.img}
                alt=""
            />
            <div className="card-body itemCol__body">
                <h4 className="itemCol__body__subhead  overline-header-bold">
                    {props.header}
                </h4>
                <span className="itemCol__body__paragraph">{props.body}</span>
            </div>
            <div className="itemCol__footer">
                <CustomLink link={props.link} variation="default" />
            </div>
        </div>
    );
};

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
                    <BusinessCard
                        header={"OPENING A BUSINESS IN HK"}
                        img={sprout}
                        body={
                            "Incorporated more than 16,000 companies, get a hassle free jump start by setting up your company properly with Centre O."
                        }
                        link={"/open"}
                    />
                    <BusinessCard
                        header={"BUSINESS UPKEEPING"}
                        img={coinhand}
                        body={
                            "Administrative tasks are time-consuming yet important to the growth of your business. Let our specialists to help your business focus by taking care of them."
                        }
                        link={"/open"}
                    />
                    <BusinessCard
                        header={"EXPANDING BUSINESS"}
                        img={globe}
                        body={
                            "Centre O has been lining business up with helpful resources and connections since 2010, helping more than 20,000 companies to grow and expand their businesses. Let us help your business grow as well."
                        }
                        link={"/open"}
                    />
                    <BusinessCard
                        header={"BUSINESS ENTERING CHINA"}
                        img={china}
                        body={
                            "Entering one of the World’s largest consumer market can be difficult and intimidating. With a hand-picked, tightly-knitted network of business partners in China, let Centre O help you tap into that endless possibilities."
                        }
                        link={"/open"}
                    />
                </div>
            </div>
        </div>
    );
};

export default FindBusiness;
