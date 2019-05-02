import { Field, FormikProps, getIn } from 'formik';
import * as React from 'react';
import {IStepProps} from 'src/Interfaces/FormProps';
import {IFormValues} from 'src/Interfaces/FormValues';
import ButtonGroup from '../forms/partials/ButtonGroup';

interface IOfficeAddress{
    office_address: any[];
    currentIndex: number;
}

class Step2 extends React.Component<FormikProps<IFormValues> & IStepProps, IOfficeAddress> {
    constructor(props: IStepProps & FormikProps<IFormValues>) {
        super(props);
        this.state = {
            currentIndex: 0,
            office_address: [
                {
                    address: '14/f, China Hong Kong Tower,\n 8 Henessy Road, Wan Chai',
                    country: 'Hongkong',
                    disabled: true
                },
                {
                    address: '14/f, China Hong Kong Tower, 8 Henessy Road, Sheung Wan',
                    country: 'Hongkong',
                    disabled: true                                      
                },
                {
                    address: '',
                    country: '',
                    disabled: false                    
                }
            ]
        }
    }
    public componentDidMount() {
        this.handleAddressChange(0)
        this.props.validateForm()
    }

    public handleAddressChange(index: number) {
        const {setFieldValue} = this.props;
        this.setState({
            currentIndex: index
        })
        setFieldValue('company.address', this.state.office_address[index].address);
        setFieldValue('company.country', this.state.office_address[index].country);

    }
    public render() {
        const {office_address, currentIndex} = this.state;
        const {errors, touched} = this.props;

        const buttonProps = {
            nextStep: () => {
                if (!getIn(errors, 'company')) {
                    this.props.nextStep()
                }
                this.props.setAllFieldsTouched('company')
    
            },
            back: this.props.back
        }
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Company Details</h1>
            
                    <div className="row">
                        <div className="form-group col-12">
                            <label>Company Name (First preference)</label>
                            <Field type="text" className="form-control" name="company.companyname_1" placeholder="Company Name" />
                            {getIn(errors, 'company.companyname_1') && getIn(touched, 'company.companyname_1') && <small className="text-danger small">{getIn(errors, 'company.companyname_1')}</small>}                                                
                        </div>
                        <div className="form-group col-12">
                            <label>Company Name (First preference)</label>
                            <Field type="text" className="form-control" name="company.companyname_2" placeholder="The Boring Company" />
                        </div>
                        <div className="form-group col-12">
                            <label>Nature Of Business</label>
                            <Field type="text" className="form-control" name="company.nature_of_business" placeholder="Automobile" />
                        </div>
                        <div className="form-group col-12">
                            <label>Registered Office Address</label>
                            <div className="row mx-0 justify-content-center align-items-center mb-3">
                                <button className={`col-12 col-md-4 btn ${currentIndex === 0 ? 'active' : ''}`} type="button" onClick={this.handleAddressChange.bind(this, 0)}>Centre O Wan Chai</button>
                                <button className={`col-12 col-md-4 btn ${currentIndex === 1 ? 'active' : ''}`} type="button" onClick={this.handleAddressChange.bind(this, 1)}>Centre O Sheung Wan</button>
                                <button className={`col-12 col-md-4 btn ${currentIndex === 2 ? 'active' : ''}`} type="button" onClick={this.handleAddressChange.bind(this, 2)}>Use another address</button>
                            </div>
                            <Field component="textarea" className="form-control" name="company.address" disabled={office_address[currentIndex].disabled}/>
                            {getIn(errors, 'company.address') && getIn(touched, 'company.address') && <small className="text-danger small">{getIn(errors, 'company.address')}</small>}                        
                        </div>
    
                        <div className="form-group col-12">
                            <label>Country</label>
                            <Field type="text" className="form-control" name="company.country" disabled={office_address[currentIndex].disabled} />
                            {getIn(errors, 'company.country') && getIn(touched, 'company.country') && <small className="text-danger small">{getIn(errors, 'company.country')}</small>}                                                
                        </div>
                        <ButtonGroup {...buttonProps} buttonText="Confirm company details"/>
                    </div>
                </div>
            );
    }
}

export default Step2;