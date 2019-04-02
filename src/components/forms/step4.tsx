import { Field, Form, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { IStepProps } from '../../Models/FormProps';
import { IFormValues, IShareholderDetails } from '../../Models/FormValues';
import ButtonGroup from './partials/ButtonGroup';

class InnerForm extends React.Component<IStepProps & FormikProps<IFormValues & IShareholderDetails>, {modal: boolean}> {
    constructor(props: IStepProps & FormikProps<IFormValues & IShareholderDetails>) {
        super(props);
        this.state = {
            modal: false
        }
    }

    public toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    public render() {
        const buttonProps = {
            nextStep: this.props.nextStep,
            // tslint:disable-next-line:object-literal-sort-keys
            back: this.props.back
        }
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Shareholders information</h1>

                <div className="row">
                    <div className="col-12">
                        The process of company incorporation takes around 2 days, and the company green box creation will take another 3 to 4 days to produce. Do let us know if you need to setup a company bank account, as we could assist in arranging an appointment with your preferred bank (HSBC, Heng Sang, DBS…).
                        </div>
                    <div className="form-group col-12">
                        <Field type="text" className="form-control" name="shares.number" disabled={true} />
                    </div>
                    <div className="form-group col-12">
                        <button type="button" onClick={this.toggle} className="btn btn-default">+ Add a share holder</button>
                    </div>

                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <div className="container">
                        <Form>
                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label>First name</label>
                                    <Field type="text" className="form-control" name="firstname" />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label>Last name</label>
                                    <Field type="text" className="form-control" name="lastname" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Email</label>
                                    <Field type="email" className="form-control" name="email" placeholder="john@doe.com" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Occupation</label>
                                    <Field type="text" className="form-control" name="occupation"  placeholder="Profession"/>
                                </div>
                                <div className="form-group col-12">
                                    <label>Phone</label>
                                    <Field type="text" className="form-control" name="phone"  placeholder="+852 98217722"/>
                                </div>
                                <div className="form-group col-12">
                                    <label>Address</label>
                                    <Field component="textarea" className="form-control" name="address"/>
                                </div>
                                <div className="form-group col-12">
                                    <Field type="text" className="form-control" name="country"/>
                                </div>
                                <hr/>
                                <h3>Tax Details</h3>
                                <div className="form-group col-12">
                                    <label>Tax Number</label>
                                    <Field type="textarea" className="form-control" name="tax_number"/>
                                </div>
                                <div className="form-group col-12">
                                    <label>Country of tax residence</label>
                                    <Field type="text" className="form-control" name="tax_payable_country"/>
                                </div>

                                <div className="form-group col-12">
                                    <label>Share compositions</label>
                                    <Field type="number" className="form-control" name="share_composition"/>/1000
                                </div>

                                <hr/>
                                <h3>Identification</h3>
                                <div className="form-group col-12">
                                    <label>Identity document</label>
                                    {/* <Field type="file" className="form-control" name=""/> */}
                                </div>

                                <div className="form-group col-12">
                                    <label>Proof of address</label>
                                    {/* <Field type="file" className="form-control" name=""/>/1000 */}
                                </div>
                                <button type="submit">Submit</button>
                            </Row>
                        </Form>
                        </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    
                    <ButtonGroup {...buttonProps} buttonText="Confirm share details" />
                </div>
            </div>
        );
    }
}

const Step4 = withFormik<IStepProps & FormikProps<IFormValues>, IShareholderDetails>({
    mapPropsToValues: () => {
        return {
            firstname: "",
            lastname: "",
            // tslint:disable-next-line:object-literal-sort-keys
            email: "",
            occupation: "",
            phone: "",
            country: "",
            address:"",
            tax_number: "",
            tax_payable_country: "",
            share_composition: 0
        };
    },

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false);
    },

})(InnerForm);
export default Step4;