import * as React from "react";

export interface IHeaderStyle {
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    height: number;
}

export interface IHeroProps {
    style: IHeaderStyle;
    header: string;
    subLine: string;
    buttonLink?: string;
}

export const headerStyle = (imgLoc: string): IHeaderStyle => ({
    backgroundImage:
        "linear-gradient(180deg, #000000 45.42%, rgba(85, 72, 100, 0.3) 95.01%), url(" +
        imgLoc +
        ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 600
});

export default class Hero extends React.PureComponent<IHeroProps> {
    public render() {
        return (
            <header>
                <div
                    className="heaeder d-flex align-items-center"
                    style={this.props.style}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-light">
                                    {this.props.header}
                                </h1>
                            </div>
                            {this.props.subLine ? (
                                <div className="col-12">
                                    <span className="text-light">
                                        {this.props.subLine}
                                    </span>
                                </div>
                            ) : null}
                            {this.props.buttonLink ? (
                                <div className="col-12">
                                    <a href={this.props.buttonLink}>
                                        Contact Us
                                    </a>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
