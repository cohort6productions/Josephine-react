// Module
import * as React from "react";

// Style
import "./a-trailer.scss";

// Components
import CustomButton from "src/components/Atoms/CustomButton/customButton";
import { Modal, ModalBody } from "reactstrap";

export default class Trailer extends React.Component<{}, { modal: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    public toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    public render() {
        return (
            <div className="container-fluid section-padding-tb96">
                <div className="container rounded" id="trailer">
                    <h2 className="all-cap text-light">
                        <bdi className="text-highlight">Centre O</bdi> is a
                        one-stop centre for all business admin needs.
                    </h2>
                    <p className="text-light">
                        From incorporating business to visa applications, we
                        have specialists, tools and connections cater to your
                        needs. Our mission is to help entrepreneures and
                        businesses to focus on growing their businesses without
                        getting distracted.{" "}
                    </p>
                    <CustomButton
                        text="Watch the trailer"
                        fnTrigger={this.toggle}
                        link=""
                        variation="theme"
                    />
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        centered={true}
                        className="pop-modal"
                    >
                        <ModalBody>
                            <div className="embed-responsive embed-responsive-16by9 w-100">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/xqzML__jKyU"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                />
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}
