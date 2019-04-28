import * as React from "react";

import "./SubscribeInput.scss";

import CustomButton from "src/components/Atoms/CustomButton/customButton";

export default class SubscribeInputBox extends React.Component<{}> {
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
                    <div className="absolute-left" aria-hidden="true">
                        <input
                            type="text"
                            name="b_8424814fbb0d8592696b4bfe7_510bab0774"
                            value=""
                        />
                    </div>
                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    {/* <Button>Submit</Button> */}
                    <CustomButton
                        text="Stay updated"
                        link=""
                        variation="theme"
                    />
                </div>
            </form>
        );
    }
}
