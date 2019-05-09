import { Field, FormikProps, getIn } from "formik";
import * as React from "react";
import { IPersonalDetails } from "src/Interfaces/FormValues";
// import Thumb from '../forms/partials/Thumbnail';

const ShareholderForm = (
    props: { category: string; total_shares: number } & FormikProps<
        IPersonalDetails
    >
) => {
    const { touched, errors } = props;

    const handleFile = (value: string) => (event: React.ChangeEvent<HTMLInputElement & EventTarget>) => {
        if (event.currentTarget.files) {
            getBase64(event.currentTarget.files[0], (result:any) => {
                props.setFieldValue(value, result)
            })
            
        }
    }

    const getBase64 = (file: File, cb: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            cb(reader.result)
        };
        reader.onerror = (error) => {
            // tslint:disable-next-line:no-console
            console.log('Error: ', error);
        };
    }

    return (
        <>
            {
                props.category === "personal" ? 
                <>
                    <div className="form-group col-12 col-md-6">
                        <label>First name</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="firstname"
                        />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label>Last name</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="lastname"
                        />
                    </div>
                </>
                : 
                <>
                    <div className="form-group col-12">
                        <label>Company name</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="companyname"
                        />
                    </div>
                    <div className="form-group col-12">
                        <label>Full name of authorized person</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="lastname"
                        />
                    </div>
                </>
            }

            <div className="form-group col-12">
                <label>Email</label>
                <Field
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="john@doe.com"
                />
                {getIn(errors, 'email') && getIn(touched, 'email') && <small className="text-danger small">{getIn(errors, 'email')}</small>}

            </div>

            {
                props.category === "personal" ? 
                <>
                    <div className="form-group col-12">
                        <label>Occupation</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="occupation"
                            placeholder="Profession"
                        />
                    </div>
                    <div className="form-group col-12">
                        <label>Phone</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="+852 98217722"
                        />
                    </div>
                </>
                :
                <div />
            }

            <div className="form-group col-12">
                <label>Address</label>
                <Field
                    component="textarea"
                    className="form-control"
                    name="address"
                />
            </div>
            <div className="form-group col-12">
                <Field
                    type="text"
                    className="form-control"
                    name="country"
                    placeholder="Country"
                />
            </div>
            <hr />
            <div className="col-12">
                <hr />
                <h3>Tax Details</h3>
            </div>
            <div className="form-group col-12">
                <label>Tax Number</label>
                <Field
                    type="textarea"
                    className="form-control"
                    name="tax_number"
                />
            </div>
            <div className="form-group col-12">
                <label>Country of tax residence</label>
                <Field
                    type="text"
                    className="form-control"
                    name="tax_payable_country"
                />
            </div>

            <div className="form-group col-12">
                <label>Share compositions</label>
                <Field
                    type="number"
                    className="form-control"
                    name="share_composition"
                    // onChange={(e) =.}
                />
                /{props.total_shares}
            </div>

            <div className="col-12">
                <hr />

                <h3>Identification</h3>
            </div>
            {
                props.category === "personal" ? 
                <>
                    <div className="form-group col-12">
                        <label>Identity document</label>
                        <br/>
                        <label className="file">
                            <input type="file" name="identity" onChange={handleFile('identity')} />
                            <span className="file-custom"/>
                        </label>
                        {/* <Field name="identity" type="file" className="file" /> */}
                        {/* <Thumb file={props.values.identity} /> */}
         
                    </div>

                    <div className="form-group col-12">
                        <label>Proof of address</label>

                        <input name="address_proof" type="file" onChange={handleFile('address_proof') } className="form-control-file" />
                        {/* { !!props.values.address_proof ? <Thumb file={props.values.address_proof} /> : '' } */}
                    </div>
                </>
             : 
                <div>
                    <div className="form-group col-12">
                        <label>Business License</label>
                        {/* <Field name="business_license" type="file" className="form-control-file" /> */}

                        <input name="business_license" type="file" onChange={handleFile('business_license') } className="form-control-file" />
                        {/* { !!props.values.business_license ? <Thumb file={props.values.business_license} /> : '' } */}
                    </div>

                    <div className="form-group col-12">
                        <label>Article of association</label>
                        {/* <Field name="article_of_associate" type="file" className="form-control-file" /> */}

                        <input name="article_of_associate" type="file" onChange={handleFile('article_of_associate')} className="form-control-file" />
                        {/* { !!props.values.article_of_associate ? <Thumb file={props.values.article_of_associate} /> : '' } */}
                    </div>
                </div>
            }
            <div className="form-group col-12">
                <button type="submit" className="btn btn-default" color="primary" >Submit</button>
            </div>
        </>
    );
};

export default ShareholderForm;
