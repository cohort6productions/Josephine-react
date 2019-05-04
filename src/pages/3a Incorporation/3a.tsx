import * as React from "react";

import "./style.scss";

// Component imports
import MasterForm from "./components/MasterForm";
import Hero, {
    IHeroProps,
    headerStyle
} from "src/components/Organisms/Hero/hero";

const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/incorporation.jpg"),
    header: "SETUP YOUR COMPANY",
    subLine: "First step towards success to stay focus."
};

export default class IncorporationProcess extends React.Component {
    public render() {
        return (
            <div id="incorporation">
                <Hero {...heroProps} />
                <MasterForm />
            </div>
        );
    }
}
