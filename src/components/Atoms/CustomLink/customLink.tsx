// Module
import * as React from "react";
import { Link } from "react-router-dom";

// Style
import "./customLink.scss";
import arrow from "./img/arrow-pointing-to-right.svg";

// The link has following variation
// 1. With custom text or just "Click here"
// 2. Text color can either be dark or light
// 3. Either there is an arrow at the end or not
// 4. Either the link is wrapped with a Router <Link> or not

interface ICustomLinkProps {
    text?: string;
    link: string;
    txtCol?: "light" | "dark";
    variation: "default" | "r-arrow";
}

export default class CustomLink extends React.PureComponent<ICustomLinkProps> {
    public coreLink() {
        return (
            <div className="cust-link">
                <span
                    className={
                        this.props.txtCol === "light"
                            ? "button-text text-light"
                            : "button-text"
                    }
                >
                    {this.props.text ? this.props.text : "Click Here"}
                </span>

                {this.props.variation === "r-arrow" && (
                    <div className="custom-link__icon-container">
                        <img
                            className="custom-link__icon-container__icon"
                            src={arrow}
                            alt="Arrow pointing right"
                        />
                    </div>
                )}
            </div>
        );
    }

    public render() {
        return (
            <>
                {/* If props.link === "", then there is no <Link> wrapper */}
                {this.props.link !== "" ? (
                    <Link to={this.props.link}>{this.coreLink()}</Link>
                ) : (
                    this.coreLink()
                )}
            </>
        );
    }
}
