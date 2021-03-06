import { FormikProps, Field, getIn } from "formik";
import * as React from "react";
import { IFormValues } from "src/Interfaces/FormValues";
import ButtonGroup from "../forms/partials/ButtonGroup";
import { IStepProps } from "src/Interfaces/FormProps";

interface IOtherState {
    optional_fund: string;
    criminal_record: string;
    business_relationship: string;
    submitted: boolean;
    fundActive: boolean;
    crecordActive: boolean;
    businessActive: boolean;
}
class Step7 extends React.Component<
    IStepProps & FormikProps<IFormValues>,
    IOtherState
> {
    constructor(props: IStepProps & FormikProps<IFormValues>) {
        super(props);
        this.state = {
            optional_fund: "",
            criminal_record: "",
            business_relationship: "",
            submitted: false,
            fundActive: false,
            crecordActive: false,
            businessActive: false
        };
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    public handleChange = (
        field: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        // alert(JSON.stringify(this.props.values))
        const fieldName = "others." + field;
        this.setState({ [field]: event.target.value } as Pick<
            IOtherState,
            any
        >);

        this.props.setFieldValue(fieldName, event.target.value);
        
    };

    public handleCheckbox = (e: any) => {
        let strarray = this.props.values.others[e.target.name]
        if (!!strarray) {
            strarray = this.props.values.others[e.target.name].split(',')
        } else {
            strarray = []
        }

        if (e.target.checked) {
             if(!strarray.includes(e.target.value)) {
                const mutated = [...strarray, e.target.value].toString()
                this.props.setFieldValue(`others.${e.target.name}`, mutated)
            }
        }else {
            const mutated = strarray.filter((el:string) => el !== e.target.value).toString()
            this.props.setFieldValue(`others.${e.target.name}`, mutated)
        }
    }

    public handleOptional = (e: React.ChangeEvent<HTMLInputElement>, reverse = false) => {
        let currentInput = ""
        switch (e.target.name) {
            case "others.fund":
                currentInput = "fundActive"
                this.props.setFieldValue('others.optional_fund', e.target.checked ? e.target.value : "")
                this.setState({
                    optional_fund: e.target.checked ? e.target.value : ""
                })
                break;
            case "others.criminal_record":
                this.props.setFieldValue(e.target.name, e.target.value)
                currentInput = "crecordActive"
                break;
            default:
                this.props.setFieldValue(e.target.name, e.target.value)
                currentInput = "businessActive"
        }
        if (!!currentInput) {
            this.setState({
                [currentInput] : reverse ? !e.target.checked : e.target.checked
            } as Pick<
                IOtherState,
                any
            >)
        }

    }

    public handleFunds = (e:any) => {
        const strarray = this.props.values[e.target.name].split(',')
        if (e.target.checked) {
            if (!strarray.includes(e.target.value)) {
                const mutated = [...strarray, e.target.value].toString()
                this.props.setFieldValue(e.target.name, mutated)
            }
        }else {
            const mutated = strarray.filter((el:string) => el !== e.target.value).toString()
            this.props.setFieldValue(e.target.name, mutated)
        }
    }

    public handleOthers = (e: any) => {
        this.props.setFieldValue(e.target.name, e.target.value)
        this.handleOptional(e, true)
    }

    public componentDidMount = () => {
        this.props.validateForm();
    };

    public render() {
        const { touched, errors } = this.props;
        const buttonProps = {
            back: this.props.back,
            nextStep: () => {
                if (
                    (!getIn(errors, "others.fund") || !getIn(errors, "others.optional_fund")) 
                    && !getIn(errors, "others.criminal_record")
                    && !getIn(errors, "others.business_relationship")
                    ) {
                        if (getIn(errors, "others.optional_fund")) {
                            this.props.setFieldValue('others.optional_fund', '\n')
                        }

                        if (getIn(errors, "others.fund")) {
                            this.props.setFieldValue('others.fund', '\n')
                        }
                        this.props.nextStep();
                }
                this.setState({
                    submitted: true
                });
                this.props.setAllFieldsTouched("others");
            }
        };
        return (
            <div className="col-12 col-md-8 mx-auto others">
                <h1 className="my-3 text-center">Other Information</h1>

                <div className="row">
                    <div className="form-group col-12 row">
                        <label className="col-12">
                            Where do the funds of your business come from?
                            Please check relevent box:
                        </label>
                        <div className="col-auto">
                            <input
                                type="checkbox"
                                name="fund"
                                value="savings"
                                onChange={this.handleCheckbox}
                            />{" "}
                            Savings
                        </div>
                        <div className="col-auto">
                            <input
                                type="checkbox"
                                name="fund"
                                value="investors"
                                onChange={this.handleCheckbox}
                            />{" "}
                            Investors
                        </div>
                        <div className="col-auto">
                            <input
                                type="checkbox"
                                name="fund"
                                value="borrowing"
                                onChange={this.handleCheckbox}
                            />{" "}
                            Borrowing
                        </div>
                        <div className="col-12">
                            <input
                                type="checkbox"
                                name="others.fund"
                                onChange={this.handleOptional}
                            />{" "}
                            Other, Please Specify
                            <input
                                type="text"
                                disabled={!this.state.fundActive}
                                className="text-line ml-2"
                                onChange={this.handleChange.bind(this, "optional_fund")}
                            />
                            {
                                this.state.submitted &&
                                    getIn(errors, "others.fund") && getIn(errors, "others.optional_fund") &&
                                    getIn(touched, "others.fund") && getIn(touched, "others.optional_fund") 
                                    ? <small className="text-danger small">
                                            {getIn(errors, "others.fund")}
                                        </small>
                                    : ""
                            }
                        </div>
                        
                    </div>

                    <div className="form-group col-12">
                        <label>
                            Do you have any criminal record in Hong Kong or in
                            any other country?
                        </label>
                        <div>
                            <input
                                type="radio"
                                name="others.criminal_record"
                                onChange={this.handleOthers}
                                value="no"
                            />{" "}
                            No
                        </div>

                        <div>
                            <Field
                                type="radio"
                                name="others.criminal_record"
                                onChange={this.handleOptional}
                                value={this.state.criminal_record}
                            />{" "}
                            Yes, Please specify
                            <input
                                type="text"
                                className="text-line ml-2"
                                disabled={!this.state.crecordActive}
                                onChange={this.handleChange.bind(
                                    this,
                                    "criminal_record"
                                )}
                            />
                        </div>

                        {this.state.submitted &&
                        getIn(errors, "others.criminal_record") &&
                        getIn(touched, "others.criminal_record") ? (
                            <small className="text-danger small">
                                {getIn(errors, "others.criminal_record")}
                            </small>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="form-group col-12">
                        <label>
                            Do you have any business relationship with relevant
                            person or relevant entity (as defined under the
                            United Nations Sanctions Ordiance, Cap. 537 or any
                            subsidiary legislation thereunder) which is subject
                            to financial sanctions or any terrorist or terrorist
                            associate as defined under the United Nations
                            (Anti-Terroism Measures) Ordiance, Cap. 575?
                        </label>
                        <div>
                            <input
                                type="radio"
                                name="others.business_relationship"
                                onChange={this.handleOthers}
                                value="no"
                            />{" "}
                            No
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="others.business_relationship"
                                onChange={this.handleOptional}
                                value={this.state.business_relationship}
                            />{" "}
                            Yes, Please specify
                            <input
                                type="text"
                                disabled={!this.state.businessActive}
                                className="text-line ml-2"
                                onChange={this.handleChange.bind(
                                    this,
                                    "business_relationship"
                                )}
                            />
                        </div>
                        {this.state.submitted &&
                        getIn(errors, "others.business_relationship") &&
                        getIn(touched, "others.business_relationship") ? (
                            <small className="text-danger small">
                                {getIn(errors, "others.business_relationship")}
                            </small>
                        ) : (
                            ""
                        )}
                    </div>

                    <ButtonGroup
                        {...buttonProps}
                        buttonText="Confirm details"
                    />
                </div>
            </div>
        );
    }
}

export default Step7;
