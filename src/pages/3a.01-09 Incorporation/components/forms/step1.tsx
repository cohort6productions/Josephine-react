import { Field, FormikProps, getIn } from 'formik';
import * as React from 'react';
import {IFormValues} from 'src/Interfaces/FormValues';
import ButtonGroup from './partials/ButtonGroup';

interface IStep1Props {
    title:string; 
    nextStep: () => void;
    back: () => void;
}
const Step1 = (props: IStep1Props & FormikProps<IFormValues>) => {
    const { touched, errors, title } = props;
    return (
        <div className="col-12 col-md-8 mx-auto">
            <h1 className="my-3 text-center">{title}</h1>
        
                <div className="row">
                    <div className="form-group col-6">
                        <label>First Name</label>
                        <Field type="text" className="form-control" name="personal.firstname" required={true} />
                    </div>

                    <div className="form-group col-6">
                        <label>Last Name</label>
                        <Field type="text" className="form-control" name="personal.lastname" />
                    </div>
                
                    <div className="form-group col-12">
                        <label>Email</label>
                        <Field type="email" className="form-control" name="personal.email" />
                        {getIn(errors, 'personal.email') && getIn(touched, 'personal.email') && <small className="text-danger small">{getIn(errors, 'personal.email')}</small>}
                    </div>
        
                    <div className="form-group col-6">
                        <label>Country Code</label>
                        <Field type="text" className="form-control" name="personal.country_code" />
                    </div>

                    <div className="form-group col-6">
                        <label>Phone Number</label>
                        <Field type="text" className="form-control" name="personal.phone" />
                        {getIn(touched, 'personal.phone') && getIn(errors, 'personal.phone') && <small className="text-danger small">{getIn(errors, 'personal.phone')}</small>}
                    </div>
                    <ButtonGroup {...props} disabled={!!getIn(errors, 'personal')} buttonText="Confirm personal details"/>
                </div>
            </div>
        );
    }

export default Step1;