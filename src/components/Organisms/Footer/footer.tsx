import * as React from "react";
import { Link, withRouter } from "react-router-dom";

// Image assets
// Social
import fb from "./img/social/facebook.svg";
import ig from "./img/social/instagram.svg";
import li from "./img/social/linkedin.svg";
import md from "./img/social/medium.svg";
import tw from "./img/social/twitter.svg";
import yt from "./img/social/youtube.svg";
// Payment
import stripe from "./img/payment/stripe-logo.svg";
import paypal from "./img/payment/paypal.svg";
import visa from "./img/payment/visa.svg";
import master from "./img/payment/mastercard.svg";

// Import sitemap
import { siteMap } from "src/data/sitemap";

// Style
import "./footer.scss";

const Footer = () => {
    return (
        <footer
            className="container-fluid footer-container"
            id="footer-default"
        >
            <div className="container footer-container__link-container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 footer-section">
                        <div className="d-flex justify-content-between align-items-start">
                            <h5 className="footer-heading">HOW TO START</h5>
                            <button
                                className="btn btn-link dropdown-button d-md-none d-lg-none d-xl-none p-0"
                                data-toggle="collapse"
                                data-target="#footer-links-one"
                            >
                                <svg
                                    className="svg-inline--fa fa-chevron-down fa-w-14"
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="chevron-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="footer-links" id="footer-links-one">
                            <div className="d-flex flex-column justify-content-start align-items-start">
                                {siteMap.howToStart.map((lineItem, index) => (
                                    <div key={index} className="padding-bot-15">
                                        <Link to={lineItem.path}>
                                            <span className="text-light">
                                                {lineItem.text}
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 footer-section">
                        <div className="d-flex justify-content-between align-items-start">
                            <h5 className="footer-heading">OFTEN USED</h5>
                            <button
                                className="btn btn-link dropdown-button d-md-none d-lg-none d-xl-none p-0"
                                data-toggle="collapse"
                                data-target="#footer-links-two"
                            >
                                <svg
                                    className="svg-inline--fa fa-chevron-down fa-w-14"
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="chevron-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="footer-links" id="footer-links-two">
                            <div className="d-flex flex-column justify-content-start align-items-start">
                                {siteMap.oftenUsed.map((lineItem, index) => (
                                    <div className="padding-bot-15" key={index}>
                                        <Link to={lineItem.path}>
                                            <span className="text-light">
                                                {lineItem.text}
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 footer-section">
                        <div className="d-flex justify-content-between align-items-start">
                            <h5 className="footer-heading">RESOURCES</h5>
                            <button
                                className="btn btn-link dropdown-button d-md-none d-lg-none d-xl-none p-0"
                                data-toggle="collapse"
                                data-target="#footer-links-three"
                            >
                                <svg
                                    className="svg-inline--fa fa-chevron-down fa-w-14"
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="chevron-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="footer-links" id="footer-links-three">
                            <div className="d-flex flex-column justify-content-start align-items-start">
                                {siteMap.resources.map((lineItem, index) => (
                                    <div className="padding-bot-15" key={index}>
                                        <Link to={lineItem.path}>
                                            <span className="text-light">
                                                {lineItem.text}
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                                <a
                                    className="text-light padding-bot-15"
                                    href="https://www.meetup.com/Multi-Network-Business-Community/"
                                    target="_blank"
                                >
                                    Networking
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3 footer-section d-flex flex-column flex-md-row flex-lg-column justify-content-between justify-content-md-start justify-content-lg-between">
                        <div className="pl-md-4 pr-md-4 pl-lg-0 pr-lg-0">
                            <div className="d-flex justify-content-between align-items-start">
                                <h5 className="footer-heading">WHO WE ARE</h5>
                                <button
                                    className="btn btn-link dropdown-button d-md-none d-lg-none d-xl-none p-0"
                                    data-toggle="collapse"
                                    data-target="#footer-links-four"
                                >
                                    <svg
                                        className="svg-inline--fa fa-chevron-down fa-w-14"
                                        aria-hidden="true"
                                        data-prefix="fas"
                                        data-icon="chevron-down"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className="footer-links"
                                id="footer-links-four"
                            >
                                <div className="d-flex flex-column justify-content-start align-items-start">
                                    {siteMap.whoWeAre.map((lineItem, index) => (
                                        <div
                                            className="padding-bot-15"
                                            key={index}
                                        >
                                            <Link to={lineItem.path}>
                                                <span className="text-light">
                                                    {lineItem.text}
                                                </span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pl-md-4 pr-md-4 pl-lg-0 pr-lg-0">
                            <div className="d-flex justify-content-between align-items-start">
                                <h5 className="footer-heading">WE ACCEPT</h5>
                                <button
                                    className="btn btn-link dropdown-button d-md-none d-lg-none d-xl-none p-0"
                                    data-toggle="collapse"
                                    data-target="#footer-links-five"
                                >
                                    <svg
                                        className="svg-inline--fa fa-chevron-down fa-w-14"
                                        aria-hidden="true"
                                        data-prefix="fas"
                                        data-icon="chevron-down"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className="footer-links"
                                id="footer-links-five"
                            >
                                <div className="d-flex flex-column justify-content-start align-items-start">
                                    <span className="payment-icons icon-row text-light padding-bot-15 d-flex justify-content-between">
                                        <img
                                            src={stripe}
                                            alt="Stripe logo"
                                            className="icon-row__icon"
                                        />
                                        <img
                                            src={paypal}
                                            alt="Stripe logo"
                                            className="icon-row__icon"
                                        />
                                        <img
                                            src={visa}
                                            alt="Stripe logo"
                                            className="icon-row__icon"
                                        />
                                        <img
                                            src={master}
                                            alt="Stripe logo"
                                            className="icon-row__icon"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="footer-container__link-container__break" />
                <div className="row company-contact">
                    <div className="col-sm-12 col-lg-4  align-self-center text-center">
                        <Link to="/">
                            <img
                                className="centre-o-logo"
                                src="/images/logo.png"
                            />
                        </Link>
                    </div>
                    <div className="col-sm-12 col-lg-4  align-self-center footer-contact">
                        <div className="d-flex justify-content-start">
                            <span className="contact-icon">
                                <svg
                                    className="svg-inline--fa fa-map-marker-alt fa-w-12"
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="map-marker-alt"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                    />
                                </svg>
                            </span>
                            <div>
                                <span className="text-light">
                                    14/F China Hong Kong Tower, 8 Hennessy Road
                                </span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start text-light">
                            <span className="contact-icon">
                                <svg
                                    className="svg-inline--fa fa-phone fa-w-16"
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="phone"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                    />
                                </svg>
                            </span>
                            <span className="text-light">+852 6060 6060</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 align-self-center ">
                        <h5 className="footer-heading">FOLLOW US ON</h5>
                        <div className="icon-row social-media-icons d-flex justify-content-between">
                            <a
                                href="https://www.facebook.com/centreobusinesscentre/"
                                className="icon-row__link"
                                rel="external"
                                title="Centre O's Facebook page"
                            >
                                <img
                                    src={fb}
                                    alt="Facebook logo"
                                    className="icon-row__icon"
                                />
                            </a>
                            <a
                                href="#"
                                className="icon-row__link"
                                rel="external"
                                title="Centre O's Instagram"
                            >
                                <img
                                    src={ig}
                                    alt="Instagram logo"
                                    className="icon-row__icon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/centre-o/"
                                className="icon-row__link"
                                rel="external"
                                title="Centre O's LinkedIn"
                            >
                                <img
                                    src={li}
                                    alt="LinkedIn logo"
                                    className="icon-row__icon"
                                />
                            </a>
                            <a
                                href="https://medium.com/centreo"
                                className="icon-row__link"
                                rel="external"
                                title="Centre O's Medium Publication"
                            >
                                <img
                                    src={md}
                                    alt="Medium logo"
                                    className="icon-row__icon"
                                />
                            </a>
                            <a
                                href="https://twitter.com/centre_o"
                                className="icon-row__link"
                                rel="external"
                                title="Centre O's Twitter"
                            >
                                <img
                                    src={tw}
                                    alt="Twitter logo"
                                    className="icon-row__icon"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCwDkjGptwCDw1YxV3hsLmHw"
                                className="icon-row__link"
                                rel="external"
                                title="Centre O's Youtube Channel"
                            >
                                <img
                                    src={yt}
                                    alt="Youtube logo"
                                    className="icon-row__icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark footer-container__bottom">
                <div className="container pt-3 pb-3">
                    <span className="text-light">
                        Copyright © 2013-2019 Centre O Limited{" "}
                    </span>
                    <span className="text-light">|</span>
                    <span className="text-light">
                        {" "}
                        Made with{" "}
                        <img
                            className="emoji"
                            alt="💾"
                            src="https://s.w.org/images/core/emoji/11/svg/1f4be.svg"
                        />{" "}
                        by{" "}
                        <a
                            href="https://www.cohort6productions.com"
                            target="_blank"
                        >
                            <span className="text-light">
                                Cohort 6 Productions
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default withRouter(Footer);
