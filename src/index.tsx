import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Styling
import "./index.css";
// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/all.min.css";
import "./styles/App.scss";

// React router
import { BrowserRouter as Router } from "react-router-dom";
import DefaultRoutes from "./routes/defaultRoutes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const App = () => (
    <Router>
        <div>
            <Header />
            <DefaultRoutes />
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

registerServiceWorker();
