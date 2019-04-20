import * as React from "react";
import CustomButton from "src/components/Atoms/CustomButton/customButton";
import { Link } from "react-router-dom";

// Style
import "./header.scss";

// Sitemap
import { siteMap } from "src/data/sitemap";

// Components
import {
    Collapse,
    Navbar,
    NavbarToggler,
    // NavbarBrand,
    Nav,
    NavItem,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    // NavLink
} from "reactstrap";
import { CustomNavLink } from "src/components/Atoms/CustomLink/customLink";

class Header extends React.Component<{}, { isTop: boolean; isOpen: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isTop: true,
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }
    public componentDidMount() {
        document.addEventListener("scroll", () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop });
            }
        });
    }

    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public render() {
        return (
            <React.Fragment>
                {/* <nav
                    className={`${
                        this.state.isTop ? "bg-transparent" : "up"
                    } pt-3 pb-3 navbar navbar-light bg-light fixed-top`}
                >
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="CentreO" />
                    </Link>

                    <CustomButton
                        text="Book conference room"
                        variation="theme"
                        link="/conference-room"
                    />
                </nav> */}
                <Navbar
                    className="navagate"
                    // fixed={"top"}
                    light={true}
                    expand="md"
                >
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="CentreO" />
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="ml-auto" navbar={true}>
                            <NavItem>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle
                                        className="m-1"
                                        color="null"
                                    >
                                        <CustomNavLink
                                            link="/"
                                            text="How To Start"
                                            variation="default"
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {siteMap.howToStart.map(
                                            (listItem, index) => (
                                                <DropdownItem key={index}>
                                                    <Link to={listItem.path}>
                                                        {listItem.text}
                                                    </Link>
                                                </DropdownItem>
                                            )
                                        )}
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </NavItem>

                            <NavItem>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle
                                        className="m-1"
                                        color="null"
                                    >
                                        <CustomNavLink
                                            link="/"
                                            text="Often Used"
                                            variation="default"
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {siteMap.oftenUsed.map(
                                            (listItem, index) => (
                                                <DropdownItem key={index}>
                                                    <Link to={listItem.path}>
                                                        {listItem.text}
                                                    </Link>
                                                </DropdownItem>
                                            )
                                        )}
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </NavItem>
                            <NavItem>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle
                                        className="m-1"
                                        color="null"
                                    >
                                        <CustomNavLink
                                            link="/"
                                            text="Resources"
                                            variation="default"
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {siteMap.resources.map(
                                            (listItem, index) => (
                                                <DropdownItem key={index}>
                                                    <Link to={listItem.path}>
                                                        {listItem.text}
                                                    </Link>
                                                </DropdownItem>
                                            )
                                        )}
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </NavItem>
                            <NavItem>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle
                                        className="m-1"
                                        color="null"
                                    >
                                        <CustomNavLink
                                            link="/"
                                            text="Who We Are"
                                            variation="default"
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {siteMap.whoWeAre.map(
                                            (listItem, index) => (
                                                <DropdownItem key={index}>
                                                    <Link to={listItem.path}>
                                                        {listItem.text}
                                                    </Link>
                                                </DropdownItem>
                                            )
                                        )}
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </NavItem>

                            <NavItem>
                                <CustomButton
                                    text="Book conference room"
                                    variation="theme"
                                    link="/conference-room"
                                />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
