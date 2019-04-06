import * as React from "react";

import "src/styles/App.scss";

// Component imports
import Footer from "./components/Footer"
import Header from "./components/Header";
import MasterForm from "./components/MasterForm";

export default class IncorporationProcess extends React.Component {
    public render() {
        return (
            <>
                <Header />
                <MasterForm />
                <Footer />
            </>
        );
    }
}
