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
import Breadcrumbs from './forms/partials/Breadcrumbs';
import Checkout from 'src/pages/Checkout';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

interface IFormProps {
    initialEmail?: string;
    message?: string; // if this passed all the way through you might do this or make a union type
}

interface IFormState {
    step: number;
    modal: boolean;
}

const SignupSchema = Yup.object().shape({
    personal: Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email Required"),
        phone: Yup.string()
            .max(10, "too long")
            .required("Phone Required")
    }),
    company: Yup.object().shape({
        companyname_1: Yup.string()
            .required("Company name is required"),
        address: Yup.string()
            .required("Address Required"),
        country: Yup.string()
            .required("country Required")
    }),
    shares: Yup.object().shape({
        number: Yup.number()
            .required("share number is required")
            .moreThan(0, "Atlease 1 expected"),
        value: Yup.number()
            .required("Share value is required"),
    
    }),
    terms: Yup.boolean()
        .oneOf([true], 'Must Accept Terms and Conditions')

});

class FormWizard extends React.Component<FormikProps<IFormValues>, IFormState> {
    constructor(props: FormikProps<IFormValues>) {
        super(props);

        this.state = {
            step: 0,
            modal: false
        };
    }
    public nextStep = () => {
        this.setState({
            step: this.state.step + 1
        });
    };

    public handlePath = (nextStep: number) => {
        this.setState({
            step: nextStep
        })
    }

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

    public componentDidMount = () => {
        this.props.validateForm()
    }
    
    public back = () => {
        this.setState({
            step: this.state.step - 1
        });
    };

    public handleCheckout = () => {
        this.toggle();
        this.props.submitForm();
    }

    public toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    public render() {
        const { step } = this.state;
        // tslint:disable-next-line:jsx-key

        const allPaths = [
            'Start',
            'Personal Information',
            'Company Information',
            'Share Formation',
            'Shareholder Information',
            'Director Information',
            'Company Secretary',
            'Others',
            'Summary'
        ]

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
                shareholders={this.props.values.shareholders}
                _setValues={this.setShareholderValues}
            />,
            <Step5
                key=""
                {...this.props}
                shareholders={this.props.values.shareholders}
                directors={this.props.values.director}
                nextStep={this.nextStep}
                back={this.back}
                _setValues={this.setDirectorValues}
            />,
            <Step6 
                key="" 
                {...this.props} 
                nextStep={this.nextStep} 
                back={this.back} 
            />,
            <Step7 
                key="" 
                {...this.props} 
                nextStep={this.nextStep} 
                back={this.back} 
            />,
            <Summary 
                key="" 
                {...this.props} 
                back={this.back} 
                handleCheckout={this.toggle}
            />
        ]
        return (
            <section className="my-5" id="incorporation-form">
                <div className="container">
                    <Form>
                        <Breadcrumbs 
                            allPaths={allPaths} 
                            currentPath={step} 
                            handlePath={this.handlePath}
                            />
                        {steps[step] || <div />}
                        <div className="row justify-content-center mx-0 ">
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
                    <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                        <ModalHeader toggle={this.toggle}>Checkout</ModalHeader>
                        <ModalBody>
                            <Checkout onSuccess={this.handleCheckout}/>   
                        </ModalBody>
                    </Modal>
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
            },
            comments: "",
            terms: false

        };
    },
    validationSchema: SignupSchema,

    handleSubmit: async(values, { setSubmitting }) => {
        await fetch(`${process.env.REACT_APP_API_URL}/registration`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                ...values
            })
        })
        setTimeout(() => {
            setSubmitting(false);
          }, 1000);
    }
})(FormWizard);

export default MasterForm;
