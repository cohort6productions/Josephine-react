import { Field, FormikProps } from 'formik';
import * as React from 'react';

interface IFormValues {
    email: string;
    password: string;
    phone: string;
    country_code: string;
}
const Step2 = (props:{title:string;} & FormikProps<IFormValues>) => {
    const {title } = props;
    return (
        <>
            <h1 className="my-3">{title}</h1>
        
                <div className="row">
                    <div className="form-group col-6">
                        <label>Card No</label>
                        <Field type="number" className="form-control" name="number" />
                    </div>
                </div>
            </>
        );
    }

export default Step2;