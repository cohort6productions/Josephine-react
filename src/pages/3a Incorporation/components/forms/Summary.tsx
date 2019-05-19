import { FormikProps, Field, getIn } from 'formik';
import * as React from 'react';
import {IFormValues} from 'src/Interfaces/FormValues';
// import Thumb from './partials/Thumbnail';
import { IStepProps } from 'src/Interfaces/FormProps';
import ButtonGroup from './partials/ButtonGroup';

interface ISummaryProps extends IStepProps, FormikProps<IFormValues> {
   
}
class Summary extends React.Component<ISummaryProps, {submitted: boolean}> {
    constructor(props: ISummaryProps) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    public componentDidMount = () => {
        this.props.validateForm()
    }

    public nextStep = () => {
        if (!Object.keys(this.props.errors).length) {
            this.props.nextStep()
        }
        this.props.setFieldTouched('terms')
        this.setState({
            submitted: true
        })
    }

    public render() {  
        const fileList = ['address_proof', 'identity', 'article_of_associate', 'business_license']
        const { errors, touched } = this.props
        const btnProps = {
            ...this.props,
            nextStep: this.nextStep
        }
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
                                                    ? !fileList.includes(i) 
                                                        ?
                                                        <div key={i} className="row">
                                                            <div className="col-6 text-right label" >{i}</div> 
                                                            <div className="col-6">{el[i]}</div>
                                                        </div> : <div/>
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
                                                            <div/>
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
                            <Field type="checkbox" name="terms" /> I hereby confirm that the information provided above is correct and that I accept the <a href="#">Terms & Conditions</a>.
                            <br/>
                            { this.state.submitted && getIn(errors, 'terms') && getIn(touched, 'terms') && <small className="text-danger small">{getIn(errors, 'terms')}</small>}                       
                       </div>

                       <ButtonGroup {...btnProps} buttonText="Proceed to pricings"/>
                    </div>
                </div>
            );
    }
}

export default Summary;