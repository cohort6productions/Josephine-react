// Module imports
import * as React from "react";

// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/all.min.css";
import "./styles/App.scss";

// Routes imports
import DefaultRoutes from "./routes/defaultRoutes";

class App extends React.Component {
    public render() {
        return (
            <>
                {/* First content testing */}
                {/* <Header />
        <MasterForm />
        <Footer /> */}
                <DefaultRoutes />
            </>
        );
    }
}

export default App;
