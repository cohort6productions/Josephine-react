// Module
import * as React from "react";

// Style
import "./member.scss";

// Image assets
import lk from "./img/linkedin.svg";
import md from "./img/medium.svg";

interface IMemberProps {
    name: string;
    image: any;
    position: string;
    description: string;
    socialLink: { li: string; md: string };
}

export default class Member extends React.PureComponent<IMemberProps> {
    public render() {
        return (
            <div className="page-container">
                <div className="container-fluid section-padding-tb96">
                    <div className="container">
                        <div className="row member-container align-items-center">
                            <img
                                src={this.props.image}
                                alt={this.props.name}
                                className="col-sm-12 col-md-6 member-container__img"
                            />
                            <div className="member-container__body col-sm-12 col-md-6">
                                {" "}
                                <h2>{this.props.name}</h2>
                                <small>{this.props.position}</small>
                                <div className="member-container__icon-row">
                                    {this.props.socialLink.li !== "" && (
                                        <a href={this.props.socialLink.li}>
                                            <img
                                                src={lk}
                                                alt="LinkedIn logo"
                                                className="member-container__icon-row__icons mr-3"
                                            />
                                        </a>
                                    )}
                                    {this.props.socialLink.md !== "" && (
                                        <a href={this.props.socialLink.md}>
                                            <img
                                                src={md}
                                                alt="Medium logo"
                                                className="member-container__icon-row__icons"
                                            />
                                        </a>
                                    )}
                                </div>
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
