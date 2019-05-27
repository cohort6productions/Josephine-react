import { Field, FormikProps, getIn } from "formik";
import * as React from "react";
import { IStepProps } from "src/Interfaces/FormProps";
import { IFormValues } from "src/Interfaces/FormValues";
import ButtonGroup from "../forms/partials/ButtonGroup";
import {countries} from 'src/data/countries';

interface IOfficeAddress {
    office_address: any[];
    currentIndex: number;
}

class Step2 extends React.Component<
    FormikProps<IFormValues> & IStepProps,
    IOfficeAddress
> {
    constructor(props: IStepProps & FormikProps<IFormValues>) {
        super(props);
        this.state = {
            currentIndex: 0,
            office_address: [
                {
                    address:
                        "14/f, China Hong Kong Tower,\n 8 Henessy Road, Wanchai",
                    country: "Hong Kong",
                    disabled: true
                },
                {
                    address:
                        "Suite 2401-2, 24/F, 135 Bonham Strand Trade Centre, 135 Bonham Strand East, Sheungwan",
                    country: "Hong Kong",
                    disabled: true
                },
                {
                    address: "",
                    country: "",
                    disabled: false
                }
            ]
        };
    }
    public componentDidMount() {
        this.handleAddressChange(0);
        this.props.validateForm();
    }

    public handleAddressChange(index: number) {
        const { setFieldValue } = this.props;
        this.setState({
            currentIndex: index
        });
        setFieldValue(
            "company.address",
            this.state.office_address[index].address
        );
        setFieldValue(
            "company.country",
            this.state.office_address[index].country
        );
    }
    public render() {
        const { office_address, currentIndex } = this.state;
        const { errors, touched } = this.props;

        const buttonProps = {
            nextStep: () => {
                if (!getIn(errors, "company")) {
                    this.props.nextStep();
                }
                this.props.setAllFieldsTouched("company");
            },
            back: this.props.back
        };
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3">Company Details</h1>

                <div className="row">
                    <div className="form-group col-12">
                        <label>Company Name (First preference)* </label>
                        <Field
                            type="text"
                            className="form-control"
                            name="company.companyname_1"
                            placeholder="Tesla"
                        />
                        {getIn(errors, "company.companyname_1") &&
                            getIn(touched, "company.companyname_1") && (
                                <small className="text-danger small">
                                    {getIn(errors, "company.companyname_1")}
                                </small>
                            )}
                    </div>
                    <div className="form-group col-12">
                        <label>Company Name (Second preference)* </label>
                        <Field
                            type="text"
                            className="form-control"
                            name="company.companyname_2"
                            placeholder="The Boring Company"
                        />
                        {getIn(errors, "company.companyname_2") &&
                            getIn(touched, "company.companyname_2") && (
                                <small className="text-danger small">
                                    {getIn(errors, "company.companyname_2")}
                                </small>
                            )}
                    </div>

                    <div className="form-group col-12">
                        <p className="my-0">
                            There are cases where the first name preference
                            might have already been taken by other company,
                            hence, having a second preference to ensure the
                            smoothness of the application.
                        </p>
                    </div>

                    <div className="form-group col-12">
                        <label>Nature Of Business</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="company.nature_of_business"
                            placeholder="Manufacture"
                        />
                    </div>
                    <div className="form-group col-12">
                        <label>Registered Office Address</label>
                        <div className="row mx-0 align-items-center mb-3">
                            <button
                                className={`col-auto btn btn--inactive ${
                                    currentIndex === 0 ? "active" : ""
                                }`}
                                type="button"
                                onClick={this.handleAddressChange.bind(this, 0)}
                            >
                                Centre O Wanchai
                            </button>
                            <button
                                className={`col-auto btn btn--inactive ${
                                    currentIndex === 1 ? "active" : ""
                                }`}
                                type="button"
                                onClick={this.handleAddressChange.bind(this, 1)}
                            >
                                Centre O Sheungwan
                            </button>
                            <button
                                className={`col-auto btn btn--inactive ${
                                    currentIndex === 2 ? "active" : ""
                                }`}
                                style={{ width: "379px" }}
                                type="button"
                                onClick={this.handleAddressChange.bind(this, 2)}
                            >
                                Use another address
                            </button>
                        </div>
                        <Field
                            component="textarea"
                            className="form-control"
                            name="company.address"
                            disabled={office_address[currentIndex].disabled}
                        />
                        {getIn(errors, "company.address") &&
                            getIn(touched, "company.address") && (
                                <small className="text-danger small">
                                    {getIn(errors, "company.address")}
                                </small>
                            )}
                    </div>

                    <div className="form-group col-12">
                        <label>Country</label>
                        <Field
                            component="select" 
                            name="company.country"
                            className="form-control"
                            disabled={office_address[currentIndex].disabled}
                        >
                            <option value="" label="Select a country">Select a country</option>
                            {
                                countries.map((country:any) => (
                                    <option key={country.name} value={country.name} label={country.name}>{country.name}</option>
                                ))
                            }
                        </Field>
              
                        {getIn(errors, "company.country") &&
                            getIn(touched, "company.country") && (
                                <small className="text-danger small">
                                    {getIn(errors, "company.country")}
                                </small>
                            )}
                    </div>
                    <ButtonGroup
                        {...buttonProps}
                        buttonText="Confirm company details"
                    />
                </div>
            </div>
        );
    }
}

export default Step2;
