// Module
import * as React from "react";

// Style
import "./customLink.scss";

interface ICustomLinkProps {
    text?: string;
    link: string;
    variation: "default" | "arrowext";
}

export default class CustomLink extends React.PureComponent<ICustomLinkProps> {
    public render() {
        return (
            <a className={"custom-link"} href={this.props.link}>
                <span className="button-text">
                    {this.props.text ? this.props.text : "Click Here"}
                </span>
            </a>
        );
    }
}
