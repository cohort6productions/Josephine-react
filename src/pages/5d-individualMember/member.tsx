import * as React from "react";

interface IMemberProps {
    name: string;
    image: any;
    position: string;
    description: string;
    socialLink: { li: string; md: string };
}

export default class Member extends React.PureComponent<IMemberProps> {
    public render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>Welcome to Centre O, The Hong Kong Business Centre</h3>
                <button>Contact Us</button>
            </div>
        );
    }
}
