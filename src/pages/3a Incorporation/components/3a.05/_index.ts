// import { Field, FormikProps, withFormik } from 'formik';
// import * as React from 'react';
// import { Button, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
// import { IStepProps } from 'src/Interfaces/FormProps';
// import { IFormValues, IShareholderDetails } from 'src/Interfaces/FormValues';
// import ButtonGroup from '../forms/partials/ButtonGroup';
// import ShareholderForm from './ShareholderForm';

// interface IShareholderProps extends IStepProps {
//     setShareholders: (values: any) => void;
// }

// interface IShareholderState {
//     activeTab: string;
//     modal: boolean;
//     shareholders: any[];
// }
// class InnerForm extends React.Component<IShareholderProps & FormikProps<IFormValues & IShareholderDetails>, IShareholderState> {
//     constructor(props: IShareholderProps & FormikProps<IFormValues & IShareholderDetails>) {
//         super(props);
//         this.state = {
//             activeTab: 'personal',
//             modal: false,
//             shareholders: []
//         }
//     }

//     public handleSubmit = () => {
//         const mutatedShareholders = [
//             ...this.state.shareholders
//         ]
//         mutatedShareholders.push(this.props.values)
//         this.setState({
//             modal: false,
//             shareholders: mutatedShareholders
//         })

//         this.props.resetForm()
//     }

//     public delete = (index: number) => {
//         const mutatedShareholders = this.state.shareholders.filter((_, i) => i !== index);


//         this.setState({
//             shareholders: mutatedShareholders
//         })
//     }

//     public toggle = () => {
//         this.setState(prevState => ({
//             modal: !prevState.modal
//         }));
//     }

//     public handleNext = () => {
//         this.props.setShareholders(this.state.shareholders)
//         this.props.nextStep()
//     }

//     public handleFormTab = (value: string) => {
//         this.setState({
//             activeTab: value
//         })
//     }

//     public render() {
//         const buttonProps = {
//             nextStep: this.handleNext,
//             // tslint:disable-next-line:object-literal-sort-keys
//             back: this.props.back
//         }
//         const {activeTab} = this.state
//         return (
//             <div className="col-12 col-md-8 mx-auto">
//                 <h1 className="my-3 text-center">Shareholders information</h1>

//                 <div className="row">
//                     <div className="col-12">
//                         The process of company incorporation takes around 2 days, and the company green box creation will take another 3 to 4 days to produce. Do let us know if you need to setup a company bank account, as we could assist in arranging an appointment with your preferred bank (HSBC, Heng Sang, DBS…).
//                         </div>
//                     <div className="form-group col-12">
//                         <Field type="text" className="form-control" name="shares.number" disabled={true} />
//                     </div>
//                     <div className="form-group col-12">
//                         <button type="button" onClick={this.toggle} className="btn btn-default">+ Add a share holder</button>
//                     </div>
//                     {
//                         this.state.shareholders.map((obj:any, i) => {
//                             return (
//                                 <div key={i} className="col-12 d-flex align-items-center">
//                                     {obj.firstname}
//                                     <button type="button" className="btn btn-default ml-auto" onClick={this.delete.bind(this,i)}>delete</button>
//                                 </div>
//                             )
//                         })
//                     }

//                     <Modal isOpen={this.state.modal} toggle={this.toggle} unmountOnClose={true} size="lg">
//                         <ModalHeader toggle={this.toggle}>Shareholders Information</ModalHeader>
//                         <ModalBody>
//                             <div className="container">
//                             <form>
//                             <Row>
//                                 <div className="col-md-6 mb-3">
//                                     <button type="button" className={`btn btn-default w-100 ${activeTab === 'personal' ? 'active': ''}`} onClick={this.handleFormTab.bind(this, 'personal')}>Personal</button>
//                                 </div>
//                                 <div className="col-md-6 mb-3">
//                                     <button type="button" className={`btn btn-default w-100 ${activeTab === 'corporate' ? 'active': ''}`}  onClick={this.handleFormTab.bind(this, 'corporate')}>Corporate</button>
//                                 </div>
//                                 <ShareholderForm {...this.props} category={this.state.activeTab}/>
//                                 <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
//                             </Row>
//                         </form>
//                         </div>
//                         </ModalBody>
//                     </Modal>
                    
//                     <ButtonGroup {...buttonProps} buttonText="Confirm share details" />
//                 </div>
//             </div>
//         );
//     }
// }

// const Step4 = withFormik<IShareholderProps & FormikProps<IFormValues>, IShareholderDetails>({
//     mapPropsToValues: () => {
//         return {
//             article_of_associate: "",
//             address_proof: "",
//             authorized_person: "",
//             firstname: "",
//             lastname: "",
//             // tslint:disable-next-line:object-literal-sort-keys
//             email: "",
//             occupation: "",
//             phone: "",
//             country: "",
//             address:"",
//             tax_number: "",
//             tax_payable_country: "",
//             share_composition: 0,
//             companyname: "",
//             business_license: "",
//             identity: "",
//             type: "personal",

//         };
//     },

//     handleSubmit: (values, { setSubmitting }) => {
//         alert(JSON.stringify(values))
//         setSubmitting(false);
//     },

// })(InnerForm);
// export default Step4;