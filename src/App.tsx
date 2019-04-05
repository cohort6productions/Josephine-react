// Module imports
import * as React from "react";

// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/all.min.css";

// Component imports
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MasterForm from "./components/MasterForm";

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
