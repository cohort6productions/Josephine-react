import { Field, FormikProps, getIn } from 'formik';
import * as React from 'react';
import { IPersonalDetails } from 'src/Interfaces/FormValues';
import {ACCEPT_FILETYPE} from "src/Interfaces/interfaces"
import { UploadInfo } from '../forms/partials/UploadInfo';
import { countries } from 'src/data/countries';
// import Thumb from '../forms/partials/Thumbnail';

const DirectorForm = (props: {category: string;} & FormikProps<IPersonalDetails>) => {

    const handleFile = (event: React.ChangeEvent<HTMLInputElement & EventTarget>) => {
        if (event.currentTarget.files) {
            const file = event.currentTarget.files[0]
            const value = event.currentTarget.name
            getBase64(file, (result:any) => {
                const fileObj = {
                    name: file.name,
                    file: result,
                    url: URL.createObjectURL(file),
                    source: "Director"
                }
                props.setFieldValue(value, fileObj)
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

    const {
        errors, 
        touched, 
        values, 
        category
    } = props;

    return (
        <>
            {
                category === 'personal' ? 
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
                <Field
                    component="select" 
                    name="country"
                    className="form-control"
                    >
                        <option value="" label="Select a country">Select a country</option>
                        {
                            countries.map((country:any) => (
                                <option key={country.name} value={country.name} label={country.name}>{country.name}</option>
                            ))
                        }
                </Field>
            </div>

            <div className="col-12 mt-3">
                <div className="title">Tax information</div>
            </div>
            <div className="form-group col-12">
                <label>Tax Number</label>
                <Field type="textarea" className="form-control" name="tax_number" placeholder="1020304858"/>
            </div>
            <div className="form-group col-12">
                <label>Country of tax residence</label>
                <Field
                    component="select" 
                    name="tax_payable_country"
                    className="form-control"
                    >
                        <option value="" label="Select a country">Select a country</option>
                        {
                            countries.map((country:any) => (
                                <option key={country.name} value={country.name} label={country.name}>{country.name}</option>
                            ))
                        }
                </Field>
            </div>
            
            <div className="col-12 mt-3">
                <div className="title">Identity documentation</div>
            </div>
            
            {
                category === "personal" ? 
                <>
                    <div className="form-group col-12">
                        <label>
                            Identity document
                            <UploadInfo />
                        </label>

                        <div className="input-group">
                            <a 
                                href={!!values.identity.url ? values.identity.url : 'javascript:void(0)'}
                                className="form-control"
                                target="_blank"
                                >
                                {values.identity.name}
                            </a>

                            <label className="input-group-btn">
                                <span className="btn upload-btn">
                                Upload <input type="file" name="identity" accept={ACCEPT_FILETYPE} onChange={handleFile}  style={{display: 'none' }} />
                                </span>
                            </label>
                        </div>
                        {getIn(errors, 'identity') && getIn(touched, 'identity') ? <small className="text-danger small">{getIn(errors, 'identity')}</small> : ''}
                    </div>

                    <div className="form-group col-12">
                        <label>
                            Proof of address
                            <UploadInfo />
                        </label>
                        <div className="input-group">
                            <a 
                                href={!!values.address_proof.url ? values.address_proof.url : 'javascript:void(0)'}
                                className="form-control"
                                target="_blank"
                                >
                                {values.address_proof.name}
                            </a>

                            <label className="input-group-btn">
                                <span className="btn upload-btn">
                                Upload <input type="file" name="address_proof" accept={ACCEPT_FILETYPE} onChange={handleFile}  style={{display: 'none' }} />
                                </span>
                            </label>
                        </div>
                        {getIn(errors, 'address_proof') && getIn(touched, 'address_proof') ? <small className="text-danger small">{getIn(errors, 'address_proof')}</small> : ''}

                    </div>
                </>
            : 
                <>
                    <div className="form-group col-12">
                        <label>
                            Business License 
                            <UploadInfo />
                        </label>

                        <div className="input-group">
                            <a 
                                href={!!values.business_license.url ? values.business_license.url : 'javascript:void(0)'}
                                className="form-control"
                                target="_blank"
                                >
                                {values.business_license.name}
                            </a>
                            <label className="input-group-btn">
                                <span className="btn upload-btn">
                                Upload <input type="file" name="business_license" accept={ACCEPT_FILETYPE} onChange={handleFile}  style={{display: 'none' }} />
                                </span>
                            </label>
                        </div>
                        {getIn(errors, 'business_license') && getIn(touched, 'business_license') ? <small className="text-danger small">{getIn(errors, 'business_license')}</small> : ''}

                    </div>

                    <div className="form-group col-12">
                        <label>
                            Article of association 
                            <UploadInfo />
                        </label>
                        
                        <div className="input-group">
                            <a 
                                href={!!values.article_of_associate.url ? values.article_of_associate.url : 'javascript:void(0)'}
                                className="form-control"
                                target="_blank"
                                >
                                {values.article_of_associate.name}
                            </a>

                            <label className="input-group-btn">
                                <span className="btn upload-btn">
                                    Upload <input type="file" name="article_of_associate" accept={ACCEPT_FILETYPE} onChange={handleFile}  style={{display: 'none' }} />
                                </span>
                            </label>
                        </div>
                        {getIn(errors, 'article_of_associate') && getIn(touched, 'article_of_associate') ? <small className="text-danger small">{getIn(errors, 'article_of_associate')}</small> : ''}
                    </div>
                </>
            }
            
        </>
    )
}

export default DirectorForm; 