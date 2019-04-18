import * as React from 'react';

const Start = (props: {nextStep: () => void}) => {
    const {nextStep} = props;
    return (
        <div className="startingstep col-12 col-md-8 mx-auto">
           <h1>BEFORE INCORPORATION</h1>
            Filing in the incorporation application is not rocket science, but it will take you a lot of time and effort to complete the entire process yourself.
            <br/>
            We highly suggest to use our incorporation services. With that peace of mind, when arranging the paperwork via our online platform, you will only need to prepare in advanced:
            <br/>
            <ul className="dashed my-3">
                <li>Intended company name </li>
                <li>Directors’ and shareholders’ passport or Hong Kong Identity copies,</li>
                <li>Detailed residential address (No PO Box),</li>
                <li>Contact email and phone number</li>
            </ul>

            <div className="col-12">
                <div className="col-auto">
                    <button type="button" className="form-control btn btn-warning" onClick={nextStep}>Start business incorporation</button>
                </div>
            </div>
        </div>
    )
}

Start.displayName = 'Start'

export default Start;