// Module
import * as React from "react";
import { Link } from "react-router-dom";

// Style
import "./customLink.scss";
import arrow from "./img/arrow-pointing-to-right.svg";

interface ICustomLinkProps {
    text?: string;
    link: string;
    variation: "default" | "arrowext";
}

export default class CustomLink extends React.PureComponent<ICustomLinkProps> {
    public render() {
        return (
            <Link to={this.props.link} className="custom-link">
                <span className="button-text">
                    {this.props.text ? this.props.text : "Click Here"}
                </span>
                <div className="custom-link__icon-container">
                    <img
                        className="custom-link__icon-container__icon"
                        src={arrow}
                        alt="Arrow pointing right"
                    />
                </div>
            </Link>
        );
    }
}
