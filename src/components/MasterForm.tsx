import { Form, FormikErrors, FormikProps, withFormik } from 'formik';
import * as React from 'react';
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
class FormWizard extends React.Component<FormikProps<IFormValues>, IFormState> {
    constructor(props:FormikProps<IFormValues>) {
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
        const {isSubmitting} = this.props;
        const { step } = this.state;
        // tslint:disable-next-line:jsx-key
        const steps = [<div/>,<Step1 {...this.props} title="Sign Up" />, <Step2 {...this.props} title="Final" />];
        return (
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
                                    <button type="button" className="form-control btn btn-primary" onClick={this.nextStep}>Next Step</button>
                                    : <button className="form-control btn btn-success" type="submit" disabled={isSubmitting}>Submit</button>
                            }
                        </div>
                    </div>
                </Form>
            </div>
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
    validate: (values) => {
        const errors: FormikErrors<IFormValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        }

        if (!values.phone) {
            errors.phone = 'Required';
        }
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false);
    },

})(FormWizard);


export default MasterForm;
