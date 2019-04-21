import * as React from "react";
import "./newsletter.scss";

export default class Newsletter extends React.PureComponent {
    public render() {
        return (
            <div className="container-fluid section-padding-tb96">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-lg-6">
                            <div className="sub-header">
                                <h1 className="sub-header__text all-cap">
                                    What is new in{" "}
                                    <bdi className="text-highlight">
                                        running a business
                                    </bdi>{" "}
                                    in Hong Kong
                                </h1>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 ">
                            <div className="sub-content">
                                <div className="sub-cont__contet-cont__bodytxt">
                                    <p>
                                        Running a business is energy consuming.
                                    </p>
                                    <p>
                                        Especially when things are all over the
                                        place that aren’t even remotely related
                                        to the success of the company, yet so
                                        important that your business can’t live
                                        without them.{" "}
                                    </p>
                                    <p>
                                        We send email every second Sunday with
                                        necessary information from 50+ source of
                                        information (government news outlet,
                                        business registeration office, the
                                        official office of the local seceraty,
                                        Inland Revenue Department of Hong Kong)
                                        from the past two weeks.
                                    </p>
                                    <p>
                                        I’m Josephine Lau, the founder at Center
                                        O. If you are someone who does not want
                                        to miss out on making sure your own
                                        business runs smoothly without spending
                                        all day scourging for imformation - you
                                        should check this out.
                                    </p>
                                </div>
                                <div className="sub-cont__content-cont__subbox">
                                    <div id="mc_embed_signup">
                                        <form
                                            action="https://wixsite.us12.list-manage.com/subscribe/post?u=8424814fbb0d8592696b4bfe7&amp;id=42ea2d9e03"
                                            method="post"
                                            id="mc-embedded-subscribe-form"
                                            name="mc-embedded-subscribe-form"
                                            className="validate"
                                            target="_blank"
                                        >
                                            <div id="mc_embed_signup_scroll">
                                                <h2>Subscribe</h2>
                                                <div className="mc-field-group">
                                                    <label>
                                                        Email Address{" "}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value=""
                                                        name="EMAIL"
                                                        className="required email"
                                                        id="mce-EMAIL"
                                                    />
                                                </div>
                                                <div
                                                    id="mce-responses"
                                                    className="clear "
                                                >
                                                    <div
                                                        className="response"
                                                        id="mce-error-response"
                                                    />
                                                    <div
                                                        className="response"
                                                        id="mce-success-response"
                                                    />
                                                </div>
                                                {/* Prevent bot start */}
                                                <div
                                                    hidden={true}
                                                    aria-hidden="true"
                                                >
                                                    <input
                                                        type="text"
                                                        name="b_8424814fbb0d8592696b4bfe7_42ea2d9e03"
                                                        value=""
                                                    />
                                                </div>
                                                {/* Prevent bot end */}
                                                <div className="clear">
                                                    <input
                                                        type="submit"
                                                        value="Subscribe"
                                                        name="subscribe"
                                                        id="mc-embedded-subscribe"
                                                        className="button"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="sub-cont__content-cont__icons">
                                    <ul>
                                        <li>Ok</li>
                                        <li>ok</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
