import { FormikProps, withFormik } from "formik";
import * as React from "react";
import { Button, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { IStepProps } from "src/Interfaces/FormProps";
import { IFormValues, IPersonalDetails } from "src/Interfaces/FormValues";
import ButtonGroup from "../forms/partials/ButtonGroup";
import DirectorForm from "./DirectorForm";
import * as Yup from 'yup' 

interface IProps extends IStepProps {
    _setValues: (values: any) => void;
    shareholders: IPersonalDetails[];
    directors?: any[] | [];
}

interface IShareholderState {
    activeTab: string;
    modal: boolean;
    currentValues: any[];
}
class MainForm extends React.Component<
    IProps & FormikProps<IFormValues & IPersonalDetails>,
    IShareholderState
> {
    constructor(props: IProps & FormikProps<IFormValues & IPersonalDetails>) {
        super(props);
        this.state = {
            activeTab: "personal",
            modal: false,
            currentValues: []
        };
    }

    public componentDidMount = () => {
        if (!!this.props.directors) {
            this.setState({
                currentValues: this.props.directors
            })
        }
        this.props.validateForm()
    }

    public handleSubmit = () => {
        this.addValues(this.props.values);

        this.props.resetForm();
    };

    public addValues = (data: any) => {
        const mutatedShareholders = [...this.state.currentValues];
        const newdata = {
            ...data,
            category: this.state.activeTab
        };
        mutatedShareholders.push(newdata);
        this.setState({
            modal: false,
            currentValues: mutatedShareholders
        });
    };

    public handleShareholder = (data: any, event: any) => {
        this.addValues(data);
        event.target.classList.add("d-none");
    };

    public delete = (index: number) => {
        const mutated = this.state.currentValues.filter((_, i) => i !== index);

        this.setState({
            currentValues: mutated
        });
    };

    public toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    public handleNext = () => {
        this.props._setValues(this.state.currentValues);
        this.props.nextStep();
    };

    public handleFormTab = (tab: string) => {
        this.setState({
            activeTab: tab
        });
    };

    public tslintNoEmptyFunction = () => {
        return "just a placeholder";
    };

    public render() {
        const buttonProps = {
            nextStep: this.handleNext,
            // tslint:disable-next-line:object-literal-sort-keys
            back: this.props.back
        };
        const { activeTab } = this.state;
        // const {errors} = this.props;

        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Director information</h1>

                <div className="row">
                    <div className="col-12">Description</div>

                    <div className="form-group col-12">
                        <button
                            type="button"
                            onClick={this.toggle}
                            className="btn btn-default"
                        >
                            + Add a Director
                        </button>
                    </div>

                    {this.props.shareholders.map((el, i) => {
                        return (
                            <div key={i} className="form-group col-12">
                                <div className="d-flex align-items-center">
                                    {el.category === "personal"
                                        ? el.firstname + " (Individual)"
                                        : el.companyname + " (Corporate)"}
                                    <button
                                        type="button"
                                        className="btn btn-default ml-auto"
                                        onClick={this.handleShareholder.bind(
                                            this,
                                            el
                                        )}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {this.state.currentValues.map((obj: any, i) => {
                        return (
                            <div
                                key={i}
                                className="col-12 d-flex align-items-center"
                            >
                                {!!obj.firstname
                                    ? obj.firstname
                                    : obj.companyname}
                                <button
                                    type="button"
                                    className="btn btn-default ml-auto"
                                    onClick={this.delete.bind(this, i)}
                                >
                                    delete
                                </button>
                            </div>
                        );
                    })}

                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        size="lg"
                    >
                        <ModalHeader toggle={this.toggle}>
                            Director information
                        </ModalHeader>
                        <ModalBody>
                            <div className="container">
                                <form>
                                    <Row>
                                        <div className="col-md-6 mb-3">
                                            <button
                                                type="button"
                                                className={`btn btn-default w-100 ${
                                                    activeTab === "personal"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={this.handleFormTab.bind(
                                                    this,
                                                    "personal"
                                                )}
                                            >
                                                Personal
                                            </button>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <button
                                                type="button"
                                                className={`btn btn-default w-100 ${
                                                    activeTab === "corporate"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={this.handleFormTab.bind(
                                                    this,
                                                    "corporate"
                                                )}
                                            >
                                                Corporate
                                            </button>
                                        </div>
                                        <DirectorForm
                                            {...this.props}
                                            category={activeTab}
                                        />
                                        <Button
                                            color="primary"
                                            onClick={this.handleSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </Row>
                                </form>
                            </div>
                        </ModalBody>
                    </Modal>

                    <ButtonGroup
                        {...buttonProps}
                        disabled={this.state.currentValues.length === 0}
                        buttonText="Confirm share details"
                    />
                </div>
            </div>
        );
    }
}

const DirectorSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email Required"),
    phone: Yup.string()
        .max(10, "too long")
        .required("Phone Required")
});

const Step5 = withFormik<IProps & FormikProps<IFormValues>, {}>({
    mapPropsToValues: () => {
        return {
            article_of_associate: "",
            address_proof: "",
            authorized_person: "",
            firstname: "",
            lastname: "",
            email: "",
            occupation: "",
            phone: "",
            country: "",
            address: "",
            tax_number: "",
            tax_payable_country: "",
            share_composition: 0,
            companyname: "",
            business_license: "",
            identity: "",
            type: "personal",
            category: ""
        };
    },
    validationSchema: DirectorSchema,
    handleSubmit: (values, { setSubmitting }) => {
        setSubmitting(false);
    }
})(MainForm);
export default Step5;
