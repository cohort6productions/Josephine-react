import { Field, FormikProps } from 'formik';
import * as React from 'react';
import {IStepProps} from '../../Models/FormProps';
import {IFormValues} from '../../Models/FormValues';
import ButtonGroup from './partials/ButtonGroup';

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
    }

    public handleAddressChange(index: number) {
        const {setFieldValue} = this.props;
        this.setState({
            currentIndex: index
        })
        setFieldValue('company.office_address', this.state.office_address[index].address);
        setFieldValue('company.country', this.state.office_address[index].country);

    }
    public render() {
        const {office_address, currentIndex} = this.state;
        const buttonProps = {
            nextStep: this.props.nextStep,
            // tslint:disable-next-line:object-literal-sort-keys
            back: this.props.back
        }
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Company Details</h1>
            
                    <div className="row">
                        <div className="form-group col-12">
                            <label>Company Name (First preference)</label>
                            <Field type="text" className="form-control" name="company.companyname_1" placeholder="Company Name" />
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
                            <button onClick={this.handleAddressChange.bind(this, 0)}>Centre O Wan Chai</button>
                            <button onClick={this.handleAddressChange.bind(this, 1)}>Centre O Sheung Wan</button>
                            <button onClick={this.handleAddressChange.bind(this, 2)}>Use another address</button>
                            <Field component="textarea" className="form-control" name="company.office_address" disabled={office_address[currentIndex].disabled}/>
                        </div>
                        <div className="form-group col-12">
                            <label>Country</label>
                            <Field type="text" className="form-control" name="company.country" disabled={office_address[currentIndex].disabled} />
                        </div>
                        <ButtonGroup {...buttonProps}  buttonText="Confirm company details"/>
                    </div>
                </div>
            );
    }
}

export default Step2;