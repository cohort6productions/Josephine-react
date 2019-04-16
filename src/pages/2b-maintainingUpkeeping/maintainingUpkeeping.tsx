// Modules
import * as React from "react";

// Style
import "./maintainingUpkeeping.scss";

// Image assets
import compsec from "./img/compSec.jpg";
import regOffice from "./img/regOffice.jpg";
import incorp from "./img/compIncorp.jpg";
import repOffice from "./img/hkRep.jpg";

// Components
import Hero, {
    IHeroProps,
    headerStyle
} from "src/components/Organisms/Hero/hero";
import Subscription from "src/components/Organisms/Subscription/subscription";
import ServiceCard from "src/components/Organisms/ServiceBox/serviceCard";

// Interfaces
import { IService } from "src/Interfaces/general";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/upkeeping.jpg"),
    header: "Maintaining and Upkeeping",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};

const maintainingUpkeepingServices: IService[] = [
    {
        itemName: "Comp. Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "Reg. Office",
        img: regOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "HK Com. Incorp.",
        img: incorp,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "HK Rep. Office",
        img: repOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    }
];

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
                            {maintainingUpkeepingServices.map(service => (
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
