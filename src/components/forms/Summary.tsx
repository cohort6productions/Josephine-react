import { FormikProps } from 'formik';
import * as React from 'react';
import {IFormValues} from '../../Models/FormValues';

class Summary extends React.Component<FormikProps<IFormValues>, {}> {
    constructor(props:FormikProps<IFormValues>) {
        super(props);
    }
    public render() {   
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Summary</h1>
            
                    <div className="row">
                        <div className="col-12">
                            <h2> Personal Details</h2>
                            {
                               
                                    Object.keys(this.props.values.personal).map((i,j) => (
                                        <>
                                            {i}: {this.props.values.personal[i]} <br/>
                                        </>
                                
                                ))
                            }
                       </div>
                       <div className="col-12">
                            <h2> Company Details</h2>
                            {
                               
                                    Object.keys(this.props.values.company).map((i,j) => (
                                        <>
                                            {i}: {this.props.values.company[i]} <br/>
                                        </>
                                
                                ))
                            }
                       </div>
                       <div className="col-12">
                            <h2> Share Details</h2>
                            {
                               
                                    Object.keys(this.props.values.shares).map((i,j) => (
                                        <>
                                            {i}: {this.props.values.shares[i]} <br/>
                                        </>
                                
                                ))
                            }
                       </div>
                       <button type="submit" className="btn btn-success">Alert</button>
                    </div>
                </div>
            );
    }
}

export default Summary;