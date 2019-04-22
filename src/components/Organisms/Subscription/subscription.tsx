import * as React from "react";

import "./subscription.scss";

import SubscribeInputBox from "src/components/Molecules/SubscribeInput/SubscribeInput";

export default class Subscription extends React.Component<{}> {
    constructor(props: {}) {
        super(props);

        // this.state = {
        //     subEmail: ""
        // };
    }

    // public handleFormChange = (e: any) => {
    //     this.setState({
    //         state: e.target.value
    //     });
    // };

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
                                <SubscribeInputBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
