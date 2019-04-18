import { FormikProps } from 'formik';
import * as React from 'react';
import { Button, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { IStepProps } from 'src/Interfaces/FormProps';
import { IFormValues, IPersonalDetails } from 'src/Interfaces/FormValues';
import ButtonGroup from '../forms/partials/ButtonGroup';

interface IProps extends IStepProps {
    _setValues: (values: any) => void;
    title: string;
    field: string;
    description: string;
    _innerhtml: any;
    emitValue?: (value: any, event: string) => void | null;
    oldValues?: any[] | null;
}

interface IShareholderState {
    activeTab: string;
    modal: boolean;
    currentValues: any[];
}
class InnerForm extends React.Component<IProps & FormikProps<IPersonalDetails>, IShareholderState> {
    constructor(props: IProps & FormikProps<IFormValues & IPersonalDetails>) {
        super(props);
        this.state = {
            activeTab: 'personal',
            modal: false,
            currentValues: []
        }
    }

    public handleSubmit = () => {
        this.addValues(this.props.values)

        if (!!this.props.emitValue){
            this.props.emitValue(this.props.values, 'submit')
        }

        this.props.resetForm()
    }

    public addValues = (data: any) => {
        const mutatedShareholders = [
            ...this.state.currentValues
        ]
        const newdata = {
            ...data,
            'category': this.state.activeTab
        }
        mutatedShareholders.push(newdata)
        this.setState({
            modal: false,
            currentValues: mutatedShareholders
        })
    }

    public delete = (index: number) => {
        if (!!this.props.emitValue){
            this.props.emitValue(this.state.currentValues.find((_, i) => i === index), 'delete')
        }

        const mutated = this.state.currentValues.filter((_, i) => i !== index);


        this.setState({
            currentValues: mutated
        })
    }

    public toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    public handleNext = () => {
        this.props._setValues(this.state.currentValues)
        this.props.nextStep()
    }

    public handleFormTab = (tab: string) => {
        this.setState({
            activeTab: tab
        })
    }

    public componentDidMount = () => {
        if (!!this.props.oldValues) {
            this.setState({
                currentValues: this.props.oldValues
            })
        }
    }

    public render() {
        const buttonProps = {
            nextStep: this.handleNext,
            // tslint:disable-next-line:object-literal-sort-keys
            back: this.props.back
        }
        const {activeTab} = this.state

        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child as React.ReactElement<any>, {
              category: activeTab
            });
          });
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">{this.props.title}</h1>

                <div className="row">
                    <div className="col-12">
                        {this.props.description}
                    </div>

                    {this.props._innerhtml}
            
                    <div className="form-group col-12">
                        <button type="button" onClick={this.toggle} className="btn btn-default">+ Add a {this.props.field}</button>
                    </div>
                    {
                        this.state.currentValues.map((obj:any, i) => {
                            return (
                                <div key={i} className="col-12 d-flex align-items-center">
                                    {!!obj.firstname ? obj.firstname : obj.companyname}
                                    <button type="button" className="btn btn-default ml-auto" onClick={this.delete.bind(this,i)}>delete</button>
                                </div>
                            )
                        })
                    }

                    <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                        <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                        <ModalBody>
                            <div className="container">
                            <form>
                            <Row>
                                <div className="col-md-6 mb-3">
                                    <button type="button" className={`btn btn-default w-100 ${activeTab === 'personal' ? 'active': ''}`} onClick={this.handleFormTab.bind(this, 'personal')}>Personal</button>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <button type="button" className={`btn btn-default w-100 ${activeTab === 'corporate' ? 'active': ''}`}  onClick={this.handleFormTab.bind(this, 'corporate')}>Corporate</button>
                                </div>
                                {children}
                                <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
                            </Row>
                        </form>
                        </div>
                        </ModalBody>
                    </Modal>
                    
                    <ButtonGroup {...buttonProps} buttonText="Confirm share details" />
                </div>
            </div>
        );
    }
}

export default InnerForm;