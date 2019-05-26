import { FormikProps } from 'formik';
import * as React from 'react';
import { Modal, ModalBody, Row } from 'reactstrap';
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
    total_shares: number;
    whole_shares: number;
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

    public setAllFieldsTouched = () => {
        const currentObj = this.props.values;
        
        Object.keys(currentObj).map((value, index) => {
            this.props.setFieldTouched(`${value}`)
        })
    }

    public handleSubmit = () => {
        if (!Object.keys(this.props.errors).length) {
            this.addValues(this.props.values)

            if (!!this.props.emitValue){
                this.props.emitValue(this.props.values, 'submit')
            }

            this.props.resetForm()
        } 

        this.setAllFieldsTouched()

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
        }, () => {
            this.props._setValues(this.state.currentValues)
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
        this.props.validateForm()
    }

    public render() {
        const buttonProps = {
            nextStep: this.handleNext,
            back: this.props.back
        }
        const {activeTab} = this.state

        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child as React.ReactElement<any>, {
              category: activeTab,
              handleSubmit: this.handleSubmit
            });
          });
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3">{this.props.title}</h1>

                <div className="row">
                    <div className="col-12">
                        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
                    </div>

                    {this.props._innerhtml}
            
                    <div className="form-group col-12">
                        {
                            this.props.total_shares > 0 ? 
                            <div className="col-12 d-flex align-items-center mb-1 control-box">
                                Add a {this.props.field}
                                
                                <button type="button" className="btn d-flex ml-auto px-0" onClick={this.toggle}><img src="/icons/add.svg"/></button>
                            </div>
                            : ''
                        }
                    </div>
                    
                    <div className="form-group col-12">
                    
                        {
                            this.state.currentValues.map((obj:any, i) => {
                                return (
                                    <div key={i} className="col-12 d-flex align-items-center mb-2 control-box">
                                        {obj.category === 'personal' ? `${obj.firstname} ${obj.lastname} (Individual)` : `${obj.companyname} (Corporate)`}
                                        <span className="share-info ml-auto">Shares: {(obj.share_composition/this.props.whole_shares * 100).toFixed(2)}%</span>
                                        <button type="button" className="btn d-flex px-0" onClick={this.delete.bind(this,i)}><img src="/icons/delete.svg"/></button>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" modalClassName="modal--incorp">
                        <ModalBody>
                            <div className="container">
                            <form className="col-12 col-md-10 mx-auto" onSubmit={this.handleSubmit}>
                            <Row>
                                <h1 className="col-12 my-3 text-center">Add a {this.props.field}</h1>
                                <div className="form-group col-12 row mb-0">
                                    <div className="col-auto px-0">
                                        <button type="button" className={`btn btn--category ${activeTab === 'personal' ? 'btn--incorp': ''}`} onClick={this.handleFormTab.bind(this, 'personal')}>Personal (Natural People)</button>
                                    </div>
                                    <div className="col-auto px-0">
                                        <button type="button" className={`btn btn--category ${activeTab === 'corporate' ? 'btn--incorp': ''}`}  onClick={this.handleFormTab.bind(this, 'corporate')}>Corporate</button>
                                    </div>
                                </div>
                                {children}
                            </Row>
                        </form>
                        </div>
                        </ModalBody>
                    </Modal>
                    
                    <ButtonGroup {...buttonProps} disabled={this.state.currentValues.length < 1} buttonText="Confirm share details" />
                </div>
            </div>
        );
    }
}

export default InnerForm;