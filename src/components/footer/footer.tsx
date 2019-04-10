import * as React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container footer-upper">
                    <h3 className="section-header">
                        BE IN THE <b className="text-highlight">FIRST</b> TO
                        KNOW
                    </h3>
                    <div className="row">
                        <div className="col-md-5 col-lg-7">
                            <p>
                                Sign up to our newsletter for events, unique
                                contents and new services! We hate spam as much
                                as you do, so we'll never send you more emails
                                than you want, and you can unsubscribe at any
                                time.
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
                                        Yes, I'd like to receive emails from
                                        Centre O
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
                                    <h5 className="footer-heading">
                                        HOW TO START
                                    </h5>
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
                                <div
                                    className="footer-links"
                                    id="footer-links-one"
                                >
                                    <div className="d-flex flex-column justify-content-start align-items-start">
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Opening a new business
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Managing and upkeeping business
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Expanding business
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Visa and licencing
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Business entering China
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Business leaving HK
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 footer-section">
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="footer-heading">
                                        OFTEN USED
                                    </h5>
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
                                <div
                                    className="footer-links"
                                    id="footer-links-two"
                                >
                                    <div className="d-flex flex-column justify-content-start align-items-start">
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            HK Company Incorporation{" "}
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Company Bank Account Opening
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Registered Office
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Conference Booking
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 footer-section">
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="footer-heading">
                                        RESOURCES
                                    </h5>
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
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Resources Library
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Handpicked Weekdly Admin News
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Our Thoughts
                                        </a>
                                        <a
                                            className="text-dark padding-bot-15"
                                            href="#"
                                        >
                                            Meetup
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
                                            <a
                                                className="text-dark padding-bot-15"
                                                href="#"
                                            >
                                                About Centre O
                                            </a>
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
                            <div className="col-sm-12 col-lg-4 mb-4 text-center">
                                <img
                                    className="centre-o-logo"
                                    src="/images/logo.png"
                                />
                            </div>
                            <div className="col-sm-12 col-lg-4 mb-4 footer-contact">
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
                            <div className="col-sm-12 col-lg-4 mb-4">
                                <h5 className="footer-heading">FOLLOW US ON</h5>
                                <span className="icon-row social-media-icons d-flex justify-content-between">
                                    <svg
                                        className="svg-inline--fa fa-twitter fa-w-16 fa-2x text-white"
                                        aria-hidden="true"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        />
                                    </svg>
                                    <svg
                                        className="svg-inline--fa fa-medium fa-w-14 fa-2x text-white"
                                        aria-hidden="true"
                                        data-prefix="fab"
                                        data-icon="medium"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
                                        />
                                    </svg>
                                    <svg
                                        className="svg-inline--fa fa-facebook fa-w-14 fa-2x text-white"
                                        aria-hidden="true"
                                        data-prefix="fab"
                                        data-icon="facebook"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                                        />
                                    </svg>
                                    <svg
                                        className="svg-inline--fa fa-instagram fa-w-14 fa-2x text-white"
                                        aria-hidden="true"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        />
                                    </svg>
                                    <svg
                                        className="svg-inline--fa fa-linkedin fa-w-14 fa-2x text-white"
                                        aria-hidden="true"
                                        data-prefix="fab"
                                        data-icon="linkedin"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                        />
                                    </svg>
                                    <svg
                                        className="svg-inline--fa fa-youtube fa-w-18 fa-2x text-white"
                                        aria-hidden="true"
                                        data-prefix="fab"
                                        data-icon="youtube"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <span>Copyright © 2013-2019 Centre O Limited </span>
                    <span>|</span>
                    <span>
                        {" "}
                        Made with{" "}
                        <img
                            className="emoji"
                            alt="💾"
                            src="https://s.w.org/images/core/emoji/11/svg/1f4be.svg"
                        />{" "}
                        by Cohort 6 Productions
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
