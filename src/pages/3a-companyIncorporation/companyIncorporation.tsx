// Modules
import * as React from "react";

// Style
import "./companyIncorporation.scss";

// Components
import Hero, {
    IHeroProps,
    headerStyle
} from "src/components/Organisms/Hero/hero";
import Subscription from "src/components/Organisms/Subscription/subscription";
import CustomButton from "src/components/Atoms/CustomButton/customButton";
import { Checkmark } from "./img/checkMark";

// Data
import { faqIncorporation } from "src/data/faqs";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/conference.jpg"),
    header: "Company incorporation",
    subLine:
        "We assist our clients in company incorporations and consultation services on business maintainance and upkeeping."
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
                                <h2 className="text-light">HKD $7,200</h2>
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
                                <h3 className="text-mild">GROW</h3>
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
const ServiceBox = () => <div className="ok">something</div>;
const FAQ = (props: {
    qaArray: Array<{ question: string; answer: string }>;
}) => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <ul className="list-group list-group-flush">
                    {props.qaArray.map((sets, index) => (
                        <li className="list-group-item">
                            <h4>{sets.question}</h4>
                            <p>{sets.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const TwoOptions = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container ">
            <div className="card-deck">
                <div className="card border-0">
                    <div className="card-body">
                        <h3 className="card-title">I want to talk</h3>
                        <p className="card-text">
                            I’m still not sure about what I have to do, I feel
                            more safter when I have my hands being hold onto
                            throughtout my journey of incorporating my company
                            in Hong Kong with Centre O.
                        </p>
                        <CustomButton
                            link="mailto:sales@centreo.hk"
                            text="Talk to us"
                            variation={"alertwarning"}
                        />
                    </div>
                </div>
                <div className="card border-0">
                    <div className="card-body">
                        <h3 className="card-title">I am convinced</h3>
                        <p className="card-text">
                            The information is clear, and I’m readly convinced
                            by what I see on the website to incorporate my
                            company in Hong Kong with Cetnre O. Let’s get this
                            started.
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
