import { Field, FormikProps, getIn } from "formik";
import * as React from "react";
import { IFormValues } from "src/Interfaces/FormValues";
import ButtonGroup from "../forms/partials/ButtonGroup";
import {countries} from 'src/data/countries';

interface IStep1Props {
    title: string;
    nextStep: () => void;
    back: () => void;
    setAllFieldsTouched: (key: string) => void;
}
const Step1 = (props: IStep1Props & FormikProps<IFormValues>) => {
    const { touched, errors, title } = props;

    React.useEffect(() => {
        props.validateForm();
    }, []);

    const btnprops = {
        ...props,
        nextStep: () => {
            if (!getIn(errors, "personal")) {
                props.nextStep();
            }
            props.setAllFieldsTouched("personal");
        }
    };

    return (
        <div className="col-12 col-md-8 mx-auto">
            <h1 className="my-3 text-center">{title}</h1>

            <div className="row">
                <div className="form-group col-12 col-md-6">
                    <label>First Name*</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="personal.firstname"
                        required={true}
                        placeholder="Elon"
                    />
                    {getIn(errors, "personal.firstname") &&
                        getIn(touched, "personal.firstname") && (
                            <small className="text-danger small">
                                {getIn(errors, "personal.firstname")}
                            </small>
                        )}
                </div>

                <div className="form-group col-12 col-md-6">
                    <label>Last Name*</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="personal.lastname"
                        placeholder="Musk"
                    />
                    {getIn(errors, "personal.lastname") &&
                        getIn(touched, "personal.lastname") && (
                            <small className="text-danger small">
                                {getIn(errors, "personal.lastname")}
                            </small>
                        )}
                </div>

                <div className="form-group col-12">
                    <label>Email*</label>
                    <Field
                        type="email"
                        className="form-control"
                        name="personal.email"
                        placeholder="elon@tesla.com"
                    />
                    {getIn(errors, "personal.email") &&
                        getIn(touched, "personal.email") && (
                            <small className="text-danger small">
                                {getIn(errors, "personal.email")}
                            </small>
                        )}
                </div>
        
                <div className="form-group col-12 col-md-6">
                    <label>Country Code *</label>
                    <Field
                        component="select" 
                        name="personal.country_code"
                        className="form-control"
                    >
                        <option value="" label="Select country code" />
                        {
                            countries.map((country:any) => (
                                <option key={country.name} value={country.callingCodes[0]} label={country.name} />
                            ))
                        }
                    </Field>
                    {getIn(errors, 'personal.country_code') && getIn(touched, 'personal.country_code') && <small className="text-danger small">{getIn(errors, 'personal.country_code')}</small>}

                    {/* <Field type="text" className="form-control" name="personal.country_code" /> */}
                </div>

                <div className="form-group col-12 col-md-6">
                    <label>Phone Number*</label>
                    <Field
                        type="text"
                        className="form-control"
                        name="personal.phone"
                        placeholder="31242888"
                    />
                    {getIn(touched, "personal.phone") &&
                        getIn(errors, "personal.phone") && (
                            <small className="text-danger small">
                                {getIn(errors, "personal.phone")}
                            </small>
                        )}
                </div>
                <ButtonGroup
                    {...btnprops}
                    buttonText="Confirm personal details"
                />
            </div>
        </div>
    );
};

export default Step1;
