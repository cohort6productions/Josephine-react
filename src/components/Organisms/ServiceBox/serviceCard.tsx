// Modules
import * as React from "react";

// Style
import "./serviceCard.scss";

// Components
import Button from "reactstrap/lib/Button";

// Interfaces
import { IServiceItem } from "src/Interfaces/interfaces";
import { getService } from 'src/helper/helper';

export default class ServiceCard extends React.PureComponent<IServiceItem> {
    public render() {
        return (
            <div className="service-rol col-sm-12 col-md-6 col-lg-4 card-deck">
                <div className="service-card card">
                    <img
                        src={this.props.img}
                        alt={this.props.name}
                        className="service-card__img rounded card-img-top"
                    />
                    <div className="service-card__body card-body">
                        <h3 className="service-card__body__header">{this.props.name}</h3>
                        <span>{this.props.description}</span>
                    </div>
                    <div className="service-card__footer rounded card-footer">
                        <div className="service-card__footer__pricingBox rounded w-100">
                            <span className="text-light all-cap">
                                {!this.props.orderNow
                                    ? "Start from " + this.props.pricing.price
                                    : this.props.pricing.price}
                            </span>
                        </div>

                        {this.props.orderNow ? (

                            <Button className="service-card__footer__cta rounded w-100"
                                data-schemeid={this.props.pricing.schemeId}
                                data-scheme={this.props.pricing.scheme}
                                onClick={getService}>
                                {/* <span className="button-text text-light all-cap"> */}
                                Order now
                                    {/* </span> */}
                            </Button>

                        ) : (
                                <a href="mailto:sales@centreo.hk">
                                    <Button className="service-card__footer__cta rounded w-100">
                                        <span className="button-text text-light all-cap">
                                            Contact Us
                                    </span>
                                    </Button>
                                </a>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
