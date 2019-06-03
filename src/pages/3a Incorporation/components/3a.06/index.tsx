import { FormikProps, withFormik } from "formik";
import * as React from "react";
import { Modal, ModalBody, Row } from "reactstrap";
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

    public setAllFieldsTouched = () => {
        const currentObj = this.props.values;
        
        Object.keys(currentObj).map((value, index) => {
            this.props.setFieldTouched(`${value}`)
        })
    }

    public handleSubmit = () => {
        if (!Object.keys(this.props.errors).length) {
            this.addValues(this.props.values)
            this.props.resetForm()
        } 

        this.setAllFieldsTouched()
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
        const mutatedShareholders = [...this.state.currentValues];
        mutatedShareholders.push(data);
        this.setState({
            currentValues: mutatedShareholders
        });
    };

    public delete = (index: number) => {
        const mutated = this.state.currentValues.filter((_, i) => i !== index);

        this.setState({
            currentValues: mutated
        });

        this.props._setValues(this.state.currentValues);
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

    public existsInDirectorArray = (objToCompare: any) => {
        let i;
        const list = this.state.currentValues

        for (i = 0; i < list.length; i++) {
            if (list[i] === objToCompare) {
                return true;
            }
        }
    
        return false;
    }

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
                    <div className="col-12 mb-5">
                        <p>
                            There is a minimum requirement for all companies;
                            <b>One</b> shareholder (corporate or individual; HK resident or Non-HK resident), and
                            <b>One</b> individual director (HK resident or Non-HK resident) in your company.
                        </p>
                        <p>
                            The shareholder and director can be the same person, but, at least, one director (if only one or if serveral) must be an individual/natural person.
                        </p>
                    </div>

                    <div className="form-group col-12 ">
                        <div className="col-12 d-flex align-items-center mb-3 control-box">
                            Add a Director
                            
                            <button type="button" className="btn d-flex ml-auto px-0" onClick={this.toggle}><img src="/icons/add.svg"/></button>
                        </div>

                        {
                            this.props.shareholders.map((el, i) => {
                                return (  
                                        !this.existsInDirectorArray(el) ?
                                        <div
                                            key={i} 
                                            className="d-flex align-items-center mb-3 control-box"
                                            style={{
                                                background: 'rgba(0, 0, 0, 0.25)', 
                                                borderRadius: '4px', 
                                            }}>
                                            {
                                                el.category === "personal"
                                                ? el.firstname + " (Individual)"
                                                : el.companyname + " (Corporate)"
                                            }
                                            
                                            <button
                                                type="button"
                                                className="btn ml-auto px-0"
                                                onClick={this.handleShareholder.bind(
                                                    this,
                                                    el
                                                )}
                                            >
                                                <img src="/icons/add.svg" />
                                            </button>
                                        </div> :''
                                    )
                            })
                        }

                        {
                            this.state.currentValues.map((obj: any, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="col-12 d-flex align-items-center mb-3 control-box"
                                    >
                                        {obj.category === 'personal'
                                            ? obj.firstname
                                            : obj.companyname}
                                        <button type="button" className="btn d-flex ml-auto px-0" onClick={this.delete.bind(this,i)}><img src="/icons/delete.svg"/></button>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        size="lg"
                        modalClassName="modal--incorp"
                    >
                        <ModalBody>
                            <div className="container">
                                <form className="col-12 col-md-10 mx-auto">
                                    <Row>
                                        <h1 className="col-12 my-3 text-center">Add a director</h1>
                                        <div className="form-group col-12 row">
                                            <div className="col-auto px-0">
                                                <button type="button" className={`btn btn--category  ${activeTab === 'personal' ? 'btn--incorp': ''}`} onClick={this.handleFormTab.bind(this, 'personal')}>Personal (Natural People)</button>
                                            </div>
                                            <div className="col-auto px-0">
                                                <button type="button" className={`btn btn--category ${activeTab === 'corporate' ? 'btn--incorp': ''}`}  onClick={this.handleFormTab.bind(this, 'corporate')}>Corporate</button>
                                            </div>
                                        </div>
                                        <DirectorForm
                                            {...this.props}
                                            category={activeTab}
                                        />
                                        <div className="form-group col-12 text-center mt-3">
                                            <button type="submit" onClick={this.handleSubmit} className="btn btn--incorp mx-auto" color="primary">Confirm director's information</button>
                                        </div>
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

const checkIfFilesAreTooBig = (fileObj?: any): boolean => {
    let valid = true
    const file = fileObj.file
    if (file) {
        const stringLength = file.length - 'data:image/png;base64,'.length;

        const sizeInBytes = 4 * Math.ceil((stringLength / 3))*0.5624896334383812;
        const sizeInMb = (sizeInBytes/1000)/1000;


        if (sizeInMb > 1) {
            valid = false
        }
    }
    return valid
}

const DirectorSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email Required"),
    identity: Yup.object()
        .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
    address_proof: Yup.object()
        .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
    business_license: Yup.object()
        .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
    article_of_associate: Yup.object()
        .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig)
});

const Step5 = withFormik<IProps & FormikProps<IFormValues>, {}>({
    mapPropsToValues: () => {
        const FileObj = {
            name: "",
            url: "",
            file: "",
            source: "Director"
        }
        return {
            article_of_associate: FileObj,
            address_proof: FileObj,
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
            business_license: FileObj,
            identity: FileObj,
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
