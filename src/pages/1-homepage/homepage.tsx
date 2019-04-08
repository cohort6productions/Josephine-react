import * as React from "react";
import Footer from "src/components/footer/footer";

export default class Homepage extends React.PureComponent {
    public render() {
        return (
            <div>
                <h1>
                    Admin services, Resources &amp; Network to help business
                    focus
                </h1>
                <h3>Welcome to Centre O, The Hong Kong Business Centre</h3>
                <button>Contact Us</button>
                <Footer />
            </div>
        );
    }
}
