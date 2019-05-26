// Modules
import * as React from "react";

// Style
import "./serviceCard.scss";

// Components
import Button from "reactstrap/lib/Button";

// Interfaces
import { IService } from "src/Interfaces/general";

export default class ServiceCard extends React.PureComponent<IService> {
    public render() {
        return (
            <div className="service-rol col-sm-12 col-md-6 col-lg-4">
                <div className="service-card">
                    <img
                        src={this.props.img}
                        alt={this.props.itemName}
                        className="service-card__img rounded"
                    />
                    <div className="service-card__body">
                        <h3 className="">{this.props.itemName}</h3>
                        <span>{this.props.description}</span>
                    </div>
                    <div className="service-card__footer rounded">
                        <div className="service-card__footer__pricingBox rounded w-100">
                            <span className="text-light all-cap">
                                {!this.props.orderNow
                                    ? "Start from " + this.props.price
                                    : this.props.price}
                            </span>
                        </div>

                        {this.props.orderNow ? (

                            <Button className="service-card__footer__cta rounded w-100" >
                                <span className="button-text text-light all-cap">
                                    Order now
                                    </span>
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
