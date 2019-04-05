import * as React from "react";

// Style imports
import "bootstrap/dist/css/bootstrap.min.css";
import "src/App.css";
import "src/styles/all.min.css";

// Component inports
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import MasterForm from "src/components/MasterForm";

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
