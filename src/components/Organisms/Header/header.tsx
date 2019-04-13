import * as React from "react";
import CustomButton from "src/components/Atoms/CustomButton/customButton";

class Header extends React.Component<{}, { isTop: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isTop: true
        };
    }
    public componentDidMount() {
        document.addEventListener("scroll", () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop });
            }
        });
    }
    public render() {
        return (
            <React.Fragment>
                <nav
                    className={`${
                        this.state.isTop ? "bg-transparent" : "up"
                    } pt-3 pb-3 navbar navbar-light bg-light fixed-top justify-content-between`}
                >
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.png" alt="CentreO" />
                    </a>
                    <CustomButton
                        text="Book conference room"
                        variation="theme"
                        link="/conference-room"
                    />
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;
