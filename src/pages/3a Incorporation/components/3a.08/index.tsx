import { FormikProps, Field, getIn } from 'formik';
import * as React from 'react';
import {IFormValues} from 'src/Interfaces/FormValues';
import ButtonGroup from '../forms/partials/ButtonGroup';


interface IStep1Props {
    nextStep: () => void;
    back: () => void;
}

interface IOtherState {
    fund: string;
    criminal_record: string;
    business_relationship: string;
}
class Step7 extends React.Component<IStep1Props & FormikProps<IFormValues>, IOtherState> {
    constructor(props: IStep1Props & FormikProps<IFormValues>) {
        super(props)
        this.state = {
            fund: '',
            criminal_record: '',
            business_relationship: ''
        }
    }
    
    public handleChange = (field:string, event: React.ChangeEvent<HTMLInputElement>) => {
        // alert(JSON.stringify(this.props.values))
        const fieldName = 'others.'+field;
        this.setState({ [field] : event.target.value} as Pick<IOtherState, any>);
        this.props.setFieldValue(fieldName, event.target.value)

    }

    public render() {
        const {touched, errors} = this.props
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
                        </div>

                        <ButtonGroup {...this.props} disabled={!getIn(touched, 'others') || getIn(errors, 'others')}  buttonText="Confirm details"/>
                    </div>
                </div>
            );
    }
}

export default Step7;