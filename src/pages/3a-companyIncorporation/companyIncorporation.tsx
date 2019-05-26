// Modules
import * as React from "react";

// Style
import "./companyIncorporation.scss";
import globeIcon from "./img/global.png";

// Components
import Hero, {
    IHeroProps,
    headerStyle
} from "src/components/Organisms/Hero/hero";
import Subscription from "src/components/Organisms/Subscription/subscription";
import CustomButton from "src/components/Atoms/CustomButton/customButton";
import { Checkmark } from "./img/checkMark";
import { UncontrolledCollapse } from "reactstrap";

// Data
import { faqIncorporation } from "src/data/faqs";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/conference.jpg"),
    header: "Company incorporation",
    subLine:
        "We assist our clients in company incorporations and consultation services on business maintainance and upkeeping."
};

const checkout = () => {
    const stripe = Stripe("pk_test_ygtH7d7VG435kX0qzDZwF239");
    stripe
        .redirectToCheckout({
            items: [{ sku: "sku_F8WRZKvH3dwe4Q", quantity: 1 }],

            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in
            // https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: "https://www.ivanoung.io/success",
            cancelUrl: "https://www.ivanoung.io/canceled"
        })
        .then((result: string) => {
            // tslint:disable-next-line: no-console
            console.log(result);
        });
};

const Pricing = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 pl-3 pr-3">
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <div className="card-header__title">
                                <h3 className="text-mild">SEED</h3>
                            </div>
                            <div className="card-header__tag bg-theme-mild">
                                <h2 className="text-light">HKD $6,000</h2>
                                <span className="text-light">
                                    The best way to start the business just to
                                    test the water
                                </span>
                                <button
                                    id="checkout-button-sku_F8WRZKvH3dwe4Q"
                                    role="link"
                                    onClick={checkout}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li className="fill-mild">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Company incorporation
                                    </span>
                                </li>
                                <li className="fill-mild">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Business registeration
                                    </span>
                                </li>
                                <li className="fill-mild">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Articles of associations
                                    </span>
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Client due dillegence check
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Company secretarial services
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Articles of associations
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Share certificate
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Company round chop
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Company signature chop
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Company folder
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Certified copies of documents
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Bank opening business plan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pl-3 pr-3">
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <div className="card-header__title">
                                <h3 className="text-medium">SPROUT</h3>
                            </div>
                            <div className="card-header__tag bg-theme-medium">
                                <h2 className="text-light">HKD $7,250</h2>
                                <span className="text-light">
                                    The best way to commit to your business when
                                    most is taken care
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li className="fill-medium">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Company incorporation
                                    </span>
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Business registeration
                                    </span>
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Articles of associations
                                    </span>
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Client due dillegence check
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Company secretarial services
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Articles of associations
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Share certificate
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Company round chop
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Company signature chop
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Company folder
                                </li>
                                <li className="fill-medium">
                                    <Checkmark />
                                    Certified copies of documents
                                </li>
                                <li className="inact">
                                    <Checkmark />
                                    Bank opening business plan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pl-3 pr-3">
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <div className="card-header__title">
                                <h3 className="text-intense">GROW</h3>
                            </div>
                            <div className="card-header__tag bg-theme-intense">
                                <h2 className="text-light">HKD $16,500</h2>
                                <span className="text-light">
                                    Kickback and relax, everything is taken care
                                    for you
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li className="fill-intense">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Company incorporation
                                    </span>
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Business registeration
                                    </span>
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    <span className="body-short-texts">
                                        Articles of associations
                                    </span>
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Client due dillegence check
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Company secretarial services
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Articles of associations
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Share certificate
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Company round chop
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Company signature chop
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Company folder
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Certified copies of documents
                                </li>
                                <li className="fill-intense">
                                    <Checkmark />
                                    Bank opening business plan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
const ServiceBox = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <h2 className="section-header all-cap">
                Other available
                <bdi className="section-header all-cap text-highlight">
                    {" "}
                    incorporation
                </bdi>
            </h2>
            <div className="row">
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        HK Limited Company
                    </span>
                </div>
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        HK Sole proprietorship
                    </span>
                </div>
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        HK Branch office
                    </span>
                </div>
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        HK Representative office
                    </span>
                </div>
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        BVI Incorporation
                    </span>
                </div>
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        Samoa Incorporation
                    </span>
                </div>
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        Seychelles Incorporation
                    </span>
                </div>
                <div className="col-sm-6 col-lg-3 icon-text-container">
                    <img
                        className="icon-text-container__img"
                        src={globeIcon}
                        alt="Globe icon"
                    />
                    <span className="body-short-texts all-cap">
                        China WFOE Incorporation
                    </span>
                </div>
            </div>
        </div>
    </div>
);
const FAQ = (props: {
    qaArray: Array<{ question: string; answer: string }>;
}) => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <h2 className="section-header all-cap">
                    Frequently asked
                    <bdi className="section-header all-cap text-highlight">
                        {" "}
                        questions
                    </bdi>
                </h2>
                <ul className="list-group list-group-flush">
                    {props.qaArray.map((sets, index) => (
                        <li className="list-group-item">
                            <h4
                                className="overline-header-bold"
                                id={"faq" + index}
                            >
                                {sets.question}
                            </h4>
                            <UncontrolledCollapse toggler={"#faq" + index}>
                                <p className="ml-3 collaps-text">
                                    {sets.answer}
                                </p>
                            </UncontrolledCollapse>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const TwoOptions = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <h2 className="section-header all-cap">
                <bdi className="section-header all-cap text-highlight">
                    Ready{" "}
                </bdi>
                or not
            </h2>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="card border-0">
                        <div className="card-body p-5 d-flex flex-column justify-content-between">
                            <h3 className="card-title all-cap">
                                I want to <bdi className="text-alert">talk</bdi>
                            </h3>
                            <p className="card-text">
                                I’m not sure about what to do, I feel more
                                safter when I have my hands being hold onto
                                throughtout my journey of incorporating my
                                company in HK with Centre O.
                            </p>

                            <CustomButton
                                link="/"
                                text="Talk to us"
                                variation={"alertwarning"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className=" card border-0">
                        <div className="card-body p-5 d-flex flex-column justify-content-between">
                            <h3 className="card-title all-cap">
                                I am{" "}
                                <bdi className="text-affirmative">
                                    convinced
                                </bdi>
                            </h3>
                            <p className="card-text">
                                The information is clear, and I’m readly
                                convinced by what I see on the website to
                                incorporate my company in Hong Kong with Centre
                                O. Let’s get this started.
                            </p>
                            <CustomButton
                                link="/incorporation/form"
                                text="Let's get rolling"
                                variation={"affirmative"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default class CompanyIncorporation extends React.PureComponent {
    public render() {
        return (
            <>
                <Hero {...heroProps} />
                <Pricing />
                <ServiceBox />
                <FAQ qaArray={faqIncorporation} />
                <TwoOptions />
                <Subscription />
            </>
        );
    }
}
