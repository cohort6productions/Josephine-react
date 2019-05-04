import { FormikProps, Field, getIn } from 'formik';
import * as React from 'react';
import {IFormValues} from 'src/Interfaces/FormValues';
import Thumb from './partials/Thumbnail';

interface ISummaryProps extends FormikProps<IFormValues> {
    handleCheckout : () => void;
    back : () => void;
}
class Summary extends React.Component<ISummaryProps, {}> {
    constructor(props: ISummaryProps) {
        super(props);
    }
    public render() {  
        const fileList = ['address_proof', 'identity']
        const { errors, touched } = this.props
        return (
            <div className="col-12 col-md-8 mx-auto">
                <h1 className="my-3 text-center">Summary</h1>
            
                    <div className="row">
                        <div className="col-12">
                            <h2> Personal Details</h2>
                            {
                               
                                    Object.keys(this.props.values.personal).map((i,j) => (
                                        <div key={i} className="row">
                                        
                                            <div className="col-6 text-right label">{i}</div>
                                            <div className="col-6">{this.props.values.personal[i]} </div>
                                        </div>
                                
                                ))
                            }
                       </div>
                       <div className="col-12">
                            <h2> Company Details</h2>
                            {
                               
                                    Object.keys(this.props.values.company).map((i,j) => (
                                        <div key={i} className="row">
                                            <div className="col-6 text-right label">{i}</div> 
                                            <div className="col-6">{this.props.values.company[i]}</div>
                                        </div>
                                ))
                            }
                       </div>

                      {
                          this.props.values.shareholders.length > 0 ?
                            <div className="col-12">
                                <h2> Shareholder(s) Information</h2>
                                {
                                
                                    this.props.values.shareholders.map((el, index) => (
                                        <div key={index}>
                                            <h4>Shareholder {index +1}</h4>
                                        {
                                            Object.keys(el).map((i) => (
                                                !!el[i] 
                                                    ? fileList.includes(i) 
                                                        ?
                                                        `${i} : ${<Thumb file={el[i]} />} `
                                                        : <div key={i} className="row">
                                                            <div className="col-6 text-right label" >{i}</div> 
                                                            <div className="col-6">{el[i]}</div>
                                                        </div>
                                                    : <div/>
                                                
                                            ))
                                        }
                                        </div>
                                    ))
                                }
                            </div> : <div/>
                      }

                        {
                            this.props.values.director.length > 0 ?
                            <div className="col-12">
                                    <h2> Director(s) Information</h2>
                                    {
                                    
                                        this.props.values.director.map((el, index) => (
                                            <div key={index}>
                                                <h4>Director {index +1}</h4>
                                            {
                                                Object.keys(el).map((i) => (
                                                    !!el[i] 
                                                        ? fileList.includes(i) 
                                                            ?
                                                            `${i} : ${<Thumb file={el[i]} />} `
                                                            :   <div key={i} className="row"> 
                                                                    <div className="col-6 text-right label" >{i}</div> 
                                                                    <div className="col-6">{el[i]} </div>
                                                                </div>
                                                        : <div/>
                                                    
                                                ))
                                            }
                                            </div>
                                        ))
                                    }
                            </div> : <div/>
                       }

                       <div className="col-12">
                            <h2> Share Details</h2>
                            {
                               
                                    Object.keys(this.props.values.shares).map((i,j) => (
                                        <div key={i} className="row">
                                            <div className="col-6 text-right label">{i}</div>
                                            <div className="col-6"> {this.props.values.shares[i]} </div>
                                        </div>
                                
                                ))
                            }
                       </div>

                       <div className="col-12">
                            <h2> Company Secretary Details</h2>
                            {
                               
                                    Object.keys(this.props.values.company_secretary).map((i,j) => (
                                        <div key={i} className="row">
                                            <div className="col-6 text-center label">{i}</div> 
                                            <div className="col-6">{this.props.values.company_secretary[i]}</div>
                                        </div>
                                
                                ))
                            }
                       </div>

                       <div className="col-12">
                            <h2> Other Details</h2>
                            {
                               
                                Object.keys(this.props.values.others).map((i,j) => (
                                    <div className="row" key={i}>
                                        <div className="col-6 text-right label" >{i}</div>
                                         <div className="col-6">{this.props.values.others[i]}</div>
                                    </div>
                                ))
                            }
                            <hr/>
                       </div>

                       <div className="form-group col-12 mt-3">
                            <label>Comments</label>

                            <Field className="form-control" component="textarea" name="comments" />
                       </div>

                       <div className="form-group col-12">
                            <Field type="checkbox" name="terms" /> I hereby confirm that the information provided above is correct and I agree to the Terms and conditions.
                            <br/>
                            {getIn(errors, 'terms') && getIn(touched, 'terms') && <small className="text-danger small">{getIn(errors, 'terms')}</small>}                       
                       </div>

                       <div className="form-group row justify-content-center w-100">
                            <div className="col-auto">
                                <button type="button" className="form-control btn btn-default" onClick={this.props.back}>Back</button>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="form-control btn btn-warning" onClick={this.props.handleCheckout}>Proceed to payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Summary;