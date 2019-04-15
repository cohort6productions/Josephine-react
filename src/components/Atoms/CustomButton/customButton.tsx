// Module
import * as React from "react";
import { Link } from "react-router-dom";

// Style
import "./customButton.scss";

interface ICustomButtonProps {
    text?: string;
    fnTrigger?: () => void;
    link: string;
    variation: "primitive" | "theme" | "affirmative" | "alertwarning";
}

export default class CustomButton extends React.PureComponent<
    ICustomButtonProps
> {
    public textArea() {
        return (
            <span className="button-text text-light">
                {this.props.text ? this.props.text : "Click Here"}
            </span>
        );
    }
    public render() {
        return (
            <>
                {this.props.fnTrigger ? (
                    <button
                        className={"custom-button" + " " + this.props.variation}
                        onClick={this.props.fnTrigger}
                    >
                        {this.textArea()}
                    </button>
                ) : (
                    <Link to={this.props.link}>
                        <button
                            className={
                                "custom-button" + " " + this.props.variation
                            }
                        >
                            {this.textArea()}
                        </button>
                    </Link>
                )}
            </>
        );
    }
}
