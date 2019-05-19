import { Field, FormikProps, getIn } from 'formik';
import * as React from 'react';
import { IPersonalDetails } from 'src/Interfaces/FormValues';
import {ACCEPT_FILETYPE} from "src/Interfaces/general"
// import Thumb from '../forms/partials/Thumbnail';

const DirectorForm = (props: {category: string;} & FormikProps<IPersonalDetails>) => {

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

    const {errors, touched} = props;

    return (
        <>
            {
                props.category === 'personal' ? 
                <>
                    <div className="col-12 mt-3">
                        <div className="title">Personal information</div>
                    </div>
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
                    <div className="col-12 mt-3">
                        <div className="title">Company information</div>
                    </div>
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
                {getIn(errors, 'email') && getIn(touched, 'email') ? <small className="text-danger small">{getIn(errors, 'email')}</small> : ''}            
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

            <div className="col-12 mt-3">
                <div className="title">Tax information</div>
            </div>
            <div className="form-group col-12">
                <label>Tax Number</label>
                <Field type="textarea" className="form-control" name="tax_number"/>
            </div>
            <div className="form-group col-12">
                <label>Country of tax residence</label>
                <Field type="text" className="form-control" name="tax_payable_country"/>
            </div>
            
            <div className="col-12 mt-3">
                <div className="title">Identity documentation</div>
            </div>
            
            {
                props.category === "personal" ? 
                <>
                    <div className="form-group col-12">
                        <label>Identity document</label>

                        <div className="input-group">
                            <label className="input-group-btn">
                                <span className="btn active upload-btn" style={{borderBottomRightRadius: 0, borderTopRightRadius: 0}}>
                                    +&nbsp;&nbsp;&nbsp;Upload <input type="file" name="identity" accept={ACCEPT_FILETYPE} onChange={handleFile('identity') }  style={{display: 'none' }} />
                                </span>
                            </label>
                            <input type="text" className="form-control" />
                        </div>

                        {/* <input 
                            name="identity" 
                            type="file" 
                            onChange={handleFile('identity') } 
                            className="form-control-file" 
                            accept={ACCEPT_FILETYPE}
                            /> */}
                    
                        {getIn(errors, 'identity') && getIn(touched, 'identity') ? <small className="text-danger small">{getIn(errors, 'identity')}</small> : ''}
                    </div>

                    <div className="form-group col-12">
                        <label>Proof of address</label>

                        <div className="input-group">
                            <label className="input-group-btn">
                                <span className="btn active upload-btn" style={{borderBottomRightRadius: 0, borderTopRightRadius: 0}}>
                                    +&nbsp;&nbsp;&nbsp;Upload <input type="file" name="address_proof" accept={ACCEPT_FILETYPE} onChange={handleFile('address_proof') }  style={{display: 'none' }} />
                                </span>
                            </label>
                            <input type="text" className="form-control" />
                        </div>

                        {/* <input 
                            name="address_proof" 
                            type="file" 
                            onChange={handleFile('address_proof') } 
                            className="form-control-file"
                            accept={ACCEPT_FILETYPE}
                            /> */}
                        {getIn(errors, 'address_proof') && getIn(touched, 'address_proof') ? <small className="text-danger small">{getIn(errors, 'address_proof')}</small> : ''}

                    </div>
                </>
             : 
                <>
                    <div className="form-group col-12">
                        <label>Business License</label>
                        <div className="input-group">
                            <label className="input-group-btn">
                                <span className="btn active upload-btn" style={{borderBottomRightRadius: 0, borderTopRightRadius: 0}}>
                                    +&nbsp;&nbsp;&nbsp;Upload <input type="file" name="business_license" accept={ACCEPT_FILETYPE} onChange={handleFile('business_license') }  style={{display: 'none' }} />
                                </span>
                            </label>
                            <input type="text" className="form-control" />
                        </div>

                        {/* <input 
                            name="business_license" 
                            type="file" 
                            onChange={handleFile('business_license') } 
                            className="form-control-file" 
                            accept={ACCEPT_FILETYPE}
                            /> */}
                        {getIn(errors, 'business_license') && getIn(touched, 'business_license') ? <small className="text-danger small">{getIn(errors, 'business_license')}</small> : ''}

                    </div>

                    <div className="form-group col-12">
                        <label>Article of association</label>
                        <div className="input-group">
                            <label className="input-group-btn">
                                <span className="btn active upload-btn" style={{borderBottomRightRadius: 0, borderTopRightRadius: 0}}>
                                    +&nbsp;&nbsp;&nbsp;Upload <input type="file" name="article_of_associate" accept={ACCEPT_FILETYPE} onChange={handleFile('article_of_associate') }  style={{display: 'none' }} />
                                </span>
                            </label>
                            <input type="text" className="form-control" />
                        </div>
                        {/* <input 
                            name="article_of_associate" 
                            type="file" 
                            onChange={handleFile('article_of_associate')} 
                            className="form-control-file" 
                            accept={ACCEPT_FILETYPE}
                            /> */}
                        {getIn(errors, 'article_of_associate') && getIn(touched, 'article_of_associate') ? <small className="text-danger small">{getIn(errors, 'article_of_associate')}</small> : ''}
                    </div>
                </>
            }
        </>
    )
}

export default DirectorForm; 