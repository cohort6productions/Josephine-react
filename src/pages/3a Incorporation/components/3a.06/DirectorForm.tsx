import { Field, FormikProps } from 'formik';
import * as React from 'react';
import { IPersonalDetails } from 'src/Interfaces/FormValues';

const DirectorForm = (props: {category: string;} & FormikProps<IPersonalDetails>) => {
        return (
            <>
                {
                    props.category === 'personal' ? 
                    <>
                        <div className="form-group col-12 col-md-6">
                            <label>First name</label>
                            <Field type="text" className="form-control" name="firstname" />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label>Last name</label>
                            <Field type="text" className="form-control" name="lastname" />
                        </div>
                    </> :
                    <>
                        <div className="form-group col-12">
                            <label>Company name</label>
                            <Field type="text" className="form-control" name="companyname" />
                        </div>
                        <div className="form-group col-12">
                            <label>Full name of authorized person</label>
                            <Field type="text" className="form-control" name="lastname" />
                        </div>
                    </>
                }
                <div className="form-group col-12">
                    <label>Email</label>
                    <Field type="email" className="form-control" name="email" placeholder="john@doe.com" />
                </div>
               
                {
                    props.category === 'personal' ? 
                    <>
                        <div className="form-group col-12">
                            <label>Occupation</label>
                            <Field type="text" className="form-control" name="occupation"  placeholder="Profession"/>
                        </div>
                        <div className="form-group col-12">
                            <label>Phone</label>
                            <Field type="text" className="form-control" name="phone"  placeholder="+852 98217722"/>
                        </div> 
                    </>: <div/>
                }

                
                <div className="form-group col-12">
                    <label>Address</label>
                    <Field component="textarea" className="form-control" name="address"/>
                </div>
                <div className="form-group col-12">
                    <Field type="text" className="form-control" name="country" placeholder="Country"/>
                </div>
                <hr/>
                <div className="col-12"><hr/><h3>Tax Details</h3></div>
                <div className="form-group col-12">
                    <label>Tax Number</label>
                    <Field type="textarea" className="form-control" name="tax_number"/>
                </div>
                <div className="form-group col-12">
                    <label>Country of tax residence</label>
                    <Field type="text" className="form-control" name="tax_payable_country"/>
                </div>
                
                <div className="col-12">
                    <hr/>
                    
                    <h3>Identification</h3>
                </div>
                {
                    props.category === 'personal' ?
                    <>
                        <div className="form-group col-12">
                            <label>Identity document</label>
                            {/* <Field type="file" className="form-control" name=""/> */}
                        </div>

                        <div className="form-group col-12">
                            <label>Proof of address</label>
                            {/* <Field type="file" className="form-control" name=""/>/1000 */}
                        </div>
                    </> :

                    <>
                        <div className="form-group col-12">
                            <label>Business License</label>
                            {/* <Field type="file" className="form-control" name=""/> */}
                        </div>

                        <div className="form-group col-12">
                            <label>Article of association</label>
                            {/* <Field type="file" className="form-control" name=""/>/1000 */}
                        </div>
                    </>
                }
            </>
        )
}

export default DirectorForm; 