// Module imports
import * as React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import IncorporationProcess from "src/pages/3a.01-09 Incorporation/3a.01-09";
import Error404 from "src/pages/error404/error404";

export default class DefaultRoutes extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={IncorporationProcess} />
                <Route exact={true} path="/error404" component={Error404} />
            </Switch>
        );
    }
}
