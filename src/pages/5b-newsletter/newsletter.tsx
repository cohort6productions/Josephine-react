import * as React from "react";
import Footer from "src/components/footer/footer";

export default class Newsletter extends React.PureComponent {
    public render() {
        return (
            <div>
                <h1>Newsletter</h1>
                <h3>Welcome to Centre O, The Hong Kong Business Centre</h3>
                <button>Contact Us</button>
                <Footer />
            </div>
        );
    }
}
