import { Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import Start from './forms/Start';
import Step1 from './forms/step1';
import Step2 from './forms/step2';
// import { FormGroup, Label } from 'reactstrap';

interface IMyFormProps {
    initialEmail?: string;
    message?: string; // if this passed all the way through you might do this or make a union type
}

// Shape of form values
interface IFormValues {
    email: string;
    password: string;
    phone: string;
    country_code: string;
    number: number;
}

interface IFormState {
    step: number;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email Required'),
    phone: Yup.string()
        .required('Phone Required'),
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
        const steps = [<Start />, <Step1 {...this.props} title="Sign Up" />, <Step2 {...this.props} title="Final" />];
        return (
            <section className="my-5">
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
                                        <div><button type="button" className="form-control btn btn-primary" onClick={this.nextStep}>{ step === 0 ? 'Start' : 'Next Step'}</button></div>
                                        : <button type="submit" className="form-control btn btn-success" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
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
            country_code: '',
            email: props.initialEmail || '',
            name: '',
            password: '',
            phone: '',
            // tslint:disable-next-line:object-literal-sort-keys
            number: 0
        };
    },
    validationSchema: SignupSchema,

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false);
    },

})(FormWizard);


export default MasterForm;
