// Module imports
import * as React from "react";
import * as History from "history";
import { Route, Switch, withRouter, match } from "react-router-dom";

// Data
import { teamMembers } from "../pages/5c-aboutUs/data";

// Helper function
import { nameToPathConvert } from "src/helper/helper";

// Import components
// General
import Homepage from "src/pages/1-homepage/homepage";
import Error404 from "src/pages/error404/error404";
// How to start
import OpeningNewBusiness from "src/pages/2a-openingNewBusiness/openingNewBusiness";
// Often use
import CompanyIncorporation from "src/pages/3a-companyIncorporation/companyIncorporation";
import IncorporationProcess from "src/pages/3a Incorporation/3a";
import ConferenceRoomBooking from "src/pages/3d-conferenceRoomBooking/conferenceRoomBooking";
// Resources
import Newsletter from "src/pages/5b-newsletter/newsletter";
import AboutUs from "src/pages/5c-aboutUs/aboutUs";
import Member from "src/pages/5d-individualMember/member";

// Route interfaces
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
                <Route
                    exact={true}
                    path="/open"
                    component={OpeningNewBusiness}
                />
                <Route exact={true} path="/upkeep" component={Homepage} />
                <Route exact={true} path="/expand" component={Homepage} />
                <Route exact={true} path="/china" component={Homepage} />
                <Route exact={true} path="/visa" component={Homepage} />
                <Route exact={true} path="/relocate" component={Homepage} />
                {/* End of "How to start" */}

                {/* Start of "Often use" */}
                <Route
                    exact={true}
                    path="/incorporation/form"
                    component={IncorporationProcess}
                />
                <Route
                    exact={true}
                    path="/incorporation"
                    component={CompanyIncorporation}
                />
                <Route
                    exact={true}
                    path="/conference-room"
                    component={ConferenceRoomBooking}
                />
                {/* End of "Often use" */}

                {/* Start of "Resources" */}
                <Route exact={true} path="/resources" component={Homepage} />
                <Route exact={true} path="/subscribe" component={Newsletter} />
                {/* End of "Resources" */}

                {/* Start of "Who we are" */}
                <Route exact={true} path="/about-us" component={AboutUs} />
                {teamMembers.map((member, i) => (
                    <Route
                        key={i}
                        path={`/about-us/` + nameToPathConvert(member.name)}
                        // tslint:disable-next-line:jsx-no-lambda
                        render={() => <Member {...member} />}
                    />
                ))}
                {/* End of "Who we are" */}

                {/* Start of "General" */}
                <Route exact={true} path="/" component={Homepage} />
                <Route component={Error404} />
                {/* End of "General" */}
            </Switch>
        );
    }
}

export default withRouter(DefaultRoutes);
