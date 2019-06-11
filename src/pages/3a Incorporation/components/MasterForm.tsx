import { Form, FormikProps, withFormik } from "formik";
import * as React from "react";
import { IFormValues } from "src/Interfaces/FormValues";
import {IncorporationSchema} from "./forms/validationSchema";
import Start from "./3a.01";
import Step1 from "./3a.02";
import Step2 from "./3a.03";
import Step3 from "./3a.04";
import Step4 from "./3a.05";
import Step5 from "./3a.06";
import Summary from "./forms/Summary";
import Step6 from "./3a.07";
import Step7 from "./3a.08";
import Breadcrumbs from "./forms/partials/Breadcrumbs";
import Checkout from "src/pages/Checkout";
import { Modal, ModalHeader, ModalBody, Alert } from "reactstrap";
import Pricing from "./forms/partials/Pricing";

interface IFormProps {
    initialEmail?: string;
    message?: string; // if this passed all the way through you might do this or make a union type
}

interface IFormState {
    step: number;
    modal: boolean;
    paymentAmount: number;
    paymentType: string;
    visible: boolean;
    left_shares: number;
}

class FormWizard extends React.Component<FormikProps<IFormValues>, IFormState> {
    constructor(props: FormikProps<IFormValues>) {
        super(props);

        this.state = {
            step: 0,
            modal: false,
            paymentAmount: 0,
            paymentType: "",
            visible: true,
            left_shares: 0
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    public setAllFieldsTouched = (key: string) => {
        const currentObj = this.props.values[key];

        Object.keys(currentObj).map((value, index) => {
            this.props.setFieldTouched(`${key}.${value}`);
        });
    };
    public nextStep = () => {
        this.setState({
            step: this.state.step + 1
        });
    };

    public handlePath = (nextStep: number) => {
        this.setState({
            step: nextStep
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

    public componentDidMount = () => {
        this.setState({
            left_shares: this.props.values.shares.number
        });
        this.props.validateForm();
    };

    public back = () => {
        this.setState({
            step: this.state.step - 1
        });
    };

    public handleCheckout = () => {
        this.toggle();
        this.props.submitForm();
    };

    public toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    public setAmount = (pricing: { type: string; price: number }) => {
        this.setState({
            paymentType: pricing.type,
            paymentAmount: pricing.price
        });
        this.props.setFieldValue('package', pricing.type)
        this.toggle();
    };

    public onDismiss = () => {
        this.setState({ visible: false });
    };

    public UpdateShares = (occupied: number) => {
        const total = this.props.values.shares.number - occupied;
        this.setState({
            left_shares: total
        })
    }

    public componentWillReceiveProps = (
        nextProps: FormikProps<IFormValues>
    ) => {
        if (!!nextProps.status && !!nextProps.status.success) {
            this.setState(
                {
                    step: 0
                },
                () => {
                    window.scrollTo({
                        top: 0
                    });
                }
            );

            setTimeout(() => this.props.resetForm(), 3000);
        }
    };

    public render() {
        const { step } = this.state;
        // tslint:disable-next-line:jsx-key
        const props = {
            ...this.props,
            setAllFieldsTouched: this.setAllFieldsTouched
        };
        const allPaths = [
            "Start",
            "Personal Information",
            "Company Information",
            "Share Formation",
            "Shareholder Information",
            "Director Information",
            "Company Secretary",
            "Others",
            "Summary",
            "Pricing"
        ];

        const steps = [
            <Start nextStep={this.nextStep} key="Start" />,
            <Step1
                key="Step1"
                {...props}
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Step2
                key="Step2"
                {...props}
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Step3
                key="Step3"
                {...props}
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Step4
                key="Step4"
                {...props}
                total_shares={this.props.values.shares.number}
                UpdateShares={this.UpdateShares}
                left_shares={this.state.left_shares}
                nextStep={this.nextStep}
                back={this.back}
                shareholders={this.props.values.shareholders}
                _setValues={this.setShareholderValues}
            />,
            <Step5
                key="Step5"
                {...props}
                shareholders={this.props.values.shareholders}
                directors={this.props.values.director}
                nextStep={this.nextStep}
                back={this.back}
                _setValues={this.setDirectorValues}
            />,
            <Step6
                key="Step6"
                {...props}
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Step7
                key="Step7"
                {...props}
                nextStep={this.nextStep}
                back={this.back}
            />,
            <Summary
                key="Summary"
                {...props}
                back={this.back}
                nextStep={this.nextStep}
            />,
            <Pricing 
                key="Pricing" 
                {...props} back={this.back} 
                nextStep={this.nextStep} 
                handleCheckout={this.setAmount} 
            />
        ];

        const { paymentAmount, paymentType } = this.state;
        const { status } = this.props;

        return (
            <section className="my-5" id="incorporation-form">
                <div className="container">
                    <div className={`incorp-loader ${this.props.isSubmitting ? 'd-flex': 'd-none'}`}>
                        Processing your data <span className="animate-flicker">&nbsp;...</span>
                    </div>

                    {!!status && !!status.success ? (
                        <Alert
                            color="info"
                            isOpen={this.state.visible}
                            toggle={this.onDismiss}
                        >
                            Company Incorporated!
                        </Alert>
                    ) : (
                        ""
                    )}

                    {!!status && !!status.error ? (
                        <Alert
                            color="danger"
                            isOpen={this.state.visible}
                            toggle={this.onDismiss}
                        >
                            Company Incorporation Failed!
                        </Alert>
                    ) : (
                        ""
                    )}
                    <Form>
                        <Breadcrumbs
                            allPaths={allPaths}
                            currentPath={step}
                            handlePath={this.handlePath}
                        />
                        {steps[step] || <div />}
                        <div className="row justify-content-center mx-auto text-center">
                            <div className="col-12 mx-auto my-3">
                                <div className="progress w-100">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width:
                                                ((step + 1) / steps.length) *
                                                    100 +
                                                "%",
                                            height: "100%"
                                        }}
                                        aria-valuenow={step}
                                        aria-valuemin={0}
                                        aria-valuemax={steps.length}
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader
                            toggle={this.toggle}
                            className="text-center"
                        >
                            Checkout
                        </ModalHeader>
                        <ModalBody>
                            <Checkout
                                paymentAmount={paymentAmount}
                                paymentType={paymentType}
                                onSuccess={this.handleCheckout}
                            />
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
                country_code: "852",
                email: "",
                phone: "",
                firstname: "",
                lastname: ""
            },
            shareholders: [],
            shares: {
                class: "Ordinary",
                number: 10000,
                value: 10000,
                currency: "HKD"
            },
            director: [],
            company_secretary: {
                name: "",
                email: "",
                license_no: "",
                address: "",
                country: ""
            },
            others: {
                fund: "",
                optional_fund: "",
                criminal_record: "",
                business_relationship: ""
            },
            comments: "",
            terms: false,
            package: ""
        };
    },
    validationSchema: IncorporationSchema,

    handleSubmit: async (values, { setSubmitting, setStatus }) => {
        try {
            setSubmitting(true);

            const res = await fetch(
                `${process.env.REACT_APP_API_URL}/registration`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        ...values
                    })
                }
            );
            setSubmitting(false);

            if (res.status === 200) {
                setStatus({ success: "form submited" });
            } else {
                setStatus({ error: "form not submited" });
            }

        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
            setSubmitting(false);

            setStatus({ error: "form not submited" });
        }
    }
})(FormWizard);

export default MasterForm;
