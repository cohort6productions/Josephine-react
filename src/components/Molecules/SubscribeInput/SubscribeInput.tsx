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
                <div id="mc_embed_signup_scroll" className="input-group d-flex justify-content-between">
                    <span className="email-icon d-flex justify-content-center align-items-center">
                        <svg className="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/>
                        </svg>
                    </span>
                    <input
                        type="email"
                        name="EMAIL"
                        className="email email-input"
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
                            hidden={true}
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
