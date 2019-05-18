import * as React from 'react';

interface IStartState {
    companyname: boolean;
    address: boolean;
    copies: boolean;
    phone: boolean;
    errorMessage: string;
}
class Start extends React.Component<{nextStep: () => void}, IStartState>{
    constructor(props: {nextStep: () => void}) {
        super(props)
        this.state = {
            companyname: false,
            address: false,
            copies: false,
            phone: false,
            errorMessage: ''
        }


        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange = (e: any) => {
        this.setState({
            [e.target.name] : e.target.checked
        } as IStartState, () => {
            const {companyname, address, copies, phone} = this.state;
            if (companyname && address && copies && phone) {
                this.setState({
                    errorMessage: ''
                })
            }
        });
    }

    public nextStep = () => {
        const {companyname, address, copies, phone} = this.state;

        this.props.nextStep()

        if (!companyname || !address || !copies || !phone) {
            this.setState({
                errorMessage: 'Please complete the checklist before proceeding'
            }) 
        }
        // else {
        //     this.props.nextStep()
        // }

    }

    public render() {

        return (
            <div className="startingstep col-12 col-md-8 mx-auto text-center">
            <h1>BEFORE INCORPORATION</h1>
            Filing in the incorporation application is not rocket science, but it will take you a lot of time and effort to complete the entire process yourself.
            <br/>
                We highly suggest to use our incorporation services. With that peace of mind, when arranging the paperwork via our online platform, you will only need to prepare in advanced:
                
                <br/>
                <h3 className="mt-3">Check List</h3>
                <p>Please complete the checklist before proceeding</p>
                <ul className="dashed my-3">
                    <li>
                        <input type="checkbox" name="companyname" onChange={this.handleChange}/>
                        Intended company name 
                    </li>
                    <li>
                        <input type="checkbox" name="copies" onChange={this.handleChange}/>
                        Directors’ and shareholders’ passport or Hong Kong Identity copies,
                    </li>
                    <li>
                        <input type="checkbox" name="address" onChange={this.handleChange}/>
                        Detailed residential address (No PO Box),
                    </li>
                    <li>
                        <input type="checkbox" name="phone" onChange={this.handleChange}/>
                        Contact email and phone number
                    </li>
                </ul>

                {
                    !!this.state.errorMessage ?
                    <div className="col-12 fadeIn">
                        <button className="btn btn-warning w-100">{this.state.errorMessage}</button>
                    </div> : <div/>
                }

                <div className="row justify-content-center w-100 mx-auto">
                    <div className="col-12 col-md-4 pr-md-1">
                        <button type="button" className="btn btn-default w-100">Back</button>
                    </div>
                    <div className="col-12 col-md-8 pl-md-1">
                        <button type="button" className="btn btn--incorp w-100" onClick={this.nextStep}>Start business incorporation</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start;