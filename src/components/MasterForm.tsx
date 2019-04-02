import { Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import {IFormValues} from '../Models/FormValues';
// import Start from './forms/Start';
// import Step1 from './forms/step1';
// import Step2 from './forms/step2';
// import Step3 from './forms/step3';
import Step4 from './forms/step4';
import Summary from './forms/Summary';
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
        const { step } = this.state;
        // tslint:disable-next-line:jsx-key
        const steps = {
        //    0: <Start nextStep={this.nextStep}/>, 
        //    1: <Step1 {...this.props} title="Sign Up" nextStep={this.nextStep} back={this.back} />, 
        //    2: <Step2 {...this.props} nextStep={this.nextStep} back={this.back} />,
        //    3: <Step3 {...this.props} nextStep={this.nextStep} back={this.back} />,
           0: <Step4 {...this.props} nextStep={this.nextStep} back={this.back} />,
           1: <Summary {...this.props} />
        }
        return (
            <section className="my-5" id="incorporation-form">
                <div className="container">
                    <Form>
                        {steps[step] || <div />}
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 my-3">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ 'width': (step+1)/Object.keys(steps).length * 100+'%'}} aria-valuenow={step} aria-valuemin={0} aria-valuemax={Object.keys(steps).length} />
                                </div>
                            </div>
                        </div>
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
            },
            shareholders: [
                
            ],
            shares: {
                class: 'Ordinary',
                number: 0,
                value: 0
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
