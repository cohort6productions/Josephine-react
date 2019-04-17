// Modules
import * as React from "react";

// Style
import "./openingNewBusiness.scss";

// Components
import Hero, {
    IHeroProps,
    headerStyle
} from "src/components/Organisms/Hero/hero";
import Subscription from "src/components/Organisms/Subscription/subscription";
import ServiceCard from "src/components/Organisms/ServiceBox/serviceCard";

// Data
import { openServList } from "src/data/servicesList/data";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/openBusiness.jpg"),
    header: "Opening new business",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};

export default class OpeningNewBusiness extends React.PureComponent {
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
                            {openServList.map(service => (
                                <ServiceCard {...service} />
                            ))}
                        </div>
                    </div>
                </div>
                <Subscription />
            </>
        );
    }
}
