import * as React from 'react';

const headerImage = {
    'backgroundImage': 'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0), rgba(255, 255, 255, 1)), url(/images/img_dummy5.jpg)',
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'height': 600
}
class Header extends React.Component<{}, { isTop: boolean }> {
    constructor(props: {}) {
        super(props)
        this.state = {
            isTop: true
        }
    }
    public componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
    public render() {
        return (
            <React.Fragment>
                {/* <nav className={`${this.state.isTop ? 'bg-transparent' : 'up'} navbar navbar-light bg-light fixed-top`}>
                    <a className="navbar-brand" href="#">
                        <img src="/images/logo.png" alt="CentreO" />
                    </a>
                </nav> */}
                <header>

                    <div className="heaeder d-flex align-items-center" style={headerImage}>
                        <div className="container">
                            <div className="row mx-0">
                                <div className="col-12">
                                    <h1>SETUP YOUR COMPANY</h1>
                                </div>
                                <div className="col-12">
                                    First step towards success to stay focus.
                                </div>
                            </div>
                        </div>


                    </div>
                </header>
            </React.Fragment>

        )
    }
}

export default Header;