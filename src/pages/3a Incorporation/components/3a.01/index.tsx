import * as React from 'react';

class Start extends React.Component<{nextStep: () => void}, {}>{
    constructor(props: {nextStep: () => void}) {
        super(props)
    }

    public render() {

        return (
            <div className="startingstep mx-auto col-12 col-md-8">
            <h2>BEFORE INCORPORATION</h2>
            <p>Filing in the incorporation application is not rocket science, but it will take you a lot of time and effort to complete the entire process yourself.</p>
            <p>
                We highly suggest to use our incorporation services. With that peace of mind, when arranging the paperwork via our online platform, you will only need to prepare in advanced:
            </p> 
                <br/>
                <h3 className="mt-3">Check List</h3>
                <p>Please complete the checklist before proceeding</p>
                <ul className="dashed my-3">
                    <li>
                        Intended company name 
                    </li>
                    <li>
                        Directors’ and shareholders’ passport or Hong Kong Identity copies,
                    </li>
                    <li>
                        Detailed residential address (No PO Box),
                    </li>
                    <li>
                        Contact email and phone number
                    </li>
                </ul>

                <div className="row justify-content-center w-100 mx-auto col-12 col-md-10 mt-3">
                    <div className="col-12 col-md-4 pr-md-1">
                        <button type="button" className="btn btn-default w-100">Back</button>
                    </div>
                    <div className="col-12 col-md-8 pl-md-1">
                        <button type="button" className="btn btn--incorp w-100" onClick={this.props.nextStep}>I AM READY TO INCORPORATE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start;