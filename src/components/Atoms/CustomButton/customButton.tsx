// Module
import * as React from "react";
import { Link } from "react-router-dom";

// Style
import "./customButton.scss";

interface ICustomButtonProps {
    text?: string;
    link: string;
    variation: "primitive" | "theme" | "affirmative" | "alertwarning";
}

export default class CustomButton extends React.PureComponent<
    ICustomButtonProps
> {
    public render() {
        return (
            // <a href={this.props.link}>
            <Link to={this.props.link}>
                <button
                    className={"custom-button" + " " + this.props.variation}
                >
                    <span className="button-text text-light">
                        {this.props.text ? this.props.text : "Click Here"}
                    </span>
                </button>
            </Link>
            // </a>
        );
    }
}
