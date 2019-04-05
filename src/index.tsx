import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Components
import App from "./App";

// Styling
import "./index.css";

// React router
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Route component={App} />
    </Router>,
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();
