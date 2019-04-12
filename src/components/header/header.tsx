import * as React from "react";

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
                    } navbar navbar-light bg-light fixed-top`}
                >
                    <a className="navbar-brand" href="#">
                        <img src="/images/logo.png" alt="CentreO" />
                    </a>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;
