import { Field, FormikProps, getIn } from 'formik';
import * as React from 'react';
import {IStepProps} from 'src/Interfaces/FormProps';
import {IFormValues} from 'src/Interfaces/FormValues';
import ButtonGroup from '../forms/partials/ButtonGroup';

interface IOfficeAddress{
    company_secretary: any[];
    currentIndex: number;
}

class Step6 extends React.Component<FormikProps<IFormValues> & IStepProps, IOfficeAddress> {
    constructor(props: IStepProps & FormikProps<IFormValues>) {
        super(props);
        this.state = {
            currentIndex: 0,
            company_secretary: [
                {
                    name: 'CentreO',
                    email: 'info@centreo.com',
                    license_no: '000019292',
                    address: 'Central',
                    country: 'Hongkong'
                },
               
                { 
                    name: '',
                    email: '',
                    license_no: '',
                    address: '',
                    country: ''                   
                }
            ]
        }
    }

    public handleChange(index: number) {
        this.setState({
            currentIndex: index
        })
    }

    public handleSubmit = () => {
        const {currentIndex, company_secretary} = this.state;

        if (currentIndex === 1) {
            this.props.setValues({
                ...this.props.values,
                'company_secretary': company_secretary[currentIndex].address
            });
        }

        this.props.nextStep()
    }
    public render() {
        const {currentIndex} = this.state;
        const buttonProps = {
            nextStep: this.handleSubmit,
            back: this.props.back
        }
        const { touched, errors } = this.props
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Company Secretary Details</h1>
            
                    <div className="row">
                        <div className="form-group col-12">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <button className={`col-12 col-md-4 btn ${currentIndex === 0 ? 'active' : ''}`} type="button" onClick={this.handleChange.bind(this, 0)}>Centre O</button>
                                <button className={`col-12 col-md-4 btn ${currentIndex === 1 ? 'active' : ''}`} type="button" onClick={this.handleChange.bind(this, 1)}>Other</button>
                            </div>
                        </div>
                        {
                            currentIndex === 1 ?
                            <>
                                <div className="form-group col-12">
                                    <label>Name</label>
                                    <Field type="text" className="form-control" name="company_secretary.name" placeholder="Company Name" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Email</label>
                                    <Field type="text" className="form-control" name="company_secretary.email" placeholder="The Boring Company" />
                                </div>
                                <div className="form-group col-12">
                                    <label>License</label>
                                    <Field type="text" className="form-control" name="company_secretary.license_no" placeholder="Automobile" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Office Address</label>
            
                                    <Field component="textarea" className="form-control" name="company_secretary.address"/>
                                </div>
            
                                <div className="form-group col-12">
                                    <label>Country</label>
                                    <Field type="text" className="form-control" name="company_secretary.country" />
                                </div>
                            </> : <div/>
                        }
                        <ButtonGroup {...buttonProps} disabled={!getIn(touched, 'company_secretary') || getIn(errors, 'company_secretary')}  buttonText="Confirm company secretary details"/>
                    </div>
                </div>
            );
    }
}

export default Step6;