// Module imports
import * as React from "react";
import * as History from "history";
import { Route, Switch, withRouter, match } from "react-router-dom";

// Import components
import Homepage from "src/pages/1-homepage/homepage";
import IncorporationProcess from "src/pages/3a Incorporation/3a";
import ConferenceRoomBooking from "src/pages/3d-conferenceRoomBooking/conferenceRoomBooking";
import Newsletter from "src/pages/5b-newsletter/newsletter";
import AboutUs from "src/pages/5c-aboutUs/aboutUs";
import Member from "src/pages/5d-individualMember/member";
import Error404 from "src/pages/error404/error404";

// Data
import { teamMembers } from "../pages/5c-aboutUs/data";

// Helper function
import { nameToPathConvert } from "src/helper/helper";

interface IDefaultRoutesProps {
    history: History.History;
    location: History.Location;
    match: match;
}

class DefaultRoutes extends React.Component<IDefaultRoutesProps> {
    constructor(props: IDefaultRoutesProps) {
        super(props);
    }
    public render() {
        return (
            <Switch>
                {/* Start of "How to start" */}
                <Route exact={true} path="/open" component={Homepage} />
                <Route exact={true} path="/upkeep" component={Homepage} />
                <Route exact={true} path="/expand" component={Homepage} />
                <Route exact={true} path="/china" component={Homepage} />
                <Route exact={true} path="/visa" component={Homepage} />
                <Route exact={true} path="/relocate" component={Homepage} />
                {/* End of "How to start" */}
                <Route
                    exact={true}
                    path="/incorporation"
                    component={IncorporationProcess}
                />
                <Route
                    exact={true}
                    path="/conference-room"
                    component={ConferenceRoomBooking}
                />
                <Route exact={true} path="/resources" component={Homepage} />
                <Route exact={true} path="/subscribe" component={Newsletter} />
                <Route exact={true} path="/about-us" component={AboutUs} />

                {teamMembers.map(member => (
                    <Route
                        path={`/about-us/` + nameToPathConvert(member.name)}
                        // tslint:disable-next-line:jsx-no-lambda
                        render={() => <Member {...member} />}
                    />
                ))}

                <Route exact={true} path="/" component={Homepage} />
                <Route path="/error404" component={Error404} />
            </Switch>
        );
    }
}

export default withRouter(DefaultRoutes);
