import { Field, FormikProps } from 'formik';
import * as React from 'react';

interface IFormValues {
    email: string;
    password: string;
    phone: string;
    country_code: string;
}
const Step1 = (props:{title:string;} & FormikProps<IFormValues>) => {
    const { touched, errors, title } = props;
    return (
        <>
            <h1 className="my-3">{title}</h1>
        
                <div className="row">
                    <div className="form-group col-6">
                        <label>First Name</label>
                        <Field type="text" className="form-control" name="name" />
                    </div>

                    <div className="form-group col-6">
                        <label>Email</label>
                        <Field type="email" className="form-control" name="email" />
                        {touched.email && errors.email && <small className="text-danger small">{errors.email}</small>}
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-6">
                        <label>Country Code</label>
                        <Field type="text" className="form-control" name="country_code" />
                    </div>

                    <div className="form-group col-6">
                        <label>Phone Number</label>
                        <Field type="text" className="form-control" name="phone" />
                        {touched.phone && errors.phone && <small className="text-danger small">{errors.phone}</small>}
                    </div>
                </div>
            </>
        );
    }

export default Step1;