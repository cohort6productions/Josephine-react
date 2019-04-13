// Module
import * as React from "react";

// Style
import "./customButton.scss";
// import { Link } from "react-router-dom";

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
            <a href={this.props.link}>
                <button
                    className={"custom-button" + " " + this.props.variation}
                >
                    <span className="button-text text-light">
                        {this.props.text ? this.props.text : "Click Here"}
                    </span>
                </button>
            </a>
        );
    }
}
