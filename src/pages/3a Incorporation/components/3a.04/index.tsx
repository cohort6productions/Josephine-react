import { Field, FormikProps, getIn } from 'formik';
import * as React from 'react';
import {IStepProps} from 'src/Interfaces/FormProps';
import {IFormValues} from 'src/Interfaces/FormValues';
import ButtonGroup from '../forms/partials/ButtonGroup';

class Step3 extends React.Component<IStepProps & FormikProps<IFormValues>, {}> {
    constructor(props: IStepProps & FormikProps<IFormValues>) {
        super(props);
    }

    public componentDidMount = () => {
        this.props.validateForm()
    }

    public render() {   
        const buttonProps = {
            back: this.props.back,
            nextStep: () => {
                if (!getIn(errors, 'shares')) {
                    this.props.nextStep()
                }
                this.props.setAllFieldsTouched('shares')
            }
        } 
        const {errors, touched} = this.props
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Shares Formation</h1>
            
                    <div className="row">
                        <div className="col-12">
                        The process of company incorporation takes around 2 days, and the company green box creation will take another 3 to 4 days to produce. Do let us know if you need to setup a company bank account, as we could assist in arranging an appointment with your preferred bank (HSBC, Heng Sang, DBS…).
                        </div>
                        <div className="form-group col-12">
                            <label>Class of shares</label>
                            <Field type="text" className="form-control" name="shares.class" disabled={true}/>
                        </div>
                        <div className="form-group col-12">
                            <label>Total number of shares</label>
                            <Field type="number" className="form-control" name="shares.number" placeholder="1000" />
                            {getIn(errors, 'shares.number') && getIn(touched, 'shares.number') && <small className="text-danger small">{getIn(errors, 'shares.number')}</small>}                                                                            
                        </div>
                        <div className="form-group col-12">
                            <label>Total value of share</label>
                            <Field type="number" className="form-control" name="shares.value"  placeholder="1000"/>
                            {getIn(errors, 'shares.value') && getIn(touched, 'shares.value') && <small className="text-danger small">{getIn(errors, 'shares.value')}</small>}                                                                                                    
                        </div>
                        <ButtonGroup {...buttonProps} buttonText="Confirm share details"/>
                    </div>
                </div>
            );
    }
}

export default Step3;