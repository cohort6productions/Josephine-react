// Modules
import * as React from "react";

// Style
import "./serviceTemplate.scss";

// Components
import Subscription from "src/components/Organisms/Subscription/subscription";
import ServiceCard from "src/components/Organisms/ServiceBox/serviceCard";

// Interfaces
import { IService } from "src/Interfaces/interfaces";
import Hero, { IHeroProps } from "src/components/Organisms/Hero/hero";

interface IServiceTemplateProps {
    hero: IHeroProps;
    serviceList: IService[];
}

export default class ServiceTemplate extends React.PureComponent<
    IServiceTemplateProps
> {
    public render() {
        return (
            <>
                <Hero {...this.props.hero} />
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
                            {this.props.serviceList.map(service => (
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
