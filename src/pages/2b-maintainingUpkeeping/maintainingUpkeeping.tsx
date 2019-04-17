// Modules
import * as React from "react";

// Style
import "./maintainingUpkeeping.scss";

// Components
import Hero, {
    IHeroProps,
    headerStyle
} from "src/components/Organisms/Hero/hero";
import Subscription from "src/components/Organisms/Subscription/subscription";
import ServiceCard from "src/components/Organisms/ServiceBox/serviceCard";

// Data
import { mainUpkpServList } from "src/data/servicesList/data";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/upkeeping.jpg"),
    header: "Maintaining and Upkeeping",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};

export default class MaintainingUpkeeping extends React.PureComponent {
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
                            {mainUpkpServList.map(service => (
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
