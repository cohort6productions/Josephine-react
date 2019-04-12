import { Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import {IFormValues} from 'src/Interfaces/FormValues';
import * as Yup from 'yup';
import Start from './3a.01';
import Step1 from './3a.02';
import Step2 from './3a.03';
import Step3 from './3a.04';
import Step4 from './3a.05';
import Step5 from './3a.06';
import Summary from './forms/Summary';
import Step6 from './3a.07';
import Step7 from './3a.08';

interface IFormProps {
    initialEmail?: string;
    message?: string; // if this passed all the way through you might do this or make a union type
}

interface IFormState {
    step: number;
}

const SignupSchema = Yup.object().shape({
    personal: Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email Required"),
        phone: Yup.string()
            .max(10, "too long")
            .required("Phone Required")
    })
});

class FormWizard extends React.Component<FormikProps<IFormValues>, IFormState> {
    constructor(props: FormikProps<IFormValues>) {
        super(props);

        this.state = {
            step: 0
        };
    }
    public nextStep = () => {
        this.setState({
            step: this.state.step + 1
        });
    };

    public setShareholderValues = (data: any) => {
        this.props.setValues({
            ...this.props.values,
            shareholders: data
        });
    };

    public setDirectorValues = (data: any) => {
        this.props.setValues({
            ...this.props.values,
            director: data
        });
    };

    public back = () => {
        this.setState({
            step: this.state.step - 1
        });
    };

    public render() {
        const { step } = this.state;
        // tslint:disable-next-line:jsx-key

        const steps = [
            <Start nextStep={this.nextStep} key="" />,
            <Step1
                key=""
                {...this.props}
                title="Sign Up"
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Step2
                key=""
                {...this.props}
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Step3
                key=""
                {...this.props}
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Step4
                key=""
                {...this.props}
                total_shares={this.props.values.shares.number}
                nextStep={this.nextStep}
                back={this.back}
                _setValues={this.setShareholderValues}
            />,
            <Step5
                key=""
                {...this.props}
                shareholders={this.props.values.shareholders}
                nextStep={this.nextStep}
                back={this.back}
                _setValues={this.setDirectorValues}
            />,
            <Step6 key="" {...this.props} nextStep={this.nextStep} back={this.back} />,
            <Step7 key="" {...this.props} nextStep={this.nextStep} back={this.back} />,
            <Summary key="" {...this.props} />
        ]
        return (
            <section className="my-5" id="incorporation-form">
                <div className="container">
                    <Form>
                        {steps[step] || <div />}
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 my-3">
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width:
                                                ((step + 1) / steps.length) *
                                                    100 +
                                                "%"
                                        }}
                                        aria-valuenow={step}
                                        aria-valuemin={0}
                                        aria-valuemax={steps.length}
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        );
    }
}

const MasterForm = withFormik<IFormProps, IFormValues>({
    mapPropsToValues: () => {
        return {
            company: {
                companyname_1: "",
                companyname_2: "",
                nature_of_business: "",
                address: "",
                country: ""
            },
            personal: {
                country_code: "",
                email: "",
                password: "",
                phone: "",
                firstname: "",
                lastname: ""
            },
            shareholders: [],
            shares: {
                class: "Ordinary",
                number: 0,
                value: 0
            },
            director: [],
            company_secretary: {
                name: '',
                email: '',
                license_no: '',
                address: '',
                country: ''
            },
            others: {
                fund: '',
                criminal_record: '',
                business_relationship: ''
            }

        };
    },
    validationSchema: SignupSchema,

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        setSubmitting(false);
    }
})(FormWizard);

export default MasterForm;
