// Module
import * as React from "react";

// Style
import "./hero.scss";

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
        "linear-gradient(180deg, #000000 5.42%, rgba(85, 72, 100, 0.3) 95.01%), url(" +
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
                    className="jumbotron hero d-flex align-items-center"
                    style={this.props.style}
                >
                    <div className="container">
                        <h1 className="hero__header text-light">
                            {this.props.header}
                        </h1>

                        {this.props.subLine ? (
                            <h3 className="hero__subheader text-light">
                                {this.props.subLine}
                            </h3>
                        ) : null}
                        {this.props.buttonLink ? (
                            <a href={this.props.buttonLink}>Contact Us</a>
                        ) : null}
                    </div>
                </div>
            </header>
        );
    }
}
