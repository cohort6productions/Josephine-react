import { FormikProps, Field, getIn } from 'formik';
import * as React from 'react';
import {IFormValues} from 'src/Interfaces/FormValues';
import ButtonGroup from '../forms/partials/ButtonGroup';
import { IStepProps } from 'src/Interfaces/FormProps';

interface IOtherState {
    fund: string;
    criminal_record: string;
    business_relationship: string;
    submitted: boolean;
}
class Step7 extends React.Component<IStepProps & FormikProps<IFormValues>, IOtherState> {
    constructor(props: IStepProps & FormikProps<IFormValues>) {
        super(props)
        this.state = {
            fund: '',
            criminal_record: '',
            business_relationship: '',
            submitted: false
        }
    }
    
    public handleChange = (field:string, event: React.ChangeEvent<HTMLInputElement>) => {
        // alert(JSON.stringify(this.props.values))
        const fieldName = 'others.'+field;
        this.setState({ [field] : event.target.value} as Pick<IOtherState, any>);
        this.props.setFieldValue(fieldName, event.target.value)

    }

    public componentDidMount = () => {
        this.props.validateForm()
    }

    public render() {
        const {touched, errors} = this.props
        const buttonProps = {
            back: this.props.back,
            nextStep: () => {
                if (!getIn(errors, 'others')) {
                    this.props.nextStep()
                }
                this.setState({
                    submitted: true
                })
                this.props.setAllFieldsTouched('others')
            }
        } 
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Other Information</h1>
            
                    <div className="row">
                        <div className="form-group col-12">
                            <label>Where do the funds of your business come from? Please check relevent box:</label>
                            <div>
                                <Field type="radio" name="others.fund" value="savings" />{' '} Savings
                            </div>
                            <div>
                                <Field type="radio" name="others.fund" value="investors" />{' '} Investors
                            </div>
                            <div>
                                <Field type="radio" name="others.fund" value="borrowing" />{' '} Borrowing
                            </div>
                            <div>
                                <Field type="radio" name="others.fund" value={this.state.fund} />{' '} Other, Please Specify
                                <input type="text" className="form-control" onChange={this.handleChange.bind(this, 'fund')} />
                            </div>
                            {this.state.submitted && getIn(errors, 'others.fund') && getIn(touched, 'others.fund') ? <small className="text-danger small">{getIn(errors, 'others.fund')}</small> : ''}            

                        </div>

                        <div className="form-group col-12">
                            <label>Do you have any criminal record in Hongkong or in any country?</label>
                            <div>
                                <Field type="radio" name="others.criminal_record" value="no" />{' '}No
                            </div>

                            <div>
                                <Field type="radio" name="others.criminal_record" value={this.state.criminal_record} />{' '} Yes, Please specify
                                <input type="text" className="form-control" onChange={this.handleChange.bind(this, 'criminal_record')} />
                            </div>
                            
                            {this.state.submitted && getIn(errors, 'others.criminal_record') && getIn(touched, 'others.criminal_record') ? <small className="text-danger small">{getIn(errors, 'others.criminal_record')}</small> : ''}            
                        </div>

                        <div className="form-group col-12">
                            <label>Do you have any ...?</label>
                            <div>
                                <Field type="radio" name="others.business_relationship" value="no" />{' '}No
                            </div>
                            <div>
                                <Field type="radio" name="others.business_relationship" value={this.state.business_relationship} />{' '} Yes, Please specify
                                <input type="text" className="form-control" onChange={this.handleChange.bind(this, 'business_relationship')} />
                            </div>
                            {this.state.submitted && getIn(errors, 'others.business_relationship') && getIn(touched, 'others.business_relationship') ? <small className="text-danger small">{getIn(errors, 'others.business_relationship')}</small> : ''}            
                        </div>

                        <ButtonGroup {...buttonProps}  buttonText="Confirm details"/>
                    </div>
                </div>
            );
    }
}

export default Step7;