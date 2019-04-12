import * as React from "react";
import { Link } from "react-router-dom";

// Image assets
import fb from "./img/social/facebook.svg";
import ig from "./img/social/instagram.svg";
import li from "./img/social/linkedin.svg";
import md from "./img/social/medium.svg";
import tw from "./img/social/twitter.svg";
import yt from "./img/social/youtube.svg";

// Style
import "./footer.scss";

const siteMap = {
    howToStart: [
        { path: "/", text: "Opening a new business" },
        { path: "/", text: "Maintaining & upkeeping" },
        { path: "/", text: "Expanding business" },
        { path: "/", text: "Visa & Licencing" },
        { path: "/", text: "Business entering China" },
        { path: "/", text: "Business leaving Hong Kong" }
    ],
    oftenUsed: [
        { path: "/incorporation", text: "HK company incorporation" },
        { path: "/bank-account", text: "Open bank account" },
        { path: "/registered-office", text: "Registered office" },
        { path: "/conference-room", text: "Book conference room" }
    ],
    resources: [
        { path: "/resources", text: "Resources library" },
        { path: "/subscribe", text: "Handpicked weekly news" },
        { path: "/", text: "Our thoughts" }
    ],
    whoWeAre: [{ path: "/about-us", text: "About our team" }]
};

const Footer = () => {
    return (
        <footer>
            <div className="container footer-upper">
                <h3 className="section-header">
                    BE IN THE <b className="text-highlight">FIRST</b> TO KNOW
                </h3>
                <div className="row">
                    <div className="col-md-5 col-lg-7">
                        <p>
                            Sign up to our newsletter for events, unique
                            contents and new services! We hate spam as much as
                            you do, so we'll never send you more emails than you
                            want, and you can unsubscribe at any time.
                        </p>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <form id="email-subscribe-form">
                            <div className="input-group d-flex justify-content-between">
                                <span className="email-icon d-flex justify-content-center align-items-center">
                                    <svg
                                        className="svg-inline--fa fa-envelope fa-w-16"
                                        aria-hidden="true"
                                        data-prefix="far"
                                        data-icon="envelope"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                                        />
                                    </svg>
                                </span>
                                <input
                                    className="email-input"
                                    type="text"
                                    placeholder="What's your email address?"
                                />
                                <input
                                    className="btn btn-warning"
                                    type="submit"
                                    value="SUBSCRIBE"
                                />
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>
                                    Yes, I'd like to receive emails from Centre
                                    O
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <div className="container-fluid footer-lower">
                <div className="container">
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
                                    {siteMap.howToStart.map(
                                        (lineItem, index) => (
                                            <span
                                                key={index}
                                                className="text-dark padding-bot-15"
                                            >
                                                <Link to={lineItem.path}>
                                                    {lineItem.text}
                                                </Link>
                                            </span>
                                        )
                                    )}
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
                                    {siteMap.oftenUsed.map(
                                        (lineItem, index) => (
                                            <span
                                                key={index}
                                                className="text-dark padding-bot-15"
                                            >
                                                <Link to={lineItem.path}>
                                                    {lineItem.text}
                                                </Link>
                                            </span>
                                        )
                                    )}
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
                            <div
                                className="footer-links"
                                id="footer-links-three"
                            >
                                <div className="d-flex flex-column justify-content-start align-items-start">
                                    {siteMap.resources.map(
                                        (lineItem, index) => (
                                            <span
                                                key={index}
                                                className="text-dark padding-bot-15"
                                            >
                                                <Link to={lineItem.path}>
                                                    {lineItem.text}
                                                </Link>
                                            </span>
                                        )
                                    )}
                                    <a
                                        className="text-dark padding-bot-15"
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
                                    <h5 className="footer-heading">
                                        WHO WE ARE
                                    </h5>
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
                                        {siteMap.whoWeAre.map(
                                            (lineItem, index) => (
                                                <span
                                                    key={index}
                                                    className="text-dark padding-bot-15"
                                                >
                                                    <Link to={lineItem.path}>
                                                        {lineItem.text}
                                                    </Link>
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="pl-md-4 pr-md-4 pl-lg-0 pr-lg-0">
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="footer-heading">
                                        WE ACCEPT
                                    </h5>
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
                                        <span className="payment-icons icon-row text-dark padding-bot-15 d-flex justify-content-between">
                                            <svg
                                                className="svg-inline--fa fa-paypal fa-w-12 fa-2x"
                                                aria-hidden="true"
                                                data-prefix="fab"
                                                data-icon="paypal"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512"
                                                data-fa-i2svg=""
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
                                                />
                                            </svg>
                                            <svg
                                                className="svg-inline--fa fa-stripe fa-w-20 fa-2x"
                                                aria-hidden="true"
                                                data-prefix="fab"
                                                data-icon="stripe"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                                data-fa-i2svg=""
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9m-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4h-45.9zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7m-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8M346.4 124v36.2l-44.6 9.5v-36.2l44.6-9.5m-44.5 59.2h44.6v153.2h-44.6V183.2zm-47.8 13.1c10.4-19.1 31.1-15.2 37.1-13.1V224c-5.7-1.8-23.4-4.5-33.9 9.3v103.1H213V183.2h38.4l2.7 13.1m-89-13.1h33.7V221h-33.7v63.2c0 26.2 28 18 33.7 15.7v33.8c-5.9 3.2-16.6 5.9-31.2 5.9-26.3 0-46.1-17-46.1-43.3l.2-142.4 43.3-9.2.1 38.5zM44.9 228.3c0 20 67.9 10.5 67.9 63.4 0 32-25.4 47.8-62.3 47.8-15.3 0-32-3-48.5-10.1v-40c14.9 8.1 33.9 14.2 48.6 14.2 9.9 0 17-2.7 17-10.9 0-21.2-67.5-13.2-67.5-62.4 0-31.4 24-50.2 60-50.2 14.7 0 29.4 2.3 44.1 8.1V230c-13.5-7.3-30.7-11.4-44.2-11.4-9.3.1-15.1 2.8-15.1 9.7"
                                                />
                                            </svg>
                                            <svg
                                                className="svg-inline--fa fa-cc-visa fa-w-18 fa-2x"
                                                aria-hidden="true"
                                                data-prefix="fab"
                                                data-icon="cc-visa"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                                data-fa-i2svg=""
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
                                                />
                                            </svg>
                                            <svg
                                                className="svg-inline--fa fa-cc-mastercard fa-w-18 fa-2x"
                                                aria-hidden="true"
                                                data-prefix="fab"
                                                data-icon="cc-mastercard"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                                data-fa-i2svg=""
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
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
                                    <span className="text-dark">
                                        14/F China Hong Kong Tower
                                    </span>
                                    <span className="text-dark">
                                        8 Hennessy Road
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start text-dark">
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
                                <span>+852 6060 6060</span>
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
            </div>
            <div className="container-fluid bg-dark">
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

export default Footer;
