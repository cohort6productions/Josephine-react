import * as React from "react";

import "./style.scss";

// Component imports
import MasterForm from "./components/MasterForm";
import Header from './components/Header';

export default class IncorporationProcess extends React.Component {
    public render() {
        return (
            <div id="incorporation">
                <Header />
                <MasterForm />
            </div>
        );
    }
}
