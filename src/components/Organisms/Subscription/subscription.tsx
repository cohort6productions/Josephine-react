import * as React from "react";

import "./subscription.scss";
import Button from "reactstrap/lib/Button";

export default class Subscription extends React.Component<{}> {
    constructor(props: {}) {
        super(props);

        this.state = {
            subEmail: ""
        };
    }

    public handleFormChange = (e: any) => {
        this.setState({
            state: e.target.value
        });
    };

    public render() {
        return (
            <div className="container-fluid section-padding-tb96">
                <div className="container footer-upper ">
                    <h3 className="section-header">
                        BE IN THE <b className="text-highlight">FIRST</b> TO
                        KNOW
                    </h3>
                    <div className="row">
                        <div className="col-md-5 col-lg-7">
                            <p>
                                Sign up to our newsletter for events, unique
                                contents and new services! We hate spam as much
                                as you do, so we'll never spam you more emails
                                than you want, and you can unsubscribe at any
                                time.
                            </p>
                        </div>
                        <div className="col-md-7 col-lg-5">
                            <div id="mc_embed_signup">
                                <form
                                    action="https://wordpress.us12.list-manage.com/subscribe/post?u=8424814fbb0d8592696b4bfe7&amp;id=510bab0774"
                                    method="post"
                                    id="mc-embedded-subscribe-form"
                                    name="mc-embedded-subscribe-form"
                                    className="validate"
                                    target="_blank"
                                >
                                    <div id="mc_embed_signup_scroll">
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            className="email"
                                            id="mce-EMAIL"
                                            required={true}
                                            placeholder="elon@tesla.com"
                                            onChange={this.handleFormChange}
                                        />
                                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                        <div
                                            className="absolute-left"
                                            aria-hidden="true"
                                        >
                                            <input
                                                type="text"
                                                name="b_8424814fbb0d8592696b4bfe7_510bab0774"
                                                value=""
                                            />
                                        </div>
                                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                        {/* <div className="clear">
                                            <input
                                                type="submit"
                                                value="Subscribe"
                                                name="subscribe"
                                                id="mc-embedded-subscribe"
                                                className="button"
                                            />
                                        </div> */}
                                        <Button>Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
