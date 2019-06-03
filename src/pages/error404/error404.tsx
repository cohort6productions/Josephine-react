import * as React from "react";

// Style imports
import "bootstrap/dist/css/bootstrap.min.css";
import "src/styles/all.min.css";
import "src/styles/App.scss";

// Component inports

export default class Error404 extends React.Component {
    public render() {
        return (
            <div>
                <h1>404!</h1><h3>This is an error page.</h3>{" "}
            </div>
        );
    }
}
