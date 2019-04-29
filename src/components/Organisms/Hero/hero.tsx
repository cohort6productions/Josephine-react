// Module
import * as React from "react";

// Style
import "./hero.scss";
import CustomButton from "src/components/Atoms/CustomButton/customButton";

export interface IHeaderStyle {
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    height?: number;
}

export interface IHeroProps {
    style: IHeaderStyle;
    header: string;
    subLine: string;
    buttonLink?: string;
}

export const headerStyle = (imgLoc: string): IHeaderStyle => ({
    backgroundImage:
        "linear-gradient(180deg, #222222 0.42%, rgba(85, 72, 100, 0.3) 90.01%), url(" +
        imgLoc +
        ")",
    backgroundPosition: "center",
    backgroundSize: "cover"
});

export default class Hero extends React.PureComponent<IHeroProps> {
    public render() {
        return (
            <header>
                <div
                    className="hero d-flex align-items-center"
                    style={this.props.style}
                >
                    <div className="container px-3">
                        <h1 className="hero__header text-light">
                            {this.props.header}
                        </h1>

                        {this.props.subLine ? (
                            <p className="hero__subheader body-short-texts text-light">
                                {this.props.subLine}
                            </p>
                        ) : null}
                        {this.props.buttonLink && (
                            <CustomButton
                                link="mailto:sales@centreo.hk"
                                variation="theme"
                            />
                        )}
                    </div>
                </div>
            </header>
        );
    }
}
