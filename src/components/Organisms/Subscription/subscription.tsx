import * as React from "react";

const Subscription = () => (
    <div className="container-fluid section-padding-tb96">
        <div className="container footer-upper ">
            <h3 className="section-header">
                BE IN THE <b className="text-highlight">FIRST</b> TO KNOW
            </h3>
            <div className="row">
                <div className="col-md-5 col-lg-7">
                    <p>
                        Sign up to our newsletter for events, unique contents
                        and new services! We hate spam as much as you do, so
                        we'll never send you more emails than you want, and you
                        can unsubscribe at any time.
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
                                Yes, I'd like to receive emails from Centre O
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Subscription;
