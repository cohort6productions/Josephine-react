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

// Data
import { faqIncorporation } from "src/data/faqs";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/conference.jpg"),
    header: "Company incorporation",
    subLine:
        "We assist our clients in company incorporations and consultation services on business maintainance and upkeeping."
};

const Pricing = () => <div>ok</div>;
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
                            link="/incorporation"
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
