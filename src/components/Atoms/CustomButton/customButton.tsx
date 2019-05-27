// Module
import * as React from "react";
import { Link } from "react-router-dom";

// Style
import "./customButton.scss";

// Components
import Button from "reactstrap/lib/Button";

// Variation of the button
// 1. Trigger <Link>
// 2. Hyperlink to external link
// 3. Trigger a custom function
// 4. A button

interface ICustomButtonProps {
    text?: string;
    fnTrigger?: any;
    key?: string;
    id?: string;
    link: string;
    variation: "primitive" | "theme" | "affirmative" | "alertwarning";
}

export default class CustomButton extends React.PureComponent<
    ICustomButtonProps
    > {
    public button() {
        return (
            <Button
                className={"custom-button" + " " + this.props.variation}
                onClick={this.props.fnTrigger}
                key={this.props.key ? this.props.key : ""}
                id={this.props.id}
            >
                <span className="button-text text-light">
                    {this.props.text ? this.props.text : "Click Here"}
                </span>
            </Button>
        );
    }
    public render() {
        let buttonType: "int-link" | "ext-href" | "primitive";
        if (
            this.props.link.match("^http") ||
            this.props.link.match("^mailto")
        ) {
            buttonType = "ext-href";
        } else if (this.props.link.match("^/")) {
            buttonType = "int-link";
        } else {
            buttonType = "primitive";
        }

        return (
            <>
                {buttonType === "ext-href" && (
                    <a href={this.props.link}>{this.button()}</a>
                )}
                {buttonType === "int-link" && (
                    <Link to={this.props.link}>{this.button()}</Link>
                )}
                {buttonType === "primitive" && this.button()}
            </>
        );
    }
}
