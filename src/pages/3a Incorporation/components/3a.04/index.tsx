import { Field, FormikProps, getIn } from "formik";
import * as React from "react";
import { IStepProps } from "src/Interfaces/FormProps";
import { IFormValues } from "src/Interfaces/FormValues";
import ButtonGroup from "../forms/partials/ButtonGroup";

class Step3 extends React.Component<IStepProps & FormikProps<IFormValues>, {}> {
    constructor(props: IStepProps & FormikProps<IFormValues>) {
        super(props);
    }

    public componentDidMount = () => {
        this.props.validateForm();
    };

    public render() {
        const buttonProps = {
            back: this.props.back,
            nextStep: () => {
                if (!getIn(errors, "shares")) {
                    this.props.nextStep();
                }
                this.props.setAllFieldsTouched("shares");
            }
        };
        const { errors, touched } = this.props;
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3">Shares Formation</h1>

                <div className="row">
                    <div className="col-12">
                        <p>In Hong Kong, Companies Ordinance has empowered company shares a highly flexible system for the ownership management of limited companies.</p>
                        <p>The most common arrangement and type is Ordinary Shares of 10,000, each share value of Hk$1, at total of HK$10,000 per company.</p> 
                        <p>At Centre O we adopt Company Registry's suggested version of Articles of Associations, where it stated the shareholders, directors, related members of the responsibilities and rights.</p>
                    </div>
                    <div className="form-group col-12 col-lg-6">
                        <label>Class of shares</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="shares.class"
                            disabled={true}
                        />
                    </div>
                    <div className="form-group col-12 col-lg-6">
                        <label>Currency of shares</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="shares.currency"
                            disabled={true}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label>Total number of shares</label>
                        <Field
                            type="number"
                            className="form-control"
                            name="shares.number"
                            placeholder="10,000"
                        />
                        {getIn(errors, "shares.number") &&
                            getIn(touched, "shares.number") && (
                                <small className="text-danger small">
                                    {getIn(errors, "shares.number")}
                                </small>
                            )}
                    </div>
                    <div className="form-group col-12">
                        <label>Total value of share</label>
                        <Field
                            type="number"
                            className="form-control"
                            name="shares.value"
                            placeholder="10,000"
                        />
                        {getIn(errors, "shares.value") &&
                            getIn(touched, "shares.value") && (
                                <small className="text-danger small">
                                    {getIn(errors, "shares.value")}
                                </small>
                            )}
                    </div>
                    <ButtonGroup
                        {...buttonProps}
                        buttonText="Confirm share details"
                    />
                </div>
            </div>
        );
    }
}

export default Step3;
