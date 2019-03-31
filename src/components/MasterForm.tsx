import { Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import {IFormValues} from '../Models/FormValues';
import Start from './forms/Start';
import Step1 from './forms/step1';
import Step2 from './forms/step2';
// import { FormGroup, Label } from 'reactstrap';

interface IMyFormProps {
    initialEmail?: string;
    message?: string; // if this passed all the way through you might do this or make a union type
}

interface IFormState {
    step: number;
}

const SignupSchema = Yup.object().shape({
    personal: Yup.object().shape({
        email: Yup.string()
        .email('Invalid email')
        .required('Email Required'),
        phone: Yup.string()
        .max(10, 'too long')
        .required('Phone Required')
        
    }),
    
});

class FormWizard extends React.Component<FormikProps<IFormValues>, IFormState> {
    constructor(props: FormikProps<IFormValues>) {
        super(props);

        this.state = {
            step: 0
        }
    }
    public nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    public back = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    public render() {
        const { isSubmitting } = this.props;
        const { step } = this.state;
        // tslint:disable-next-line:jsx-key
        const steps = [<Start />, <Step1 {...this.props} title="Sign Up" />, <Step2 {...this.props} />];
        return (
            <section className="my-5" id="incorporation-form">
                <div className="container">
                    <Form>
                        {steps[step] || <div />}
                        <div className="row justify-content-center">
                            {step > 0 ? <div className="col-auto">
                                <button type="button" className="form-control btn btn-default" onClick={this.back}>Back</button>
                            </div> : ''}
                            <div className="col-4">
                                {
                                    steps.length !== step + 1 ?
                                        <div><button type="button" className="form-control btn btn-warning" onClick={this.nextStep}>{step === 0 ? 'Start' : 'Next Step'}</button></div>
                                        : <button type="submit" className="form-control btn btn-warning" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
                                }
                            </div>
                        </div>
                        <pre>{isSubmitting}</pre>
                    </Form>
                </div>
            </section>
        );
    }
}

const MasterForm = withFormik<IMyFormProps, IFormValues>({
    mapPropsToValues: props => {
        return {
            company: {
                companyname_1: '',
                companyname_2: '',
                nature_of_business: '',
                office_address: '',
                office_country: ''
            },
            personal: {
                country_code: '',
                email: props.initialEmail || '',
                password: '',
                phone: '',
                // tslint:disable-next-line:object-literal-sort-keys
                firstname: '',
                lastname: '',
            }
        };
    },
    validationSchema: SignupSchema,

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false);
    },

})(FormWizard);


export default MasterForm;
