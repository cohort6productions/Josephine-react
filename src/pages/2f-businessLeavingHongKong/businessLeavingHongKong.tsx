// Modules
import * as React from "react";

// Style
import "./businessLeavingHongKong.scss";

// Image assets
import compsec from "./img/compSec.jpg";
import regOffice from "./img/regOffice.jpg";

// Components
import Hero, {
    IHeroProps,
    headerStyle
} from "src/components/Organisms/Hero/hero";
import Subscription from "src/components/Organisms/Subscription/subscription";
import Button from "reactstrap/lib/Button";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/openBusiness.jpg"),
    header: "Business leaving Hong Kong",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};

export default class BusinessLeavingHongKong extends React.PureComponent {
    public render() {
        return (
            <>
                <Hero {...heroProps} />
                <div className="container-fluid section-padding-tb96">
                    <div className="container">
                        <h2 className="section-header all-cap">
                            Services
                            <bdi className="section-header all-cap text-highlight">
                                {" "}
                                we provide
                            </bdi>
                        </h2>
                        <div className="row">
                            <div className="service-rol col-sm-12 col-md-6">
                                <div className="service-card">
                                    <img
                                        src={compsec}
                                        alt=""
                                        className="service-card__img rounded"
                                    />
                                    <div className="service-card__body">
                                        <h3>Company Deregisteration</h3>
                                        <span>
                                            Something about the services that
                                            clietns are about to buy, and get
                                            that going is good. What you are
                                            buyd is what you are going to get.
                                        </span>
                                    </div>
                                    <div className="service-card__footer rounded">
                                        <div className="service-card__footer__pricingBox rounded w-100">
                                            <span className="overline-header-bold text-light">
                                                HKD$3500
                                            </span>
                                        </div>
                                        <Button className="service-card__footer__cta rounded w-100">
                                            <span className="button-text text-light">
                                                Order now
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="service-rol col-sm-12 col-md-6">
                                <div className="service-card">
                                    <img
                                        src={regOffice}
                                        alt=""
                                        className="service-card__img rounded"
                                    />
                                    <div className="service-card__body">
                                        <h3>Relocation Services</h3>
                                        <span>
                                            Something about the services that
                                            clietns are about to buy, and get
                                            that going is good. What you are
                                            buyd is what you are going to get.
                                        </span>
                                    </div>
                                    <div className="service-card__footer rounded">
                                        <div className="service-card__footer__pricingBox rounded w-100 invisible">
                                            <span className="overline-header-bold text-light">
                                                HKD$2000 ANNU.
                                            </span>
                                        </div>
                                        <Button className="service-card__footer__cta rounded w-100">
                                            <span className="button-text text-light">
                                                Enroll now
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscription />
            </>
        );
    }
}
